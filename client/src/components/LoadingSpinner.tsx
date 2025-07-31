import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <motion.div
        className="minimal-spinner"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeOut"
        }}
      >
        <span className="sr-only">Loading...</span>
      </motion.div>
    </div>
  );
}
