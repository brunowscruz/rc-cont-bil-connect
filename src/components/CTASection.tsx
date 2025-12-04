import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo-rc.png";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5513997877500&text=Ol%C3%A1!%20Entrei%20no%20seu%20Site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.";

const CTASection = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-primary-dark to-foreground" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 container-custom">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={logo} 
              alt="RC Contabilidade & Negócios" 
              className="h-16 md:h-20 w-auto mx-auto brightness-0 invert"
            />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Sua Contabilidade em Praia Grande<br />
            <span className="text-gold">está a um clique de distância!</span>
          </h2>
          
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Entre em contato agora mesmo pelo WhatsApp e descubra como a RC Contabilidade pode ajudar seu negócio a crescer em Praia Grande com segurança e eficiência.
          </p>

          {/* Main CTA */}
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xl mb-12 animate-pulse-slow"
          >
            <MessageCircle className="w-7 h-7" />
            FALE CONOSCO AGORA
          </a>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
              <Phone className="w-5 h-5" />
              <span>(13) 99787-7500</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
              <MapPin className="w-5 h-5" />
              <span>Praia Grande - SP</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
              <Clock className="w-5 h-5" />
              <span>Seg - Sex: 9h às 18h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
