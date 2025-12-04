import { MessageCircle, Check } from "lucide-react";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5513997877500&text=Ol%C3%A1!%20Entrei%20no%20seu%20Site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.";

const plans = [
  {
    name: "MEI Pro",
    features: [
      "Pró-labore",
      "Folha de pagamento (1 Funcionário)",
      "Atendimento via WhatsApp",
      "Atendimento via E-mail",
      "Conta PJ Gratuita",
      "Faturamento até R$6.750 mil/mês",
      "Emissão de notas fiscais pela nossa equipe",
      "Levantamento de Pendências incluso",
      "Relatório de Desempenho Trimestral",
    ],
    popular: false,
  },
  {
    name: "Simples Nacional",
    features: [
      "Pró-labore de até 4 sócios",
      "Folha de pagamento de até 2 Funcionários",
      "Atendimento via WhatsApp prioritário",
      "Atendimento via E-mail",
      "Conta PJ Gratuita",
      "Faturamento até R$150 mil/mês",
      "Emissão de até 10 notas fiscais/mês",
      "Levantamento de Pendências incluso",
      "Relatório de Desempenho Trimestral",
      "Reunião Trimestral com Contador",
    ],
    popular: true,
  },
];

const PlansSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            NOSSOS <span className="text-primary">PLANOS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para o seu negócio. Todos incluem suporte dedicado via WhatsApp.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.popular 
                  ? 'bg-primary text-primary-foreground shadow-glow scale-105' 
                  : 'bg-card border border-border shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gold text-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              {/* Plan Icon */}
              <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${
                plan.popular ? 'bg-primary-foreground/20' : 'bg-primary/10'
              }`}>
                <svg 
                  className={`w-8 h-8 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <h3 className={`text-2xl font-bold mb-6 ${plan.popular ? '' : 'text-foreground'}`}>
                {plan.name}
              </h3>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'text-gold-light' : 'text-whatsapp'
                    }`} />
                    <span className={`text-sm ${
                      plan.popular ? 'text-primary-foreground/90' : 'text-muted-foreground'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90' 
                    : 'btn-whatsapp'
                }`}
              >
                <MessageCircle className="w-5 h-5" />
                QUERO ESTE PLANO
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlansSection;
