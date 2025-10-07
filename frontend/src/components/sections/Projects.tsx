import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/ProjetoWebSocketUnreal.png";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Integração WebSocket com Unreal Engine",
    description: "Controle o estado de objetos interativos em uma experiência VR pelo seu dispositivo via WebSockets.",
    image: project1,
    tags: ["React", "TypeScript", "Python", "C++", "C", "HTML/Css"],
    github: "https://github.com/isaacreisbr23/TesteSiteWebsocketUnreal",
    demo: "https://github.com/isaacreisbr23/TesteSiteWebsocketUnreal"
  },
  {
    title: "App Mobile",
    description: "Aplicativo mobile com funcionalidades avançadas e design intuitivo.",
    image: project2,
    tags: ["React Native", "Node.js", "MongoDB"],
    github: "#",
    demo: "#"
  },
  {
    title: "Dashboard Analytics",
    description: "Dashboard de analytics com gráficos interativos e visualização de dados.",
    image: project3,
    tags: ["Next.js", "Chart.js", "PostgreSQL"],
    github: "#",
    demo: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              🚀 Meus Projetos
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Confira alguns dos projetos que desenvolvi recentemente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </a>
                    </Button>
                    <Button size="sm" variant="default" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Quer ver mais? Confira meu perfil no GitHub!
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/isaacreisbr23" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                Ver mais no GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
