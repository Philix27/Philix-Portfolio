import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./blogs.module.scss";
import { CardTitle } from "../../comps/Texts";
import FullCard from "./FullCard";
export default function BlogComp({ posts, title, page, categoryList }) {
  const [selectedCategory, setSelectedCategory] = useState(posts);

  const changeToCateorySelect = (e) => {
    const _category = e.target.value;
    let tempList = [];
    console.log("Checking category");
    console.log(_category);
    posts.forEach((post) => {
      if (_category == "All") {
        tempList = posts;
      } else if (post.frontmatter.category == _category) {
        tempList.push(post);
      }
    });
    setSelectedCategory(tempList);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerSection}>
        <CardTitle>Golang</CardTitle>
      </div>
      <FullCard />
      <div className={styles.gridContainer}>
        {selectedCategory.map((post, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ x: "-100vw", opacity: 0.1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.7,
              delay: 1,
              type: "spring",
              stiffness: 110,
            }}
          >
            <Link href={`/${page}/${post.slug}`}>
              <img className={styles.img} src={post.frontmatter.cover_image} />
            </Link>
            <h3 className={styles.headerThree}>{post.frontmatter.title}</h3>
            <div className={styles.sectionText}>{post.frontmatter.excerpt}</div>
            <hr />
            <div className={styles.sectionSmallText}>
              Posted on {post.frontmatter.date}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
