  import { useEffect, useState } from "react";

  export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("home");

    const links = [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "services", label: "Services" },
      { id: "gallery", label: "Gallery" },
      { id: "contact", label: "Contact" },
    ];

    // Close mobile menu on scroll
    useEffect(() => {
      const handleScroll = () => setIsOpen(false);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ✅ Active link on scroll
    useEffect(() => {
      const sections = document.querySelectorAll("section");

      const handleScroll = () => {
        let current = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
          }
        });

        setActive(current || "home");
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <nav className="navbar">
        <div className="container navbar-content">
          <h2 className="brand">Beauty Box </h2>

          <div className={`nav-links ${isOpen ? "open" : ""}`}>
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={active === link.id ? "active" : ""}
                onClick={() => setActive(link.id)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    );
  }
