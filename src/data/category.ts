export interface Props {
  title: string;
  slug: string;
  color: "green" | "blue" | "orange" | "purple" | "pink";
  description: string;
}
export type Category = Props;

export const categories: Props[] = [
  {
    title: "Technology",
    slug: "technology",
    color: "blue",
    description:
      "Keep up with the latest tech trends and learn about the latest innovations in software development, hardware design, cybersecurity, and more.",
  },
  {
    title: "Javascript",
    slug: "js",
    color: "orange",
    description:
      "Gateway to the vast world of Javascript.",
  },
  {
    title: "Common",
    slug: "common",
    color: "green",
    description:
      "Writeups that reveals common disciples to the reader",
  },
  {
    title: "Travel",
    slug: "travel",
    color: "pink",
    description:
      "Plan your next adventure and get travel tips and inspiration from experienced travelers, with articles covering destinations, cultures, and more.",
  },
  {
    title: "Design",
    slug: "design",
    color: "purple",
    description:
      "Get insights and inspiration from the world of design, with articles covering graphic design, product design, interior design, and more.",
  },
];
