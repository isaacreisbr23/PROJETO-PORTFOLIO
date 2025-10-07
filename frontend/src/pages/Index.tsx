import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Menu } from "lucide-react";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        
        <main className="flex-1 overflow-auto">
          {/* Mobile Header with Trigger */}
          <header className="lg:hidden fixed top-0 left-0 right-0 z-50 h-14 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex items-center h-full px-4">
              <SidebarTrigger className="lg:hidden">
                <Menu className="h-5 w-5" />
              </SidebarTrigger>
              <span className="ml-4 font-semibold text-foreground">Portfólio</span>
            </div>
          </header>

          {/* Main Content */}
          <div className="lg:pt-0 pt-14">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
            
            {/* Footer */}
            <footer className="py-8 bg-background border-t border-border">
              <div className="container mx-auto px-6 text-center">
                <p className="text-muted-foreground">
                  © {new Date().getFullYear()} Isaac Gabriel A. dos Reis. Todos os direitos reservados.
                </p>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
