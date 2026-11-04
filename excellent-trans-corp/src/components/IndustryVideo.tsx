"use client";

import { useEffect, useRef } from "react";

interface IndustryVideoProps {
  src: string;
  playbackRate?: number;
  className?: string;
}

export function IndustryVideo({ src, playbackRate = 1, className }: IndustryVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      onLoadedMetadata={(e) => {
        e.currentTarget.playbackRate = playbackRate;
      }}
      onPlay={(e) => {
        e.currentTarget.playbackRate = playbackRate;
      }}
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
