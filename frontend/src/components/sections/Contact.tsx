import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "isaacreisbr23@gmail.com",
    link: "mailto:isaacreisbr23@gmail.com"
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "+55 (31) 995787684",
    link: "tel:+5531995787684"
  },
  {
    icon: MapPin,
    title: "Localização",
    value: "Minas Gerais, Brasil",
    link: "#"
  }
];

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Adicione aqui a lógica de envio do formulário
    console.log("Formulário enviado!");
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              🤝 Entre em Contato
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quer tonar sua ideia realidade? Vamos conversar!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    <a 
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nome
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Seu nome completo" 
                      required
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="seu.email@exemplo.com" 
                      required
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Assunto
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Sobre o que você quer falar?" 
                    required
                    className="border-border/50 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Mensagem
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Escreva sua mensagem aqui..." 
                    rows={6}
                    required
                    className="border-border/50 focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  variant="gradient"
                  className="w-full md:w-auto"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
