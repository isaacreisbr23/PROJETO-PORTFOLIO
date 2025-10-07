import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS", "Javascript"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "NestJS", "PostgreSQL", "Prisma", "REST APIs", "TypeScript", "Python", "Javascript"]
  },
  {
    category: "Ferramentas",
    skills: ["Git", "Docker", "VS Code", "Insomnia", "Postman", "Blender", "Unreal Engine 5 +", "Godot"]
  },
  {
    category: "Soft Skills",
    skills: ["Comunicação", "Trabalho em Equipe", "Resolução de Problemas", "Adaptabilidade", "Criatividade", "Organização"]
  },

  {
    category : "Data science",
    skills: ["Python", "SQL"]
  },

  {

    category: "Outras linguagens",
    skills: ["C++", "C", "Javascript", "GD Script"]

  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              🎯 Habilidades
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                    <div className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-foreground rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-default"
                      >
                        <span className="font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
