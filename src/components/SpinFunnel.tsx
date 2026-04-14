import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    id: 'situation',
    title: 'Situação Atual',
    description: 'Qual é o contexto atual da sua liderança?',
    question: 'Qual é o seu cargo e o tamanho da equipe que você gerencia?',
    options: ['C-Level / Diretoria (50+ pessoas)', 'Gerência Sênior (15-50 pessoas)', 'Coordenação (Até 15 pessoas)', 'Fundador / Empreendedor']
  },
  {
    id: 'problem',
    title: 'Problema Central',
    description: 'Identifique o atrito na operação.',
    question: 'Qual é o principal gargalo na gestão de pessoas hoje?',
    options: ['Falhas de Comunicação e Silos', 'Falta de Engajamento e Alinhamento', 'Burnout e Sobrecarga', 'Lentidão na Execução']
  },
  {
    id: 'implication',
    title: 'A Implicação',
    description: 'Entenda o custo da inércia.',
    question: 'Qual é o custo real dessa ineficiência ou do turnover atual para o negócio?',
    options: ['Perda de Receita Direta', 'Queda Drástica na Moral', 'Oportunidades Perdidas', 'Estagnação do Crescimento']
  },
  {
    id: 'need',
    title: 'Necessidade de Solução',
    description: 'A transformação através do Eneagrama.',
    question: 'Como uma equipe de liderança totalmente alinhada e de alta performance mudaria seu cenário?',
    options: ['Crescimento Acelerado', 'Retenção de Talentos', 'Execução Impecável', 'Inovação Sustentável']
  },
  {
    id: 'capture',
    title: 'Desbloqueie seu Diagnóstico',
    description: 'Insira seus dados para receber uma avaliação executiva personalizada.',
  }
];

export function SpinFunnel() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionSelect = (option: string) => {
    setAnswers({ ...answers, [steps[currentStep].id]: option });
    setTimeout(() => {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }, 300);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
    console.log({ answers, formData });
  };

  if (isSubmitted) {
    return (
      <section className="py-24 px-6 w-full max-w-3xl mx-auto">
        <Card className="bg-charcoal-800 border-border text-center py-12">
          <CardContent className="flex flex-col items-center">
            <CheckCircle2 className="w-16 h-16 text-orange-500 mb-6" />
            <h3 className="font-serif text-3xl font-semibold mb-4 text-foreground">Avaliação Concluída</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Obrigado, {formData.name}. Seu diagnóstico executivo está sendo gerado. Nossa equipe entrará em contato em breve.
            </p>
          </CardContent>
        </Card>
      </section>
    );
  }

  const step = steps[currentStep];

  return (
    <section className="py-24 px-6 w-full max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-[32px] font-normal mb-4 text-foreground">
          Diagnóstico <span className="text-orange-500 italic">Estratégico</span>
        </h2>
        <p className="text-muted-foreground text-[14px]">
          Descubra os gargalos ocultos na sua equipe de liderança.
        </p>
      </div>

      <Card className="bg-slate-gray border-white/5 overflow-hidden relative rounded-none">
        <div className="absolute top-0 left-0 h-1 bg-orange-500 transition-all duration-500" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }} />
        
        <CardHeader>
          <CardTitle className="text-[10px] text-orange-500 uppercase tracking-[2px] mb-2">Etapa {currentStep + 1} de {steps.length}</CardTitle>
          <h3 className="font-serif text-2xl text-foreground font-normal">{step.title}</h3>
          <CardDescription className="text-muted-foreground text-[13px]">{step.description}</CardDescription>
        </CardHeader>

        <CardContent className="min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep < steps.length - 1 ? (
                <div className="space-y-6">
                  <p className="text-lg font-medium text-foreground">{step.question}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.options?.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleOptionSelect(option)}
                        className={`p-4 text-left rounded-none border transition-all duration-200 text-[13px] ${
                          answers[step.id] === option 
                            ? 'border-orange-500 bg-orange-500/10 text-orange-500' 
                            : 'border-white/5 bg-background/50 text-foreground hover:border-orange-500 hover:bg-orange-500/10'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input 
                      id="name" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-background/50 border-border focus-visible:ring-orange-500" 
                      placeholder="João Silva" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail Corporativo</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-background/50 border-border focus-visible:ring-orange-500" 
                      placeholder="joao@empresa.com.br" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">WhatsApp / Telefone</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-background/50 border-border focus-visible:ring-orange-500" 
                      placeholder="+55 (11) 90000-0000" 
                    />
                  </div>
                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-charcoal-900 font-bold text-[12px] uppercase tracking-[1px] h-14 mt-4 rounded-none">
                    Solicitar Diagnóstico Estratégico <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              )}
            </motion.div>
          </AnimatePresence>
        </CardContent>
        
        {currentStep < steps.length - 1 && (
          <CardFooter className="flex justify-between border-t border-border pt-6">
            <Button 
              variant="ghost" 
              onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
              className="text-muted-foreground hover:text-foreground"
            >
              Voltar
            </Button>
            <span className="text-sm text-muted-foreground">
              {Object.keys(answers).length} / {steps.length - 1} Respondidas
            </span>
          </CardFooter>
        )}
      </Card>
    </section>
  );
}
