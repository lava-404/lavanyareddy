"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mx-auto max-w-6xl px-6 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">lava</h1>

        {/* Desktop */}
        <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
          <a href="#projects" className="transition hover:text-white">
            projects
          </a>

          <a href="#about" className="transition hover:text-white">
            about
          </a>

          <a href="#photos" className="transition hover:text-white">
            photos
          </a>

          <a href="#contact" className="transition hover:text-white">
            contact
          </a>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-zinc-800 p-2 md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "mt-6 max-h-80" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-5 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-zinc-300 md:hidden">
          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className="transition hover:text-white"
          >
            projects
          </a>

          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="transition hover:text-white"
          >
            about
          </a>

          <a
            href="#photos"
            onClick={() => setOpen(false)}
            className="transition hover:text-white"
          >
            photos
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="transition hover:text-white"
          >
            contact
          </a>
        </div>
      </div>
    </nav>
  );
}