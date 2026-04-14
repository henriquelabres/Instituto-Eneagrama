import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "A Matriz do Eneagrama reconfigurou completamente a forma como nossa diretoria se comunica. Resolvemos um gargalo de 2 anos em 3 semanas.",
    author: "Sarah Jenkins",
    role: "CEO, TechNova Solutions"
  },
  {
    quote: "Como Eneatipo 3, eu estava levando minha equipe ao burnout. Este coaching me ajudou a pivotar de uma pressão implacável para um empoderamento estratégico.",
    author: "David Chen",
    role: "VP de Operações, Global Logistics"
  },
  {
    quote: "A avaliação de liderança mais profunda que já implementamos. Não apenas rotula você; fornece um roteiro preciso para a integração e crescimento.",
    author: "Elena Rodriguez",
    role: "CHRO, Apex Financial"
  }
];

const logos = [
  "Acme Corp", "GlobalBank", "TechFlow", "Nexus Industries", "Quantum Partners"
];

export function AuthoritySection() {
  return (
    <section className="w-full border-t border-white/5 bg-[#0A0A0A]">
      <div className="h-[80px] flex items-center justify-between px-12 max-w-[1440px] mx-auto w-full">
        <p className="text-[10px] uppercase text-muted-foreground w-[120px]">Confiado pela Fortune 500</p>
        <div className="flex gap-12 opacity-40 overflow-hidden">
          {logos.map((logo, i) => (
            <div key={i} className="font-bold text-[14px] tracking-[2px] text-foreground whitespace-nowrap">
              {logo.toUpperCase()}
            </div>
          ))}
        </div>
      </div>

      <div className="py-24 bg-background">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-foreground">
            Impacto <span className="text-orange-500 italic">Executivo</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="bg-transparent border-none shadow-none">
                      <CardContent className="flex flex-col items-center text-center p-6">
                        <Quote className="w-12 h-12 text-orange-500/20 mb-6" />
                        <p className="text-xl md:text-2xl font-serif text-foreground/90 leading-relaxed mb-8">
                          "{testimonial.quote}"
                        </p>
                        <div>
                          <p className="font-semibold text-foreground text-lg">{testimonial.author}</p>
                          <p className="text-orange-500 text-sm uppercase tracking-wider mt-1">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-charcoal-800 border-border hover:bg-orange-500 hover:text-charcoal-900" />
            <CarouselNext className="hidden md:flex -right-12 bg-charcoal-800 border-border hover:bg-orange-500 hover:text-charcoal-900" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
