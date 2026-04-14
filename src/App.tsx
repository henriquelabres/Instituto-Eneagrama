import { Hero } from './components/Hero';
import { EnneagramGrid } from './components/EnneagramGrid';
import { SpinFunnel } from './components/SpinFunnel';
import { PricingGrid } from './components/PricingGrid';
import { AuthoritySection } from './components/AuthoritySection';

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-orange-500/30 flex flex-col">
      <nav className="h-[70px] border-b border-white/5 flex items-center justify-between px-12 shrink-0">
        <div className="font-serif text-[20px] font-bold text-orange-500 tracking-[2px] uppercase">
          Instituto Eneagrama
        </div>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[1px] text-muted-foreground">
          <span>Metodologia</span>
          <span>Certificação</span>
          <span>Coaching Executivo</span>
          <span>Resultados</span>
        </div>
        <button className="px-6 py-2.5 border border-orange-500 bg-transparent text-orange-500 uppercase text-[10px] font-semibold cursor-pointer tracking-[1px] hover:bg-orange-500/10 transition-colors">
          Consultoria Corporativa
        </button>
      </nav>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 p-12 gap-12 items-center max-w-[1440px] mx-auto w-full">
        <Hero />
        <EnneagramGrid />
      </div>

      <AuthoritySection />
      <SpinFunnel />
      <PricingGrid />
      
      <footer className="py-12 text-center border-t border-white/5 mt-24 bg-[#0A0A0A]">
        <p className="text-muted-foreground text-[11px] uppercase tracking-[1px]">
          &copy; {new Date().getFullYear()} Instituto Eneagrama. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
