import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-rc.png";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5513997877500&text=Ol%C3%A1!%20Entrei%20no%20seu%20Site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.";
const PHONE_NUMBER = "(13) 99787-7500";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Fale Conosco", href: "/contato" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Top Bar with Phone */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container-custom flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <a
              href={`tel:+5513997877500`}
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">{PHONE_NUMBER}</span>
            </a>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-whatsapp transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-custom py-4 px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="RC Contabilidade & Negócios"
              className={`h-12 md:h-14 w-auto transition-all duration-300 ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium transition-all duration-300 relative group ${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-primary-foreground hover:text-gold"
                } ${isActive(link.href) ? (isScrolled ? "text-primary" : "text-gold") : ""}`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  } ${isScrolled ? "bg-primary" : "bg-gold"}`}
                />
              </Link>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm py-3 px-6"
            >
              <MessageCircle className="w-5 h-5" />
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-foreground hover:bg-muted"
                : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4 bg-card rounded-2xl p-6 shadow-xl border border-border">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium py-2 transition-colors ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm py-3 justify-center mt-2"
              >
                <MessageCircle className="w-5 h-5" />
                Fale Conosco
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
