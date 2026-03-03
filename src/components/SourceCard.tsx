import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SourceCardProps {
  title: string;
  description: string;
  count: string;
  icon: ReactNode;
}

const SourceCard = ({ title, description, count, icon }: SourceCardProps) => {
  return (
    <motion.div
      className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20"
      style={{ boxShadow: "var(--shadow-card)" }}
      whileHover={{ y: -3 }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1.5">
            <h3 className="font-display text-lg text-foreground">{title}</h3>
            <span className="text-xs font-medium text-primary/70 ml-2 whitespace-nowrap">
              {count}
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SourceCard;
