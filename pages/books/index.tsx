import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import Head from 'next/head'
import BooksComp from "../../src/views/books";
import { sortByDate } from "../../src/utils/sort";
import AppWrapper from "src/comps/wrapper/wrapper";

export default function PostPage({ books }) {
  const _category = [
    "All",
    "Psychology",
    "Self Development",
    "Business",
    "Productivity",
    "Health",
  ];

  return (
    <AppWrapper title={"Books & Notes"} subtitle={"Books"}>
      <BooksComp
        title="Books & Notes"
        page="books"
        categoryList={_category}
        posts={books}
      />
    </AppWrapper>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("_books"));

  // Get slug and frontmatter from posts
  const books = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("_books", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      books: books.sort(sortByDate),
    },
  };
}
