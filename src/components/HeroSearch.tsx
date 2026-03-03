import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";

const HeroSearch = () => {
  const [query, setQuery] = useState("");

  return (
    <motion.div
      className="w-full max-w-2xl"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="search-input-wrapper">
        <Search className="ml-5 h-5 w-5 text-muted-foreground flex-shrink-0" />
        <input
          type="text"
          placeholder="Faça uma pergunta clínica..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent px-4 py-4 text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none font-body"
        />
        <button
          className="mr-2 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:bg-primary-glow"
          aria-label="Enviar pergunta"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default HeroSearch;
