import nodemailer from 'nodemailer';

const { MAIL_USER, MAIL_PASS, MAIL_HOST, MAIL_PORT, MAIL_SERVICE } = process.env



const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  service: MAIL_SERVICE,
  port: MAIL_PORT,
  secure: false,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
});

class Mail {
  static async send(to, subject, text, html) {
    console.log(MAIL_USER, MAIL_PASS, MAIL_HOST, MAIL_PORT, MAIL_SERVICE, 9999)

    try {
      await transporter.sendMail({
        from: MAIL_USER,
        to,
        subject,
        text,
        html,
      });
    } catch (e) {
      console.log(e)
    }


  }
}

export default Mail;
