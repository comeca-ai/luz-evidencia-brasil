import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SourceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const SourceCard = ({ title, description, icon }: SourceCardProps) => {
  return (
    <motion.div
      className="group flex flex-col items-center text-center rounded-2xl border border-border/60 bg-card p-8 md:p-10 transition-all duration-300 hover:border-primary/15 hover:shadow-md"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-primary mb-5 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <h3 className="font-display text-xl text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px]">{description}</p>
    </motion.div>
  );
};

export default SourceCard;
