import { motion } from "framer-motion";

interface SourceCardProps {
  title: string;
  description: string;
  count: string;
}

const SourceCard = ({ title, description, count }: SourceCardProps) => {
  return (
    <motion.div
      className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/20"
      style={{ boxShadow: "var(--shadow-soft)" }}
      whileHover={{ y: -2 }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-display text-lg text-foreground">{title}</h3>
        <span className="text-xs font-medium text-primary bg-primary-light rounded-full px-2.5 py-0.5">
          {count}
        </span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default SourceCard;
