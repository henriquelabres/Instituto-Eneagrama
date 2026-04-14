import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const packages = [
  {
    title: "Coaching Executivo",
    description: "Mentoria intensiva 1-a-1 para executivos C-level.",
    price: "Sob Consulta",
    features: [
      "Mapeamento Profundo do Eneatipo",
      "Mitigação de Desafios na Gestão",
      "Frameworks de Decisão Estratégica",
      "Sessões Quinzenais de Estratégia",
      "Acesso Direto via WhatsApp"
    ],
    cta: "Aplicar para Coaching",
    highlighted: false
  },
  {
    title: "Treinamento Corporativo",
    description: "Transforme a dinâmica e a execução da sua equipe de liderança.",
    price: "In Company",
    features: [
      "Mapeamento de Eneatipos da Equipe",
      "Workshops de Resolução de Conflitos",
      "Quebra de Silos de Comunicação",
      "Alinhamento de Alta Performance",
      "Revisões Trimestrais de Progresso"
    ],
    cta: "Agendar Reunião",
    highlighted: true
  },
  {
    title: "Formação e Certificação",
    description: "Torne-se um facilitador certificado em liderança com Eneagrama.",
    price: "Maestria",
    features: [
      "Metodologia Completa e Instintos",
      "Técnicas de Facilitação Avançadas",
      "Interpretação de Avaliações",
      "Modelos de Integração de Negócios",
      "Acesso à Rede de Alumni"
    ],
    cta: "Entrar na Lista de Espera",
    highlighted: false
  }
];

export function PricingGrid() {
  return (
    <section className="py-24 px-6 w-full max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-serif text-[32px] md:text-[42px] font-normal mb-4 text-foreground">
          Engajamentos <span className="text-orange-500 italic">Transformacionais</span>
        </h2>
        <p className="text-muted-foreground text-[14px] max-w-2xl mx-auto">
          Programas de alto impacto desenhados para líderes que exigem mudança comportamental mensurável e alinhamento estratégico.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {packages.map((pkg, index) => (
          <Card 
            key={index} 
            className={`relative overflow-hidden rounded-none ${
              pkg.highlighted 
                ? 'bg-slate-gray border-orange-500 shadow-2xl shadow-orange-500/10 md:-translate-y-4' 
                : 'bg-background border-white/5'
            }`}
          >
            {pkg.highlighted && (
              <div className="absolute top-0 inset-x-0 h-1 bg-orange-500" />
            )}
            <CardHeader className="text-center pb-8 pt-10">
              <CardTitle className="font-serif text-2xl mb-2 font-normal">{pkg.title}</CardTitle>
              <CardDescription className="text-[13px]">{pkg.description}</CardDescription>
              <div className="mt-6">
                <span className="text-3xl font-bold font-serif text-foreground">{pkg.price}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className={`w-4 h-4 mr-3 shrink-0 mt-0.5 ${pkg.highlighted ? 'text-orange-500' : 'text-muted-foreground'}`} />
                    <span className="text-foreground/90 text-[13px]">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-8 pb-10">
              <Button 
                className={`w-full h-14 text-[12px] font-bold uppercase tracking-[1px] rounded-none ${
                  pkg.highlighted 
                    ? 'bg-orange-500 hover:bg-orange-600 text-charcoal-900' 
                    : 'bg-slate-gray hover:bg-slate-gray/80 text-foreground border border-white/5'
                }`}
              >
                {pkg.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
