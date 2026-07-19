import { useState } from "react";
import { Flame } from "lucide-react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  blend?: boolean;
}

/** Imagen de producto original con fallback estilizado si el servidor origen no responde. */
export default function ProductImage({ src, alt, className = "", blend = true }: Props) {
  const [failed, setFailed] = useState(false);

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
      onError={() => setFailed(true)}
      className={`${className} ${blend ? "mix-blend-multiply" : ""} select-none`}
    />
  );
}
