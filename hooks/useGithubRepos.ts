"use client";

import { useEffect, useState } from "react";

export interface GithubRepo {
  id: string;
  name: string;
  description: string;
  url: string;
  homepageUrl: string | null;
  stargazerCount: number;
  updatedAt: string;
  primaryLanguage: {
    name: string;
  } | null;
}

export function useGithubRepos() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/github");
      const data = await res.json();

      setRepos(data);
      setLoading(false);
    }

    load();
  }, []);

  return { repos, loading };
}