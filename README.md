# Epatra 📨

Epatra Email Sender is a Node.js application that uses the Nodemailer library to send emails via Gmail's SMTP server.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine.
- A Gmail account for sending emails.
- Enable "Less secure apps" on your Gmail account. (Note: This is not recommended for production use. Consider using OAuth2 for secure authentication.)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/epatra-email-sender.git
   ```

2. Navigate to the project directory:

   ```bash
   cd epatra-email-sender
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and configure your Gmail email and password:

   ```env
   EMAIL=your_email@gmail.com
   PASSWORD=your_password
   ```

## Usage

You can use the `sendmail` function from this application to send emails programmatically. Here's an example of how to use it:

```javascript
const { sendmail } = require("./epatra-email-sender");

const to = "recipient@example.com";
const subject = "Hello, World!";
const text = "This is a test email sent from Epatra Email Sender.";
const message = "<p>This is a test email sent from Epatra Email Sender.</p>";

sendmail(to, subject, text, message)
  .then(() => {
    console.log("Email sent successfully!");
  })
  .catch((error) => {
    console.error("Error sending email:", error);
  });
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Nodemailer: https://nodemailer.com/
```

Make sure to replace the placeholder values (e.g., `yourusername`, `your_email@gmail.com`, and `your_password`) with your actual information. Additionally, consider providing more details about your project, such as its purpose, features, and any additional configuration options.
