"use client";
import { useMemo, useState } from "react";

export default function SlidingGallery() {
  const [selected, setSelected] = useState<string | null>(null);

  const photos = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
  ];

  const left = useMemo(() => photos.filter((_, i) => i % 2 === 0), []);
  const right = useMemo(() => photos.filter((_, i) => i % 2 !== 0), []);

  return (
    <>
      <section className="overflow-hidden " id="photos">
        <div className="grid h-[600px] max-w-6xl mx-auto grid-cols-2 gap-4 md:h-[920px]">

          {/* Left */}
          <div className="group overflow-hidden rounded-3xl">
            <div className="animate-scroll-up group-hover:[animation-play-state:paused]">
              {[...left, ...left].map((img, i) => (
                <ImageCard
                  key={i}
                  img={img}
                  onClick={() => setSelected(img)}
                />
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="group overflow-hidden rounded-3xl">
            <div className="animate-scroll-down group-hover:[animation-play-state:paused]">
              {[...right, ...right].map((img, i) => (
                <ImageCard
                  key={i}
                  img={img}
                  onClick={() => setSelected(img)}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-5xl"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-black"
            >
              ×
            </button>

            <img
              src={selected}
              alt=""
              className="max-h-[90vh] rounded-2xl object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

function ImageCard({
  img,
  onClick,
}: {
  img: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="mb-4 cursor-pointer overflow-hidden rounded-2xl"
    >
      <img
        src={img}
        alt=""
        className="aspect-square w-full object-cover grayscale transition-all duration-500 hover:scale-105 hover:grayscale-0"
      />
    </div>
  );
}