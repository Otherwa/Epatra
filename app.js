const express = require('express')
const rateLimit = require('express-rate-limit')
const { sendmail } = require('mailconfig')


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

console.log("Sevices Running")
app.get('/', (req, res) => {
    res.json({ "msg": "Mail services Running" })
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/api/emails/', async (req, res) => { })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})