export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Birnadin Erick",
    slug: "b",
    image: "./src/assets/authors/birn.webp",
    bio: "Laziness promotes Efficiency",
  },
];
