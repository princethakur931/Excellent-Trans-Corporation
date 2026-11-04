import Image from "next/image";
import * as Icons from "lucide-react";
import { IndustryVideo } from "./IndustryVideo";

interface IndustryCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  video?: string;
  playbackRate?: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DynamicIcon({ name, className }: { name: string; className?: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (Icons as any)[name] as React.FC<{ className?: string }> | undefined;
  if (!Icon) return <Icons.Factory className={className} />;
  return <Icon className={className} />;
}

export function IndustryCard({ title, description, icon, image, video, playbackRate = 1 }: IndustryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl aspect-[4/5] sm:aspect-auto sm:h-64 cursor-pointer">
      {/* Background Media */}
      {video ? (
        <IndustryVideo
          src={video}
          playbackRate={playbackRate}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <Image
          src={image}
          alt={`${title} transportation services`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          unoptimized
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/90 via-[#10243A]/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded bg-[#DC2626]/90 flex items-center justify-center">
            <DynamicIcon name={icon} className="w-4 h-4 text-white" />
          </div>
          <h3 className="font-bold text-white text-sm leading-tight">{title}</h3>
        </div>
        <p className="text-gray-200 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
          {description}
        </p>
      </div>
    </div>
  );
}

