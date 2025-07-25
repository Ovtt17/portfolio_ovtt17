import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { SparklesIcon } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 text-center overflow-hidden relative">
      {/* OVNI flotante decorativo */}
      <motion.div
        className="absolute top-12 left-1/2 -translate-x-1/2 text-[40px] md:text-[60px] z-0 select-none opacity-70"
        initial={{ y: -8 }}
        animate={{ y: [-8, 0, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        🛸
      </motion.div>

      {/* Círculo animado sutil de fondo */}
      <motion.div
        className="absolute w-[250px] h-[250px] rounded-full border border-dashed border-muted-foreground opacity-10"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="z-10 max-w-md space-y-4"
      >
        {/* SVG central del 404 */}
        <div className="mb-2">
          <svg
            viewBox="0 0 300 300"
            className="w-24 h-24 mx-auto text-muted-foreground"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="150"
              cy="150"
              r="100"
              stroke="currentColor"
              strokeWidth="10"
              initial={{ strokeDasharray: "0, 1000" }}
              animate={{ strokeDasharray: "628, 1000" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dy=".3em"
              className="fill-foreground text-[32px] font-bold font-mono"
            >
              404
            </text>
          </svg>
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
          Página no encontrada
        </h1>

        <p className="text-muted-foreground text-base leading-relaxed">
          Esta página fue abducida por alienígenas. Pero no te preocupes,
          todavía puedes volver al planeta principal 🪐
        </p>

        <Link to="/" className="inline-block pt-2 cursor-pointer">
          <Button size="md" className="gap-2 px-5 py-2">
            <SparklesIcon className="w-4 h-4" />
            Volver al inicio
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;