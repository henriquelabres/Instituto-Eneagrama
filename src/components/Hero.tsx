import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative w-full flex items-center justify-start overflow-visible">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_#1A1A1A_0%,_#121212_60%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-orange-500/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-orange-500/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-[1px] border-orange-500/20 rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[440px] text-left mx-auto lg:mx-0"
        >
          <p className="text-orange-500 text-[11px] uppercase tracking-[3px] mb-4 block">
            Liderança de Alta Performance
          </p>
          <h1 className="font-serif text-[42px] leading-[1.1] mb-6 font-normal text-foreground">
            A Arquitetura da <br />
            <span className="italic text-orange-500">Maestria Executiva</span>
          </h1>
          <p className="text-[14px] leading-[1.6] text-muted-foreground mb-8">
            Além da gestão. Descubra as nove psicologias de liderança que separam gestores comuns de visionários. Autoconhecimento analítico e high-ticket para o 1%.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-charcoal-900 px-8 py-6 border-none font-bold uppercase text-[12px] tracking-[1px] rounded-none flex items-center gap-2">
              Auditar sua Matriz de Liderança <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
