const Nodemailer = require("nodemailer");
require('dotenv').config()

const transporter = Nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

function sendmail(res, req, to, subject, text, message) {
    const mailOptions = {
        from: process.env.EMAIL,
        to: to,
        subject: subject,
        text: text,
        html: message
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            res.status(200).json({ msg: 200 })
            console.log('Email sent: ' + info.response)
        }
    })
}

module.exports = { sendmail }