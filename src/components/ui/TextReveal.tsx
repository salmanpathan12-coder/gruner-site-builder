import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const TextReveal = ({ text, className = "", delay = 0 }: TextRevealProps) => {
  const words = text.split(" ");

  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 12,
            stiffness: 100,
            delay: delay + index * 0.08,
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default TextReveal;
