import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';

const enneagramTypes = [
  {
    id: 1,
    name: "O Reformador",
    role: "Líder Perfeccionista",
    strength: "Integridade inegociável e altíssimos padrões de qualidade.",
    blindSpot: "Microgerenciamento e rigidez crítica."
  },
  {
    id: 2,
    name: "O Ajudante",
    role: "Líder Servidor",
    strength: "Empatia excepcional e construção de equipes coesas.",
    blindSpot: "Dificuldade em impor limites e receber feedback objetivo."
  },
  {
    id: 3,
    name: "O Realizador",
    role: "Líder de Alta Performance",
    strength: "Foco implacável em metas e execução estratégica.",
    blindSpot: "Priorização da imagem sobre a conexão autêntica."
  },
  {
    id: 4,
    name: "O Individualista",
    role: "Líder Visionário",
    strength: "Autenticidade profunda e intuição criativa.",
    blindSpot: "Volatilidade emocional e sentimento de incompreensão."
  },
  {
    id: 5,
    name: "O Investigador",
    role: "Líder Estratégico",
    strength: "Profunda capacidade analítica e objetividade.",
    blindSpot: "Arrogância intelectual e distanciamento emocional."
  },
  {
    id: 6,
    name: "O Lealista",
    role: "Líder Solucionador",
    strength: "Excepcional avaliação de riscos e lealdade à equipe.",
    blindSpot: "Paralisia por análise e foco no pior cenário."
  },
  {
    id: 7,
    name: "O Entusiasta",
    role: "Líder Inovador",
    strength: "Energia inesgotável e ideação visionária.",
    blindSpot: "Falta de acabamento e evitação de conversas difíceis."
  },
  {
    id: 8,
    name: "O Desafiador",
    role: "Líder Comandante",
    strength: "Ação decisiva e proteção instintiva da equipe.",
    blindSpot: "Intimidação e aversão à vulnerabilidade."
  },
  {
    id: 9,
    name: "O Pacificador",
    role: "Líder Inclusivo",
    strength: "Mediação harmoniosa e presença estabilizadora.",
    blindSpot: "Evitação de conflitos e agressividade passiva."
  }
];

export function EnneagramGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="w-full">
      <div className="text-left mb-8">
        <h2 className="font-serif text-2xl font-semibold mb-2 text-foreground">
          A Matriz dos <span className="text-orange-500 italic">Eneatipos</span>
        </h2>
        <p className="text-muted-foreground text-sm max-w-md">
          Mapeie os Centros de Inteligência e Instintos da sua liderança. 
          Passe o mouse sobre cada Eneatipo para revelar a Principal Força e o Desafio na Gestão.
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-3 h-auto md:h-[480px]">
        {enneagramTypes.map((type) => (
          <Card 
            key={type.id}
            className="relative overflow-hidden bg-slate-gray border-border hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 cursor-pointer p-5 rounded-none group"
            onMouseEnter={() => setHoveredId(type.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <CardContent className="p-0 h-full flex flex-col justify-start items-start text-left">
              <AnimatePresence mode="wait">
                {hoveredId === type.id ? (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="w-full"
                  >
                    <div className="mb-4">
                      <h4 className="text-orange-500 text-[10px] font-semibold uppercase tracking-wider mb-1">Principal Força</h4>
                      <p className="text-[11px] text-foreground/90 leading-[1.4]">{type.strength}</p>
                    </div>
                    <div className="mt-3 border-t border-white/5 pt-2">
                      <h4 className="text-destructive text-[10px] italic mb-1">Desafio na Gestão</h4>
                      <p className="text-[10px] text-destructive italic">{type.blindSpot}</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="title"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-orange-500 font-serif text-2xl opacity-50 absolute top-4 right-4 group-hover:opacity-100 transition-opacity">
                      {type.id}
                    </div>
                    <h3 className="font-sans text-[13px] font-semibold mb-2 uppercase text-foreground">{type.name}</h3>
                    <p className="text-muted-foreground text-[11px] leading-[1.4]">{type.role}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
