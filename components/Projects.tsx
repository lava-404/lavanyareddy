"use client";

import { useMemo, useRef } from "react";
import { useGithubRepos } from "@/hooks/useGithubRepos";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

export default function Projects() {
  const { repos } = useGithubRepos();

  // Duplicate the repos so Embla has enough slides to loop smoothly
  const displayRepos = useMemo(() => {
    if (!repos.length) return [];
    return [...repos, ...repos];
  }, [repos]);

  const autoScroll = useRef(
    AutoScroll({
      playOnInit: true,
      speed: 1.8,
      startDelay: 0,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
    })
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
      skipSnaps: true,
    },
    [autoScroll.current]
  );

  return (
    <section className="mx-auto max-w-6xl overflow-hidden px-6 py-24" id="projects">
      <h2 className="mb-12 text-4xl font-black md:text-5xl">
        selected projects
      </h2>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {displayRepos.map((repo, index) => (
            <div
              key={`${repo.id}-${index}`}
              className="
                min-w-0
                flex-[0_0_90%]
                px-3

                sm:flex-[0_0_75%]

                md:flex-[0_0_60%]

                lg:flex-[0_0_45%]

                xl:flex-[0_0_34%]
              "
            >
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  h-[340px]
                  flex-col
                  rounded-3xl
                  border
                  border-zinc-800
                  bg-zinc-950
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-violet-300
                "
              >
                <h3 className="truncate text-2xl font-bold gradient-text">
                  {repo.name}
                </h3>

                <p className="mt-5 line-clamp-4 text-sm leading-7 text-zinc-400">
                  {repo.description ??
                    "No description available."}
                </p>

                <div className="flex-grow" />

                <div className="border-t border-zinc-800 pt-5">
                  <div className="flex items-center justify-between text-sm text-zinc-500">
                    <span>
                      {repo.primaryLanguage?.name ?? "Unknown"}
                    </span>

                    <span>★ {repo.stargazerCount}</span>
                  </div>

                  <p className="mt-3 text-xs text-zinc-600">
                    Updated{" "}
                    {new Date(repo.updatedAt).toLocaleDateString()}
                  </p>

                  <p className="mt-6 font-medium underline underline-offset-4 transition-transform duration-300 group-hover:translate-x-1">
                    View Repository →
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}