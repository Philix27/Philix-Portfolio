export type ProjectCategories = "web" | "mobile";
export interface IProjectPost {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategories;
  cover_image: string;
  start_date: string;
  comp: JSX.Element;
}

export type BlogCategories =
  | "ultimate_backend"
  | "substrate"
  | "cosmwasm"
  | "blockchain"
  | "kolab"
  | "rust";


export interface IBlogPost {
  id: string;
  title: string;
  subtitle: string;
  category: BlogCategories;
  link: string;
  cover_image: string;
  start_date: string;
  last_edit: string;
  comp: JSX.Element;
}
