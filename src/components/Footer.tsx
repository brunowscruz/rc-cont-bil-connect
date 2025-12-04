import logo from "@/assets/logo-rc.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container-custom px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="RC Contabilidade & Negócios" 
              className="h-12 w-auto brightness-0 invert"
            />
          </div>

          {/* Copyright */}
          <p className="text-primary-foreground/60 text-sm text-center">
            © {currentYear} RC Contabilidade & Negócios - Contabilidade em Praia Grande SP. Todos os direitos reservados.
          </p>

          {/* Social/Contact */}
          <div className="flex items-center gap-4">
            <a 
              href="https://api.whatsapp.com/send?phone=5513997877500"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
