import { Card, CardContent } from "@/components/ui/card";
import { Code2, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Código Limpo",
    description: "Desenvolvo com as melhores práticas e padrões de código."
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Foco em criar aplicações rápidas e otimizadas."
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Trabalho bem em equipe e valorizo a comunicação."
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Sobre Mim
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700 delay-200">
              <p className="text-lg text-foreground leading-relaxed">
                Sou um desenvolvedor full stack com experiência em criar aplicações web modernas e escaláveis. 
                Tenho paixão por tecnologia e estou sempre aprendendo novas ferramentas e frameworks.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Minha jornada na programação começou há alguns anos e desde então tenho me dedicado a 
                aprimorar minhas habilidades e contribuir para projetos desafiadores que fazem a diferença.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Além de programar, gosto de compartilhar conhecimento, participar de comunidades tech 
                e estar sempre atualizado com as últimas tendências do desenvolvimento web.
              </p>
            </div>
            
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 animate-in fade-in slide-in-from-right duration-700 delay-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-muted-foreground text-sm mb-2">Adicione sua foto aqui</p>
                  <p className="text-xs text-muted-foreground/70">
                    Área reservada para uma foto profissional
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            {highlights.map((item, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
