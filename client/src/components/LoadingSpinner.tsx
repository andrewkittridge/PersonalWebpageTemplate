import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <motion.div
        className="tesla-spinner"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeOut"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="sr-only">Loading...</span>
        </div>
      </motion.div>
    </div>
  );
}
