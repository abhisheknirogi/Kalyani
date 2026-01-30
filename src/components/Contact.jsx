import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>

        <p className="contact-subtext">
         Ready to get styled by professionals? Book your salon appointment today.
        </p>

        <a
          className="btn contact-btn whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/919380132306?text=Hi,%20I%20want%20to%20book%20a%20saree%20draping%20service"
        >
          <FaWhatsapp className="whatsapp-icon" />
          Book on WhatsApp
        </a>
      </div>
    </section>
  );
}
