import SlidingGallery from "@/components/SlidingGallery";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";


const skills = [
  "rust",
  "typescript",
  "solana",
  "tokio",
  "axum",
  "postgres",
  "websockets",
  "backend systems",
];

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-[300px_1fr] gap-12 items-center">
        <div className="relative rounded-3xl border border-zinc-800">
  <img
    src="image.png"
    alt="profile"
    className="object-fill grayscale hover:grayscale-0 rounded-3xl transition duration-300 ease-in-out"
  />
</div>   

          <div>
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
              <span className="gradient-text">cargo build</span>
              <br />
              cargo pray
            </h1>

            <p className="mt-8 text-zinc-400 max-w-2xl text-lg leading-relaxed">
              tricked you into getting here, sike! hey hey hey! now that you ARE here, why not just scroll down too?
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mx-auto max-w-6xl px-6">
  <div className="overflow-hidden rounded-full border border-zinc-800 py-4">
    <div className="marquee-track">
      {[...skills, ...skills].map((skill, i) => (
        <div
          key={i}
          className="mx-3 shrink-0 rounded-full border border-zinc-800 bg-zinc-900 px-5 py-2 text-sm text-zinc-300"
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* PROJECTS */}
      <Projects />

      {/* ABOUT + PHOTOS */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-12"
      >
        <div className="grid lg:grid-cols-2 gap-12">
        <div className="flex h-full flex-col rounded-3xl border border-zinc-800 p-10">
  <h2 className="mb-6 text-4xl font-black">
    about
  </h2>

  <p className="leading-relaxed text-zinc-400">
    19. computer science student. <br /><br />

    interested in rust, solana, backend systems, and building things mostly because i wanted to know how they worked.<br /><br />

    i'm still figuring out the crypto space. fortunately, computers are very willing to explain your mistakes in excruciating detail.<br /><br />

    in my future ventures id love to write more. as of now I tend to limit myself to just reading. few of my favorite books are The Silent Patient, The 4 hour Work Week, The Wealth BluePrint and a few others whose names i cant fit in here.<br /><br />

    oh right and did i forget to mention my name? of course i didn't, i'm lavanya.
  </p>

  <div className="mt-auto pt-8">
    <img
      src="/9.png"
      alt="profile"
      className="h-64 w-full rounded-2xl object-cover"
    />
  </div>
</div>

          <SlidingGallery />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-zinc-900 py-16" id="contact">
  <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2">

    {/* Left */}
    <div>
      <h2 className="text-5xl font-black gradient-text md:text-7xl">
        over and out.
      </h2>

      <p className="mt-6 max-w-md text-zinc-500">
        built with next.js, tailwind and unhealthy amounts of diet coke.
      </p>
    </div>

    {/* Right */}
    <div className="flex flex-col md:items-end">
      <p className="mb-6 text-sm tracking-[0.3em] text-zinc-600">
        contact
      </p>

      <div className="space-y-4 text-sm">
        <a
          href="mailto:lavanyaropt@gmail.com"
          className="group flex items-center justify-between gap-12 text-zinc-300 transition hover:text-white"
        >
          <span>email</span>
          <span className="transition group-hover:translate-x-1">↗</span>
        </a>

        <a
          href="https://github.com/lava-404"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-12 text-zinc-300 transition hover:text-white"
        >
          <span>gitHub</span>
          <span className="transition group-hover:translate-x-1">↗</span>
        </a>

        <a
          href="https://x.com/lava_404"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-12 text-zinc-300 transition hover:text-white"
        >
          <span>X / twitter</span>
          <span className="transition group-hover:translate-x-1">↗</span>
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          className="group flex items-center justify-between gap-12 text-zinc-300 transition hover:text-white"
        >
          <span>resume</span>
          <span className="transition group-hover:translate-x-1">↗</span>
        </a>
      </div>
    </div>

  </div>
</footer>
    </main>
  );
}