import { MessageCircle, Star, Users, Award } from "lucide-react";
import logo from "@/assets/logo-rc.png";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5513997877500&text=Ol%C3%A1!%20Entrei%20no%20seu%20Site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 w-full h-full" style={{ background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(67, 56, 202, 0.85) 100%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom w-full section-padding">
        <div className="max-w-3xl">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src={logo} 
              alt="RC Contabilidade & Negócios" 
              className="h-16 md:h-20 w-auto brightness-0 invert"
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-slide-up">
            Contabilidade em Praia Grande com{" "}
            <span className="text-primary-light">alta satisfação</span> e{" "}
            <span className="text-gold">resultados comprovados</span>.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Ajudamos empresas como a sua a crescer com segurança, transparência e eficiência nos resultados. Sua Parceira Contábil de confiança!
          </p>

          {/* CTA Button */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              QUERO SABER MAIS
            </a>
          </div>

          {/* Stats Badge */}
          <div className="mt-12 flex flex-wrap items-center gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Users className="w-8 h-8 text-gold" />
              <div>
                <p className="text-2xl font-bold text-primary-foreground">+500</p>
                <p className="text-sm text-primary-foreground/70">Clientes Atendidos</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-6 py-3">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div>
                <p className="text-lg font-bold text-primary-foreground">99%</p>
                <p className="text-sm text-primary-foreground/70">Satisfação</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Award className="w-8 h-8 text-gold" />
              <div>
                <p className="text-lg font-bold text-primary-foreground">+15 Anos</p>
                <p className="text-sm text-primary-foreground/70">Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
