import { NextResponse } from "next/server";

const query = `
query {
  user(login: "lava-404") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          id
          name
          description
          url
          homepageUrl
          stargazerCount
          updatedAt
          primaryLanguage {
            name
          }
        }
      }
    }
  }
}
`;

export async function GET() {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate: 3600,
    },
  });

  const data = await res.json();

  return NextResponse.json(data.data.user.pinnedItems.nodes);
}