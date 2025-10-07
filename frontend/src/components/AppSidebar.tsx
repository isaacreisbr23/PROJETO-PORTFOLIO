import { Home, User, Briefcase, Code, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import profileImage from "@/assets/profile-placeholder.png";

const navigationItems = [
  { title: "Início", url: "#hero", icon: Home },
    { title: "Sobre", url: "#about", icon: User },
    { title: "Projetos", url: "#projects", icon: Briefcase },
  { title: "Habilidades", url: "#skills", icon: Code },
  { title: "Contato", url: "#contact", icon: Mail },
];

const socialLinks = [
  { title: "GitHub", url: "https://github.com/isaacreisbr23", icon: Github },
  { title: "LinkedIn", url: "https://www.linkedin.com/in/isaac-gabriel-avelino-dos-reis-933684378/", icon: Linkedin },
  { title: "Twitter", url: "https://twitter.com", icon: Twitter },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentHash = location.hash || "#hero";

  const isActive = (url: string) => currentHash === url;
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent>
        {/* Profile Section */}
        <div className="p-6 border-b border-sidebar-border">
          <div className={`flex flex-col items-center gap-3 transition-all duration-300 ${isCollapsed ? 'scale-75' : ''}`}>
            <div className="relative">
              <img
                src={profileImage}
                alt="Foto de Perfil"
                className="w-20 h-20 rounded-full object-cover ring-2 ring-primary/20"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full border-2 border-sidebar-background"></div>
            </div>
            {!isCollapsed && (
              <>
                <h2 className="text-lg font-bold text-sidebar-foreground">Isaac Reis</h2>
                <p className="text-sm text-sidebar-foreground/70 text-center">Desenvolvedor Full Stack</p>
              </>
            )}
          </div>
        </div>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Social Links */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel>Redes Sociais</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {socialLinks.map((link) => (
                <SidebarMenuItem key={link.title}>
                  <SidebarMenuButton asChild>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <link.icon className="h-4 w-4" />
                      <span>{link.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
