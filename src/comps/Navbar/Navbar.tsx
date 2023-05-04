import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();
  const _path = router.pathname;

  return (
    <>
      <div className={styles.nav}>
        <input type="checkbox" id="check" className={styles.check} />
        <div className={styles.bars}>
          <label htmlFor="check">
            <FaBars />
          </label>
        </div>

        <div className={styles.nav_start}>
          <Link href="/">
            <img
              className={styles.logo}
              src="/images/logo.png"
              width={90}
              height={45}
            />
          </Link>
          {/* <Image className={styles.logo} src="/images/logo.png" width={90} height={45}/> */}
          <div className={styles.nav_bg}>
            <ul className={styles.nav_start_list}>
              <li className={styles.nav_start_list_item}>
                <div className={styles.bars_close}>
                  <label htmlFor="check">
                    <FaTimes />
                  </label>
                </div>
              </li>

              <li
                className={
                  _path == "/projects/web"
                    ? styles.active_list_item
                    : styles.nav_start_list_item
                }
              >
                <Link href="/projects/web" className={styles.link}>
                  Web Projects
                </Link>
              </li>
              <li
                className={
                  _path == "/projects/mobile"
                    ? styles.active_list_item
                    : styles.nav_start_list_item
                }
              >
                <Link href="/projects/mobile" className={styles.link}>
                  Mobile Projects
                </Link>
              </li>
              <li
                className={
                  _path == "/blogs"
                    ? styles.active_list_item
                    : styles.nav_start_list_item
                }
              >
                <Link className={styles.link} href="/blogs">
                  Articles
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
