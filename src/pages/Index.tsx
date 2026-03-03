import { useState } from "react";
import { motion } from "framer-motion";
import { Search, FileText, Pill, Activity, ArrowRight, Stethoscope, BookOpen, Shield } from "lucide-react";
import logo from "@/assets/comevidencias_logo.svg";
import HeroSearch from "@/components/HeroSearch";
import SourceCard from "@/components/SourceCard";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 py-4 md:px-12">
        <div className="w-8" />
        <nav className="flex items-center gap-3">
          <button className="chip">Entrar</button>
          <button className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-glow">
            Criar conta
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center px-6 pt-12 pb-24 md:pt-20 md:pb-32">
        <motion.img
          src={logo}
          alt="comEvidências"
          className="h-16 md:h-20 mb-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        <HeroSearch />

        {/* Suggestion chips */}
        <motion.div
          className="mt-6 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
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
      <section className="px-6 md:px-12 max-w-5xl mx-auto">
        <div className="section-divider">
          <h2 className="text-lg md:text-xl text-foreground whitespace-nowrap">
            Fontes abertas brasileiras
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <SourceCard
            title="PCDTs"
            description="Protocolos Clínicos e Diretrizes Terapêuticas do Ministério da Saúde"
            count="~500 docs"
          />
          <SourceCard
            title="RENAME"
            description="Relação Nacional de Medicamentos Essenciais do SUS"
            count="~900 itens"
          />
          <SourceCard
            title="Bulário ANVISA"
            description="Bulas de medicamentos registrados no Brasil"
            count="~15.000"
          />
          <SourceCard
            title="CID-10"
            description="Classificação Internacional de Doenças"
            count="~12.000"
          />
          <SourceCard
            title="SciELO"
            description="Artigos científicos brasileiros em acesso aberto"
            count="~900.000"
          />
          <SourceCard
            title="PubMed"
            description="Abstracts de literatura médica internacional"
            count="~37M"
          />
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto mt-24">
        <div className="section-divider">
          <h2 className="text-lg md:text-xl text-foreground whitespace-nowrap">
            Como funciona
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <FeatureCard
            icon={<Stethoscope className="h-6 w-6" />}
            title="Pergunte em português"
            description="Faça sua pergunta clínica em linguagem natural, como faria a um colega."
          />
          <FeatureCard
            icon={<BookOpen className="h-6 w-6" />}
            title="Evidências com citação"
            description="Cada afirmação é fundamentada com fonte específica — PCDT, diretriz ou artigo."
          />
          <FeatureCard
            icon={<Shield className="h-6 w-6" />}
            title="Seguro por design"
            description="Apoio à decisão, nunca diagnóstico. Sem dados de paciente. LGPD by design."
          />
        </div>
      </section>

      {/* Example */}
      <section className="px-6 md:px-12 max-w-3xl mx-auto mt-24">
        <div className="section-divider">
          <h2 className="text-lg md:text-xl text-foreground whitespace-nowrap">
            Exemplo de uso
          </h2>
        </div>

        <motion.div
          className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-8"
          style={{ boxShadow: "var(--shadow-soft)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Médico</span>
            <p className="mt-1 text-foreground font-body">
              "Paciente 58 anos, DM2, HAS, TFG 45. Qual o melhor anti-hipertensivo?"
            </p>
          </div>
          <div className="h-px bg-border my-4" />
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-primary">comEvidências</span>
            <p className="mt-1 text-foreground/90 font-body text-sm leading-relaxed">
              Para paciente com DM2, HAS e DRC estágio 3b, o PCDT de HAS recomenda <strong>IECA ou BRA</strong> como primeira linha.
              Losartana e enalapril estão disponíveis no RENAME. Evitar combinação IECA+BRA.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                PCDT-HAS §6.2
              </span>
              <span className="inline-flex items-center rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                RENAME 2024
              </span>
              <span className="inline-flex items-center rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                CID: I10 + E11 + N18.3
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mt-32 border-t border-border py-10 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 comEvidências · SIM — Soluções em Inteligência e Métricas
          </p>
          <p className="text-xs text-muted-foreground/70">
            Apoio à decisão clínica — não substitui avaliação médica presencial
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
