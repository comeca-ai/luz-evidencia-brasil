import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  step: string;
}

const FeatureCard = ({ icon, title, description, step }: FeatureCardProps) => {
  return (
    <motion.div
      className="relative flex flex-col items-center text-center px-6"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-xs font-medium tracking-widest text-primary/40 uppercase mb-4">
        {step}
      </span>
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-primary">
        {icon}
      </div>
      <h3 className="font-display text-xl text-foreground mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
