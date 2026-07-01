import "../../../css/contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";
import { sendContact } from "../../../api/contactApi";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await sendContact(form);

      if (res.data.success) {
        toast.success("Message Sent Successfully 🚀");

        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">

        <span className="section-tag">Contact</span>

        <h2>Let's Work Together</h2>

        <div className="contact-container">

          {/* Left Side */}

          <div className="contact-info">

            <h3>Get In Touch</h3>

            <p>
              Have a project or want to collaborate?
              Feel free to contact me.
            </p>

            <div className="contact-links">

              <a href="mailto:yashkushwaha485005@gmail.com">
                <FaEnvelope />
                yashkushwaha485005@gmail.com
              </a>

              <a
                href="https://github.com/yashpratapkushwaha966"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
                LinkedIn
              </a>

            </div>

          </div>

          {/* Right Side */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              className="primary-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;