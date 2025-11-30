import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface MarqueeItem {
  text: string;
  icon?: LucideIcon;
}

interface MarqueeProps {
  items: MarqueeItem[];
  speed?: number;
}

export const Marquee = ({ items, speed = 30 }: MarqueeProps) => {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative bg-gray-100 dark:bg-[#0A0A0A] py-4">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          }}
        >
          {duplicatedItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  {Icon && <Icon className="w-5 h-5 text-foreground" />}
                  <span className="text-foreground font-semibold text-lg">
                    {item.text}
                  </span>
                </div>
                <div className="w-2 h-2 rounded-full bg-foreground" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
