import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <Button
        variant="outline"
        size="icon"
        className="w-12 h-12 rounded-lg bg-background/80 backdrop-blur-sm
          border border-border/50 hover:border-primary/50
          hover:bg-accent/80 hover:text-accent-foreground
          focus:ring-2 focus:ring-primary/20 focus-visible:ring-2 focus-visible:ring-primary
          transition-all duration-500 ease-in-out
          hover:shadow-[0_0_15px_rgba(var(--primary),0.2)]
          dark:hover:shadow-[0_0_15px_rgba(var(--primary),0.3)]"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="h-[1.6rem] w-[1.6rem] rotate-0 scale-100 transition-all duration-500 
          ease-in-out dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.6rem] w-[1.6rem] rotate-90 scale-0 transition-all 
          duration-500 ease-in-out dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
}
