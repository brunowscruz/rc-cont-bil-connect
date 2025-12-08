import { Award, Users, Clock, Target, CheckCircle, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5513997877500&text=Ol%C3%A1!%20Entrei%20no%20seu%20Site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.";

const Sobre = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Oferecer soluções contábeis personalizadas que impulsionam o crescimento sustentável dos nossos clientes.",
    },
    {
      icon: Award,
      title: "Visão",
      description: "Ser referência em contabilidade na Baixada Santista, reconhecida pela excelência e inovação nos serviços.",
    },
    {
      icon: Users,
      title: "Valores",
      description: "Ética, transparência, comprometimento, inovação e relacionamento humanizado com nossos clientes.",
    },
  ];

  const differentials = [
    "Atendimento personalizado e humanizado",
    "Mais de 15 anos de experiência no mercado",
    "Equipe especializada e atualizada",
    "Tecnologia de ponta para gestão contábil",
    "Suporte ágil via WhatsApp",
    "Transparência em todos os processos",
  ];

  return (
    <main className="overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Sobre a <span className="text-gold">RC Contabilidade</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 animate-slide-up">
              Há mais de 15 anos transformando a gestão contábil de empresas em Praia Grande e região.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nossa <span className="text-primary">História</span>
              </h2>
              <p className="text-muted-foreground mb-4 text-lg">
                A RC Contabilidade & Negócios nasceu da paixão por ajudar empreendedores a realizarem seus sonhos. 
                Fundada em Praia Grande, nossa empresa cresceu junto com a cidade, acompanhando as transformações 
                do mercado e sempre buscando as melhores soluções para nossos clientes.
              </p>
              <p className="text-muted-foreground mb-6 text-lg">
                Ao longo de mais de 15 anos, construímos uma relação de confiança com mais de 500 clientes, 
                oferecendo não apenas serviços contábeis, mas uma verdadeira parceria para o sucesso dos negócios.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">+15</p>
                    <p className="text-sm text-muted-foreground">Anos de Experiência</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">+500</p>
                    <p className="text-sm text-muted-foreground">Clientes Atendidos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Equipe RC Contabilidade"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <Award className="w-10 h-10 text-gold" />
                  <div>
                    <p className="text-lg font-bold text-foreground">99%</p>
                    <p className="text-sm text-muted-foreground">Satisfação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos <span className="text-primary">Pilares</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Os valores que guiam nossa atuação e nosso compromisso com você.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <div
                key={item.title}
                className="card-service text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Por que escolher a <span className="text-primary">RC Contabilidade</span>?
              </h2>
              <div className="grid gap-4">
                {differentials.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-6 h-6 text-whatsapp flex-shrink-0" />
                    <span className="text-foreground text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageCircle className="w-6 h-6" />
                  Fale com Nossa Equipe
                </a>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="Escritório RC Contabilidade"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Sobre;
