import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <p className="contact-subtext">
          Ready to get styled by professionals? Reach out to us on WhatsApp or call to book your salon appointment.
        </p>

        <div className="contact-links">
          {/* WhatsApp Button */}
          <a
            className="btn contact-btn whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/919380132306?text=Hi,%20I%20want%20to%20book%20a%20saree%20draping%20service"
            aria-label="Contact us on WhatsApp"
          >
            <FaWhatsapp className="whatsapp-icon" />
            Book on WhatsApp
          </a>

          {/* Instagram Button */}
          <a
            className="btn contact-btn instagram-btn"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/beauty5_box.official_acc?igsh=NTZudWd0Z2l5cmUw"
            aria-label="Contact us on Instagram"
          >
            <FaInstagram className="instagram-icon" />
            Message us on Instagram
          </a>
        </div>

        <p style={{ marginTop: "24px", fontSize: "0.95rem", color: "var(--text-light)" }}>
          <strong>Call us:</strong>{" "}
          <a
            href="tel:+919380132306"
            style={{ color: "var(--primary)", textDecoration: "none", cursor: "pointer" }}
          >
            +91 93801 32306
          </a>
        </p>
      </div>
    </section>
  );
}
