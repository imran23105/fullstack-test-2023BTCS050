import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "professional.imran023@gmail.com",
    pass: "vpyg swzg uerd bgsn"
  }
});

export const sendContactMail = async (form) => {
  try {
    await transporter.sendMail({
      from: `"Imran Ansari Mock Test" <professional.imran023@gmail.com>`,
      to: form.email, 
      subject: "Thank You for Your Inquiry",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <tr>
              <td style="padding: 20px; text-align: center; background-color: #007bff; border-top-left-radius: 8px; border-top-right-radius: 8px;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Message Received!</h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px;">
                <h2 style="color: #333333; font-size: 20px;">Hello, ${form.name}!</h2>
                <p style="color: #555555; line-height: 1.6;">Thank you for getting in touch with us. We have received your message and will get back to you shortly.</p>
                <hr style="border: none; border-top: 1px solid #eeeeee; margin: 20px 0;">
                <h3 style="color: #333333; font-size: 18px;">Your Details:</h3>
                <p style="color: #555555; margin: 5px 0;"><b>Name:</b> ${form.name}</p>
                <p style="color: #555555; margin: 5px 0;"><b>Email:</b> ${form.email}</p>
                <p style="color: #555555; margin: 5px 0;"><b>Description:</b> ${form.dis}</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px; text-align: center; font-size: 12px; color: #888888; background-color: #f9f9f9; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
                <p style="margin: 0;">&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </div>
      `
    });
    console.log("Email sent successfully");
  } catch (err) {
    console.error("Error sending email:", err);
  }
};