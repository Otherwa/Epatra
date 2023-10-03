const express = require('express')
const rateLimit = require('express-rate-limit')
const { sendmail } = require('./mailconfig')
var bodyParser = require('body-parser')

const app = express()
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

const port = 8080 || (process.env.PORT)

// Apply the rate limiting middleware to API calls only
app.use(apiLimiter)
// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log("Sevices Running")
app.get('/', (req, res) => {
    res.json({ "msg": "Mail services Running" })
})


app.post('/api/email/:key', (req, res) => {
    let key = req.params.key
    if (key == 'SURTURFTW') {
        console.log(req.body)
        const to = req.body.to
        const subject = req.body.subject
        const text = req.body.text
        const message = req.body.message

        // ! Asyc Await 
        sendmail(res, req, to, subject, text, message)
    } else {
        res.json({
            "msg": "200"
        })
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
