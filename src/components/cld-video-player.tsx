"use client";

import {
  CldVideoPlayer as CloudinaryVideoPlayer,
  CldVideoPlayerProps,
} from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import { PlayIcon } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export function CldVideoPlayer(props: CldVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    const videoElement = containerRef.current?.querySelector("video");

    if (!videoElement) return;

    const handlePlay = () => setIsPaused(false);
    const handlePause = () => setIsPaused(true);

    videoElement.addEventListener("play", handlePlay);
    videoElement.addEventListener("pause", handlePause);

    return () => {
      videoElement.removeEventListener("play", handlePlay);
      videoElement.removeEventListener("pause", handlePause);
    };
  }, []);

  const handlePlayClick = () => {
    const videoElement = containerRef.current?.querySelector("video");
    if (videoElement) {
      videoElement.play();
    }
  };

  return (
    <div className="relative w-full h-full" ref={containerRef}>
      <CloudinaryVideoPlayer
        {...props}
        className={`w-full h-full object-cover ${props.className ?? ""}`}
      />

      {isPaused && (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
          onClick={handlePlayClick}
        >
          <div className="relative">
            <div className="animate-ping absolute inline-flex size-24 rounded-full bg-primary opacity-30"></div>
            <div className="relative inline-flex items-center justify-center size-24 rounded-full bg-primary text-white">
              <PlayIcon className="size-8 fill-current text-primary-foreground" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
