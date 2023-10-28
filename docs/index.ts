type BlogCategories =
  | "ultimate_backend"
  | "substrate"
  | "cosmwasm"
  | "blockchain"
  | "kolab"
  | "rust";

interface IBlogPost {
  title: string;
  subtitle: string;
  category: BlogCategories;
  link: string;
  start_date: string;
  last_edit: string;
  filename: string;
}

export class AppBlogs {
  static list: Array<IBlogPost> = [
    {
      title: "Ultimate Backend in Rust - 1",
      subtitle: "",
      category: "ultimate_backend",
      link: "docs/rust/ultimate_backend1.md",
      start_date: "",
      last_edit: "",
      filename: "ultimate_backend1.md",
    },
  ];
}
