import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(220, 225, 235, 0.95), rgba(220, 225, 235, 0.9)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <p className="text-sm font-medium text-primary">Bem-vindo ao meu portfólio</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Olá, eu sou{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Isaac Reis
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Desenvolvedor Back-end, Modelador e especialista em Unreal Engine, com foco em criar experiências digitais imersivas e soluções eficientes que unem tecnologia e criatividade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" variant="gradient" asChild>
              <a href="#projects">Ver Projetos</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Entre em Contato</a>
            </Button>
          </div>
          
          <div className="pt-12">
            <a 
              href="#about" 
              className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="text-sm font-medium">Role para explorar</span>
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
