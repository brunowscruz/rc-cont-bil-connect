import { Building2, Calculator, Users, FileText, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5513997877500&text=Ol%C3%A1!%20Entrei%20no%20seu%20Site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.";

const services = [
  {
    icon: Building2,
    title: "Assessoria para Abertura de Empresa",
    description: "Nosso departamento contábil está pronto para atender todas as necessidades legais da sua empresa, do início ao sucesso.",
  },
  {
    icon: Calculator,
    title: "Planejamento Tributário Inteligente",
    description: "Sua empresa com uma assessoria completa para atender a todas as obrigações fiscais e reduzir a carga tributária legalmente.",
  },
  {
    icon: Users,
    title: "Departamento de Pessoal",
    description: "Imprescindível para qualquer empresa, sendo responsável pela execução de toda a rotina de departamento pessoal.",
  },
  {
    icon: FileText,
    title: "Imposto de Renda",
    description: "Temos um time especialista para realizar a declaração de imposto de renda para pessoas físicas e jurídicas de forma assertiva e rápida.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider">SUA EMPRESA VAI TER ACESSO:</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Soluções Contábeis Personalizadas<br />
            <span className="text-primary">Para Sua Empresa Crescer.</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card-service group text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
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
      </div>
    </section>
  );
};

export default ServicesSection;
