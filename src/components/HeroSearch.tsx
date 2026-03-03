import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";

const HeroSearch = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      className="w-full max-w-2xl"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <div className="search-input-wrapper">
        <Search className="ml-5 h-5 w-5 text-muted-foreground/60 flex-shrink-0" />
        <input
          type="text"
          placeholder="Qual a sua dúvida clínica?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="flex-1 bg-transparent px-4 py-4.5 text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none font-body"
        />
        <button
          className="mr-2.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-200 hover:bg-primary-glow hover:scale-105"
          aria-label="Enviar pergunta"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default HeroSearch;
