import { Star, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5513997877500&text=Ol%C3%A1!%20Entrei%20no%20seu%20Site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.";

const testimonials = [
  {
    name: "Pedro Santos",
    date: "13/12/2024",
    text: "Ótima empresa, atendimento excelente e profissional. Resolveram todas as minhas pendências rapidamente.",
    avatar: "PS",
  },
  {
    name: "Ana Carolina",
    date: "26/11/2024",
    text: "Todos são super atenciosos, profissionais e eficientes. Não tem um problema que não consigam resolver.",
    avatar: "AC",
  },
  {
    name: "Bruno Ferreira",
    date: "06/10/2024",
    text: "Super atenciosa, responde rapidamente e teve um preço excelente para a declaração do imposto de renda.",
    avatar: "BF",
  },
  {
    name: "Mariana Costa",
    date: "15/09/2024",
    text: "Equipe composta por profissionais cordiais, atenciosos e eficientes. Minha declaração foi concluída em 30 minutos!",
    avatar: "MC",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Mais de 500 Clientes satisfeitos com nosso escritório de contabilidade
          </h2>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
            Nível de Satisfação 99% Junto aos Nossos Clientes (NPS)
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Com mais de 15 anos de experiência e um índice de satisfação acima de 99%, a RC Contabilidade é sua escolha ideal para quem busca segurança, transparência e eficiência na contabilidade empresarial.
          </p>
        </div>

        {/* Google Rating Badge */}
        <div className="flex justify-center mb-12">
          <div className="bg-card rounded-2xl p-6 shadow-lg text-center">
            <p className="text-xl font-bold text-foreground mb-2">EXCELENTE</p>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-gold fill-current" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm mb-3">Com base em avaliações verificadas</p>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="font-semibold text-foreground">Google</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                </div>
                <svg className="w-5 h-5 ml-auto" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm">{testimonial.text}</p>
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

export default TestimonialsSection;
