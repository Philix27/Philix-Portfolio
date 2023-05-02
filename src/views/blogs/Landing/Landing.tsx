import { BannerSubtitle, BannerTitle } from "../../../comps/Texts";
import styles from "./Landing.module.scss";

export const BlogLanding = () => {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.content}>
        <BannerTitle>Courses</BannerTitle>
        <BannerSubtitle>A mind who studies is always ready</BannerSubtitle>
      </div>
      <div>
        <img src="/images/tech.png" className={styles.img} alt="hero_img" />
      </div>
    </div>
  );
};
