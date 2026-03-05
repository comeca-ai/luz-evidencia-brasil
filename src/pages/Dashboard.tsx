import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MessageSquarePlus,
  FolderOpen,
  Star,
  MessageCircle,
  ChevronDown,
  ChevronRight,
  Settings,
  LogOut,
  ChevronsUpDown,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import HeroSearch from "@/components/HeroSearch";
import icon from "@/assets/comevidencias_icon.svg";

const suggestions = [
  "Qual o tratamento de primeira linha para HAS?",
  "Indicações de anticoagulação na fibrilação atrial",
  "Critérios de Light para derrame pleural",
  "Manejo inicial do AVC isquêmico agudo",
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [favoritosOpen, setFavoritosOpen] = useState(false);
  const [conversasOpen, setConversasOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar collapsible="icon" className="border-r border-sidebar-border">
          <SidebarHeader className="p-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  className="w-full justify-start gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
                >
                  <MessageSquarePlus className="h-4 w-4 flex-shrink-0" />
                  <span>Nova conversa</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>

          <SidebarContent className="px-3">
            <SidebarMenu>
              {/* Coleções */}
              <SidebarMenuItem>
                <SidebarMenuButton className="justify-start gap-3 rounded-lg px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors">
                  <FolderOpen className="h-4 w-4 flex-shrink-0" />
                  <span>Coleções</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>

            {/* Favoritos */}
            <Collapsible open={favoritosOpen} onOpenChange={setFavoritosOpen} className="mt-4">
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-accent transition-colors">
                <span className="flex items-center gap-3">
                  <Star className="h-4 w-4 flex-shrink-0" />
                  Favoritos
                </span>
                {favoritosOpen ? (
                  <ChevronDown className="h-3.5 w-3.5" />
                ) : (
                  <ChevronRight className="h-3.5 w-3.5" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 pt-2 pb-1">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Adicione perguntas aos favoritos para acessá-las rapidamente.
                </p>
              </CollapsibleContent>
            </Collapsible>

            {/* Conversas */}
            <Collapsible open={conversasOpen} onOpenChange={setConversasOpen} className="mt-1">
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-accent transition-colors">
                <span className="flex items-center gap-3">
                  <MessageCircle className="h-4 w-4 flex-shrink-0" />
                  Conversas
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-xs text-primary font-medium">Ver todas</span>
                  {conversasOpen ? (
                    <ChevronDown className="h-3.5 w-3.5" />
                  ) : (
                    <ChevronRight className="h-3.5 w-3.5" />
                  )}
                </span>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 pt-2 pb-1">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Nenhuma conversa recente. Faça sua primeira pergunta!
                </p>
              </CollapsibleContent>
            </Collapsible>
          </SidebarContent>

          {/* User footer */}
          <SidebarFooter className="p-3 border-t border-sidebar-border">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-accent transition-colors">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                      MC
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-left min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">Médico</p>
                    <p className="text-xs text-muted-foreground truncate">medico@email.com</p>
                  </div>
                  <ChevronsUpDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" side="top" className="w-56">
                <DropdownMenuItem className="gap-2 cursor-pointer">
                  <Settings className="h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="gap-2 cursor-pointer text-destructive focus:text-destructive"
                  onClick={() => navigate("/login")}
                >
                  <LogOut className="h-4 w-4" />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarFooter>
        </Sidebar>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          <header className="h-12 flex items-center border-b border-border px-4">
            <SidebarTrigger />
          </header>

          <main className="flex-1 flex flex-col items-center justify-center px-6">
            <motion.div
              className="w-full max-w-3xl flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src={icon} alt="" className="h-12 w-12 mb-6" />
              <h1 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                Qual a sua dúvida clínica?
              </h1>
              <p className="text-sm text-muted-foreground mb-8 max-w-md">
                Pesquise com base em PCDTs, Bulário ANVISA, RENAME e outras fontes oficiais brasileiras.
              </p>

              <HeroSearch />

              {/* Suggestion chips */}
              <div className="flex flex-wrap justify-center gap-2 mt-8">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    className="rounded-full border border-border bg-card px-4 py-2 text-xs text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-accent transition-all duration-200"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
