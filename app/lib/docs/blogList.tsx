import UltimateRust from "./blogs/ultimate_backend.mdx";
import Harmony1 from "./series/harmony/1.mdx";
import { IBlogPost } from "./types";

export const AppBlogs: Array<IBlogPost> = [
  {
    id: "1",
    title: "Harmony Backend 1- Rust",
    subtitle: "Project setup",
    cover_image: "/post_img/africa.jpg",
    category: "ultimate_backend",
    link: "docs/series/harmony/1.md",
    start_date: "27th October, 2023",
    last_edit: "15th November,  2023",
    comp: <Harmony1 />,
  },
  {
    id: "2",
    title: "Ultimate Backend in Rust - 2",
    subtitle: "Continuation of the ultimate rust backend",
    cover_image: "/post_img/africa.jpg",
    category: "ultimate_backend",
    link: "docs/rust/ultimate_backend1.mdx",
    start_date: "15th November,  2023",
    last_edit: "15th November,  2023",
    comp: <UltimateRust />,
  },
];
