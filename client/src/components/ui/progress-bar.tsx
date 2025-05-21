import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useProgressAnimation } from "@/hooks/use-animation";

interface ProgressBarProps {
  label: string;
  percentage: number;
  delay?: number;
  className?: string;
}

export function ProgressBar({
  label,
  percentage,
  delay = 0,
  className,
}: ProgressBarProps) {
  const { progress, elementRef } = useProgressAnimation(percentage, delay);

  return (
    <div ref={elementRef} className={cn("space-y-2", className)}>
      <div className="flex justify-between mb-2">
        <span className="text-primary font-medium">{label}</span>
        <span className="text-secondary">{progress}%</span>
      </div>
      <div className="h-1 bg-accent rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-secondary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ 
            duration: 1.5, 
            delay: delay / 1000,
            ease: "easeOut" 
          }}
        />
      </div>
    </div>
  );
}
