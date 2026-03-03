import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, Pill, Activity, Stethoscope, BookOpen, Shield, FlaskConical, BookMarked, Microscope, ArrowRight } from "lucide-react";
import logo from "@/assets/comevidencias_logo.svg";
import icon from "@/assets/comevidencias_icon.svg";
import HeroSearch from "@/components/HeroSearch";
import SourceCard from "@/components/SourceCard";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 md:px-16 max-w-7xl mx-auto">
        <nav className="hidden md:flex items-center gap-2">
          <a href="#fontes" className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-all duration-200">Fontes</a>
          <a href="#como-funciona" className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-all duration-200">Como funciona</a>
          <a href="#" className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-all duration-200">Para médicos</a>
        </nav>
        <div className="md:hidden" />
        <nav className="flex items-center gap-3">
          <Link to="/login" className="nav-link px-4 py-2 rounded-full border border-border hover:border-primary/20 transition-all duration-200">
            Entrar
          </Link>
          <Link to="/cadastro" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-glow">
            Criar conta
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center px-6 pt-16 pb-28 md:pt-24 md:pb-36">
        <motion.img
          src={logo}
          alt="comEvidências"
          className="h-20 md:h-28 mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        />

        <motion.p
          className="text-muted-foreground text-base md:text-lg mb-10 text-center max-w-md font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Apoio à decisão clínica baseada em evidências
        </motion.p>

        <HeroSearch />

        {/* Suggestion chips */}
        <motion.div
          className="mt-6 flex flex-wrap justify-center gap-2.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <button className="chip">
            <FileText className="h-3.5 w-3.5" />
            Consultar PCDT
          </button>
          <button className="chip">
            <Pill className="h-3.5 w-3.5" />
            Buscar no RENAME
          </button>
          <button className="chip">
            <Activity className="h-3.5 w-3.5" />
            Calcular CID-10
          </button>
        </motion.div>
      </section>

      {/* Sources section */}
      <section id="fontes" className="px-6 md:px-12 max-w-5xl mx-auto">
        <div className="section-divider">
          <h2 className="text-lg md:text-xl text-foreground whitespace-nowrap">
            Fontes abertas brasileiras
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <SourceCard
            icon={<FileText className="h-5 w-5" />}
            title="PCDTs"
            description="Protocolos Clínicos e Diretrizes Terapêuticas do Ministério da Saúde"
            count="~500 docs"
          />
          <SourceCard
            icon={<Pill className="h-5 w-5" />}
            title="RENAME"
            description="Relação Nacional de Medicamentos Essenciais do SUS"
            count="~900 itens"
          />
          <SourceCard
            icon={<FlaskConical className="h-5 w-5" />}
            title="Bulário ANVISA"
            description="Bulas de medicamentos registrados no Brasil"
            count="~15.000"
          />
          <SourceCard
            icon={<BookMarked className="h-5 w-5" />}
            title="CID-10"
            description="Classificação Internacional de Doenças"
            count="~12.000"
          />
          <SourceCard
            icon={<Microscope className="h-5 w-5" />}
            title="SciELO"
            description="Artigos científicos brasileiros em acesso aberto"
            count="~900.000"
          />
          <SourceCard
            icon={<BookOpen className="h-5 w-5" />}
            title="PubMed"
            description="Abstracts de literatura médica internacional"
            count="~37M"
          />
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="px-6 md:px-12 max-w-5xl mx-auto mt-28">
        <div className="section-divider">
          <h2 className="text-lg md:text-xl text-foreground whitespace-nowrap">
            Como funciona
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <FeatureCard
            step="01"
            icon={<Stethoscope className="h-7 w-7" />}
            title="Pergunte em português"
            description="Faça sua pergunta clínica em linguagem natural, como faria a um colega especialista."
          />
          <FeatureCard
            step="02"
            icon={<BookOpen className="h-7 w-7" />}
            title="Evidências com citação"
            description="Cada afirmação é fundamentada com fonte específica — PCDT, diretriz ou artigo revisado."
          />
          <FeatureCard
            step="03"
            icon={<Shield className="h-7 w-7" />}
            title="Seguro por design"
            description="Apoio à decisão, nunca diagnóstico. Sem dados de paciente. Privacidade LGPD."
          />
        </div>
      </section>

      {/* Example */}
      <section className="px-6 md:px-12 max-w-3xl mx-auto mt-28">
        <div className="section-divider">
          <h2 className="text-lg md:text-xl text-foreground whitespace-nowrap">
            Exemplo de uso
          </h2>
        </div>

        <motion.div
          className="mt-10 rounded-2xl border border-border bg-card overflow-hidden"
          style={{ boxShadow: "var(--shadow-card)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Doctor message */}
          <div className="p-6 md:p-8 flex gap-4">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-muted flex items-center justify-center">
              <Stethoscope className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Médico</span>
              <p className="mt-1.5 text-foreground font-body leading-relaxed">
                "Paciente 58 anos, DM2, HAS, TFG 45. Qual o melhor anti-hipertensivo?"
              </p>
            </div>
          </div>

          <div className="h-px bg-border" />

          {/* AI response */}
          <div className="p-6 md:p-8 flex gap-4 bg-accent/30">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <img src={icon} alt="" className="h-4 w-4" />
            </div>
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-primary">comEvidências</span>
              <p className="mt-1.5 text-foreground/90 font-body text-sm leading-relaxed">
                Para paciente com DM2, HAS e DRC estágio 3b, o PCDT de HAS recomenda <strong>IECA ou BRA</strong> como primeira linha.
                Losartana e enalapril estão disponíveis no RENAME. Evitar combinação IECA+BRA.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-md bg-primary/8 border border-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  PCDT-HAS §6.2
                </span>
                <span className="inline-flex items-center rounded-md bg-primary/8 border border-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  RENAME 2024
                </span>
                <span className="inline-flex items-center rounded-md bg-primary/8 border border-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  CID: I10 + E11 + N18.3
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 max-w-3xl mx-auto mt-28">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl text-foreground mb-4">
            Comece a consultar com evidências
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Acesse gratuitamente fontes abertas brasileiras com apoio de inteligência artificial.
          </p>
          <Link to="/cadastro" className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:scale-105"
            style={{ background: "var(--gradient-primary)" }}
          >
            Criar conta gratuita
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mt-36 border-t border-border">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <img src={icon} alt="comEvidências" className="h-7 w-7 opacity-60" />
              <span className="text-sm text-muted-foreground">
                © 2026 comEvidências
              </span>
            </div>
            <nav className="flex flex-wrap items-center gap-6">
              <a href="#" className="nav-link text-xs">Termos de uso</a>
              <a href="#" className="nav-link text-xs">Privacidade</a>
              <a href="#" className="nav-link text-xs">Contato</a>
            </nav>
          </div>
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground/60 leading-relaxed max-w-2xl">
              Apoio à decisão clínica — não substitui avaliação médica presencial. 
              comEvidências é um produto da SIM — Soluções em Inteligência e Métricas.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
