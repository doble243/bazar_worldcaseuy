import { useState } from "react";
import { Flame } from "lucide-react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  blend?: boolean;
}

/** Imagen de producto original con fallback estilizado si el servidor origen no responde. */
export default function ProductImage({ src, alt, className = "", blend = false }: Props) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (failed) {
    return (
      <div className={`metal flex items-center justify-center ${className}`}>
        <div className="flex flex-col items-center gap-2 text-ink/50">
          <Flame className="size-6" strokeWidth={1.5} />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Mariposa</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      draggable={false}
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
      className={`${className} ${blend ? "mix-blend-multiply" : ""} ${
        loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
      } transition-all duration-500 select-none object-contain`}
    />
  );
}
