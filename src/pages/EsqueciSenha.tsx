import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import logo from "@/assets/comevidencias_logo.svg";

const EsqueciSenha = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
      <motion.div
        className="w-full max-w-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="inline-block mb-10">
          <img src={logo} alt="comEvidências" className="h-10" />
        </Link>

        {!sent ? (
          <>
            <h1 className="font-display text-2xl text-foreground mb-2">Recuperar senha</h1>
            <p className="text-sm text-muted-foreground mb-8">
              Informe seu e-mail e enviaremos instruções para redefinir sua senha.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">E-mail</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full h-11 rounded-lg border border-input bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-primary/30 transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full h-11 rounded-lg text-sm font-medium text-primary-foreground flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: "var(--gradient-primary)" }}
              >
                Enviar instruções
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </>
        ) : (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-accent flex items-center justify-center">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <h2 className="font-display text-2xl text-foreground mb-3">E-mail enviado</h2>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              Se o e-mail <strong className="text-foreground">{email}</strong> estiver cadastrado, você receberá um link para redefinir sua senha.
            </p>
            <button
              onClick={() => setSent(false)}
              className="text-sm text-primary font-medium hover:text-primary-glow transition-colors"
            >
              Tentar outro e-mail
            </button>
          </motion.div>
        )}

        <div className="mt-8 text-center">
          <Link
            to="/login"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Voltar para login
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default EsqueciSenha;
