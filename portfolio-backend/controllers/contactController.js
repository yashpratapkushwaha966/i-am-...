import Contact from "../models/Contact.js";
import resend from "../config/resend.js";

export const sendContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["yashkushwaha485005@gmail.com"],
      subject: `📩 New Contact - ${subject || "Portfolio"}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2 style="color:#ff8a00;">New Portfolio Contact</h2>

          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone || "-"}</p>
          <p><b>Subject:</b> ${subject || "-"}</p>

          <hr>

          <h3>Message</h3>

          <p>${message}</p>
        </div>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};