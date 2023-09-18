export interface Props {
  title: string;
  slug: string;
  color: "green" | "blue" | "orange" | "purple" | "pink";
  description: string;
}
export type Category = Props;

export const categories: Props[] = [
  {
    title: "Projects",
    slug: "projects",
    color: "blue",
    description:
      "Put the learned theories to test by building real-world apps",
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
    title: "PHP",
    slug: "php",
    color: "pink",
    description:
      "Some spotlighht on themost infamous server-side language for low-volume traffic.",
  },
  {
    title: "Design",
    slug: "design",
    color: "purple",
    description:
      "Get to know how the SPC-175 and relatives are designed at a system level",
  },
];
