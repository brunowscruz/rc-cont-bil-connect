import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5513997877500&text=Ol%C3%A1!%20Entrei%20no%20seu%20Site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.";
const PHONE_NUMBER = "(13) 99787-7500";
const EMAIL = "contato@rccontabilidade.com.br";

const Contato = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone / WhatsApp",
      info: PHONE_NUMBER,
      link: `tel:+5513997877500`,
      action: "Ligar agora",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: PHONE_NUMBER,
      link: WHATSAPP_LINK,
      action: "Enviar mensagem",
      isWhatsApp: true,
    },
    {
      icon: Mail,
      title: "E-mail",
      info: EMAIL,
      link: `mailto:${EMAIL}`,
      action: "Enviar e-mail",
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Praia Grande, SP",
      action: "Ver no mapa",
    },
  ];

  return (
    <main className="overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Fale <span className="text-gold">Conosco</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 animate-slide-up">
              Estamos prontos para atender você. Entre em contato e descubra como podemos ajudar seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <a
                key={item.title}
                href={item.link}
                target={item.isWhatsApp ? "_blank" : undefined}
                rel={item.isWhatsApp ? "noopener noreferrer" : undefined}
                className="card-service text-center group animate-fade-in hover:border-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ${
                    item.isWhatsApp
                      ? "bg-whatsapp/10 group-hover:bg-whatsapp"
                      : "bg-primary/10 group-hover:bg-primary"
                  }`}
                >
                  <item.icon
                    className={`w-8 h-8 transition-colors duration-300 ${
                      item.isWhatsApp
                        ? "text-whatsapp group-hover:text-white"
                        : "text-primary group-hover:text-primary-foreground"
                    }`}
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-3">{item.info}</p>
                <span
                  className={`text-sm font-medium ${
                    item.isWhatsApp ? "text-whatsapp" : "text-primary"
                  }`}
                >
                  {item.action} →
                </span>
              </a>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form Area */}
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Envie sua <span className="text-primary">mensagem</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Prefere falar diretamente conosco? Use nosso WhatsApp para um atendimento rápido e personalizado.
              </p>

              <div className="bg-muted rounded-2xl p-8 border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-whatsapp flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Atendimento via WhatsApp</h3>
                    <p className="text-muted-foreground">Resposta rápida e personalizada</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Segunda a Sexta: 8h às 18h</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Sábado: 9h às 13h</span>
                  </div>
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center text-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  Iniciar Conversa
                </a>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-center text-muted-foreground">
                    Ou ligue diretamente:
                  </p>
                  <a
                    href={`tel:+5513997877500`}
                    className="flex items-center justify-center gap-2 mt-2 text-xl font-bold text-primary hover:text-primary-dark transition-colors"
                  >
                    <Phone className="w-6 h-6" />
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>
            </div>

            {/* Info Side */}
            <div className="animate-slide-up">
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-6">Por que nos escolher?</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Atendimento Humanizado</h4>
                      <p className="text-primary-foreground/80 text-sm">
                        Tratamos cada cliente de forma única, entendendo suas necessidades específicas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Resposta Rápida</h4>
                      <p className="text-primary-foreground/80 text-sm">
                        Respondemos suas dúvidas em até 2 horas em horário comercial.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Sem Burocracia</h4>
                      <p className="text-primary-foreground/80 text-sm">
                        Processo simplificado para você focar no que realmente importa: seu negócio.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-gold">★</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">99% de Satisfação</h4>
                      <p className="text-primary-foreground/80 text-sm">
                        Nossos clientes recomendam nossos serviços para amigos e familiares.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Highlight */}
              <div className="mt-6 bg-card rounded-2xl p-6 border-2 border-gold shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center">
                    <Phone className="w-7 h-7 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ligue agora:</p>
                    <a
                      href={`tel:+5513997877500`}
                      className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
                    >
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Contato;
