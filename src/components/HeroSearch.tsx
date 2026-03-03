import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";

const HeroSearch = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      className="w-full max-w-3xl"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <div className="search-input-wrapper">
        <Search className="ml-5 md:ml-6 h-5 w-5 md:h-6 md:w-6 text-muted-foreground/60 flex-shrink-0" />
        <input
          type="text"
          placeholder="Qual a sua dúvida clínica?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="flex-1 bg-transparent px-4 py-5 md:py-6 text-base md:text-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none font-body"
        />
        <button
          className="mr-2.5 md:mr-3 flex h-10 w-10 md:h-11 md:w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-200 hover:bg-primary-glow hover:scale-105"
          aria-label="Enviar pergunta"
        >
          <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
        </button>
      </div>
    </motion.div>
  );
};

export default HeroSearch;
