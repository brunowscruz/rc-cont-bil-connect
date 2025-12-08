import {
  Building2,
  FileText,
  Calculator,
  Users,
  TrendingUp,
  ShieldCheck,
  ClipboardCheck,
  Banknote,
  FileCheck,
  Receipt,
  MessageCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5513997877500&text=Ol%C3%A1!%20Entrei%20no%20seu%20Site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.";

const Servicos = () => {
  const services = [
    {
      icon: Building2,
      title: "Abertura de Empresas",
      description: "Cuidamos de todo o processo de abertura da sua empresa, desde a escolha do tipo societário até o registro nos órgãos competentes.",
      features: ["MEI, ME, EPP, LTDA, EIRELI", "Registro na Junta Comercial", "Inscrições Municipais e Estaduais", "Alvará de Funcionamento"],
    },
    {
      icon: FileText,
      title: "Contabilidade Empresarial",
      description: "Serviços contábeis completos para manter sua empresa em dia com todas as obrigações legais e fiscais.",
      features: ["Escrituração Contábil", "Balanço Patrimonial", "DRE e DLPA", "Livros Contábeis"],
    },
    {
      icon: Calculator,
      title: "Planejamento Tributário",
      description: "Análise estratégica para reduzir a carga tributária da sua empresa de forma legal e segura.",
      features: ["Análise de Regime Tributário", "Recuperação de Impostos", "Elisão Fiscal", "Consultoria Especializada"],
    },
    {
      icon: Users,
      title: "Departamento Pessoal",
      description: "Gestão completa da folha de pagamento e todas as obrigações trabalhistas.",
      features: ["Folha de Pagamento", "Admissão e Demissão", "Férias e 13º Salário", "eSocial e FGTS Digital"],
    },
    {
      icon: TrendingUp,
      title: "Imposto de Renda",
      description: "Declaração de Imposto de Renda Pessoa Física e Jurídica com segurança e precisão.",
      features: ["IRPF Completo", "IRPJ e CSLL", "Carnê-Leão", "Malha Fina"],
    },
    {
      icon: ShieldCheck,
      title: "Regularização de Empresas",
      description: "Colocamos sua empresa em dia com todas as obrigações fiscais e contábeis pendentes.",
      features: ["Regularização de CNPJ", "Parcelamento de Débitos", "Certidões Negativas", "Baixa de Empresas"],
    },
    {
      icon: Receipt,
      title: "Emissão de Notas Fiscais",
      description: "Configuração e suporte completo para emissão de notas fiscais de serviços e produtos.",
      features: ["NF-e e NFS-e", "Configuração de Sistema", "Treinamento", "Suporte Contínuo"],
    },
    {
      icon: ClipboardCheck,
      title: "Obrigações Acessórias",
      description: "Entrega de todas as obrigações acessórias exigidas pelos órgãos competentes.",
      features: ["SPED Fiscal e Contábil", "ECD e ECF", "DCTF e DIRF", "GIA e EFD-Reinf"],
    },
    {
      icon: Banknote,
      title: "BPO Financeiro",
      description: "Terceirização do financeiro da sua empresa para você focar no que realmente importa.",
      features: ["Contas a Pagar e Receber", "Conciliação Bancária", "Fluxo de Caixa", "Relatórios Gerenciais"],
    },
    {
      icon: FileCheck,
      title: "Consultoria Empresarial",
      description: "Orientação estratégica para tomada de decisões importantes para o seu negócio.",
      features: ["Análise de Viabilidade", "Planejamento Estratégico", "Gestão de Custos", "Indicadores de Performance"],
    },
  ];

  return (
    <main className="overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Nossos <span className="text-gold">Serviços</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 animate-slide-up">
              Soluções contábeis completas para sua empresa crescer com segurança e tranquilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-service group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Precisa de um serviço específico?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Solicitar Orçamento
          </a>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Servicos;
