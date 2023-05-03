import React from "react";
import { CardTitle } from "../../comps/Texts";
import styles from "./blogs.module.scss";

export default function FullCard() {
  return (
    <div className={styles.fullcard}>
      <CardTitle>Golang</CardTitle>
    </div>
  );
}
