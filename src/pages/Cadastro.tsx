import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import icon from "@/assets/comevidencias_icon.svg";
import logo from "@/assets/comevidencias_logo.svg";

const CRM_REGEX = /^CRM\/[A-Z]{2}\s?\d{4,6}$/i;

const Cadastro = () => {
  const [form, setForm] = useState({
    name: "",
    crm: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [crmStatus, setCrmStatus] = useState<"idle" | "valid" | "invalid">("idle");

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));

    if (field === "crm") {
      if (!value) {
        setCrmStatus("idle");
      } else if (CRM_REGEX.test(value.trim())) {
        setCrmStatus("valid");
      } else {
        setCrmStatus("invalid");
      }
    }
  };

  const passwordsMatch = form.password && form.confirmPassword && form.password === form.confirmPassword;

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("user_name", form.name);
    localStorage.setItem("user_email", form.email);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left — branding */}
      <div
        className="hidden lg:flex lg:w-1/2 items-center justify-center relative overflow-hidden"
        style={{ background: "var(--gradient-primary)" }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full border border-primary-foreground/20" />
          <div className="absolute bottom-32 right-16 w-96 h-96 rounded-full border border-primary-foreground/10" />
        </div>
        <motion.div
          className="relative z-10 text-center px-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={icon} alt="" className="h-16 w-16 mx-auto mb-8 brightness-0 invert" />
          <h2 className="font-display text-3xl text-primary-foreground mb-4">
            Exclusivo para<br />profissionais da saúde
          </h2>
          <p className="text-primary-foreground/70 text-sm max-w-sm mx-auto leading-relaxed">
            Verificamos seu CRM para garantir que apenas médicos registrados tenham acesso à plataforma.
          </p>
        </motion.div>
      </div>

      {/* Right — form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <motion.div
          className="w-full max-w-sm"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="inline-block mb-10">
            <img src={logo} alt="comEvidências" className="h-10" />
          </Link>

          <h1 className="font-display text-2xl text-foreground mb-2">Criar conta</h1>
          <p className="text-sm text-muted-foreground mb-8">
            Cadastre-se com seu CRM para acessar a plataforma
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Nome completo</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Dr. João Silva"
                className="w-full h-11 rounded-lg border border-input bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-primary/30 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">CRM</label>
              <div className="relative">
                <input
                  type="text"
                  value={form.crm}
                  onChange={(e) => update("crm", e.target.value)}
                  placeholder="CRM/SP 123456"
                  className={`w-full h-11 rounded-lg border px-4 pr-11 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all bg-card ${
                    crmStatus === "valid"
                      ? "border-primary/40 focus:ring-primary/20"
                      : crmStatus === "invalid"
                      ? "border-destructive/40 focus:ring-destructive/20"
                      : "border-input focus:ring-ring/30 focus:border-primary/30"
                  }`}
                  required
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {crmStatus === "valid" && <CheckCircle2 className="h-4 w-4 text-primary" />}
                  {crmStatus === "invalid" && <AlertCircle className="h-4 w-4 text-destructive" />}
                </div>
              </div>
              {crmStatus === "invalid" && (
                <p className="mt-1.5 text-xs text-destructive">
                  Formato esperado: CRM/UF 123456 (ex: CRM/SP 123456)
                </p>
              )}
              {crmStatus === "valid" && (
                <p className="mt-1.5 text-xs text-primary">
                  Formato válido ✓
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">E-mail</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="seu@email.com"
                className="w-full h-11 rounded-lg border border-input bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-primary/30 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Senha</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => update("password", e.target.value)}
                  placeholder="Mínimo 8 caracteres"
                  className="w-full h-11 rounded-lg border border-input bg-card px-4 pr-11 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-primary/30 transition-all"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Confirmar senha</label>
              <input
                type="password"
                value={form.confirmPassword}
                onChange={(e) => update("confirmPassword", e.target.value)}
                placeholder="Repita a senha"
                className={`w-full h-11 rounded-lg border px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all bg-card ${
                  form.confirmPassword && !passwordsMatch
                    ? "border-destructive/40 focus:ring-destructive/20"
                    : "border-input focus:ring-ring/30 focus:border-primary/30"
                }`}
                required
              />
              {form.confirmPassword && !passwordsMatch && (
                <p className="mt-1.5 text-xs text-destructive">As senhas não coincidem</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full h-11 rounded-lg text-sm font-medium text-primary-foreground flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: "var(--gradient-primary)" }}
            >
              Criar conta
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Já tem conta?{" "}
            <Link to="/login" className="text-primary font-medium hover:text-primary-glow transition-colors">
              Entrar
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Cadastro;
