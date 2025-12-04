import { MessageCircle, CheckCircle2, Scissors, Sparkles, Dumbbell, GraduationCap, Briefcase, Store, Users } from "lucide-react";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5513997877500&text=Ol%C3%A1!%20Entrei%20no%20seu%20Site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.";

const benefits = [
  "Atendimento personalizado e humanizado",
  "Contadores experts à sua disposição",
  "Acompanhamento diário do seu negócio",
  "Transparência total nos processos",
  "Suporte via WhatsApp rápido e eficiente",
];

const niches = [
  { name: "MEI", icon: Users },
  { name: "Barbearias", icon: Scissors },
  { name: "Manicures e Esteticistas", icon: Sparkles },
  { name: "Salões de Beleza", icon: Sparkles },
  { name: "Personal Trainers", icon: Dumbbell },
  { name: "Professores Particulares", icon: GraduationCap },
  { name: "Consultores", icon: Briefcase },
  { name: "Lojas", icon: Store },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" 
                alt="Contador profissional trabalhando - RC Contabilidade em Praia Grande"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-glow hidden md:block">
              <p className="text-4xl font-bold">+15</p>
              <p className="text-sm">Anos de Experiência</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              A Melhor Contabilidade<br />
              <span className="text-primary">em Praia Grande SP.</span>
            </h2>
            
            <p className="text-muted-foreground mb-8 text-lg">
              Não importa se você precisa abrir uma empresa, transformar seu MEI para ME ou migrar de outra contabilidade em Praia Grande. 
              Todo esse processo será feito por contadores experts, e você poderá acompanhar tudo de perto.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-whatsapp flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Mission Statement */}
            <div className="bg-card rounded-2xl p-6 border-l-4 border-primary mb-8">
              <p className="text-muted-foreground italic">
                "Prover soluções contábeis acuradas e eficientes para empresas de qualquer porte, 
                auxiliando-os a alcançar estabilidade financeira e crescimento sustentável."
              </p>
            </div>

            {/* CTA */}
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

        {/* Niches Section */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
            Somos Especialistas nos Segmentos Abaixo
          </h3>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Nossa contabilidade em Praia Grande atende diversos nichos com expertise e dedicação
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {niches.map((niche, index) => {
              const Icon = niche.icon;
              return (
                <div 
                  key={index} 
                  className="bg-card rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium text-sm">{niche.name}</p>
                </div>
              );
            })}
          </div>
          
          <p className="text-muted-foreground text-center mt-6 text-sm">
            Entre outros segmentos... <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Fale conosco!</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
