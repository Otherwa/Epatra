require('dotenv').config()
const Nodemailer = require("nodemailer");
const fs = require('fs');
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.setMaxListeners(20);

const transporter = Nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

// ! file size issue 1.4sec delay
const attachment = {
    filename: 'ICON_Brochure.pdf',
    content: fs.createReadStream('./store/files/ICON_Brochure.pdf'), // Use createReadStream to load the file
    contentType: 'application/pdf'
};

async function sendmail(res, req, to, subject, text, message) {
    const mailOptions = {
        from: process.env.EMAIL,
        to: to,
        subject: subject,
        text: text,
        html: message,
        // ! only for current instance
        attachments: [attachment]
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