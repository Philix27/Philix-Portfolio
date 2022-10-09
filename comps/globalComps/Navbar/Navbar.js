import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
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
            <a>
              <img
                className={styles.logo}
                src="/images/logo.png"
                width={90}
                height={45}
              />
            </a>
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
                  _path == "/projects"
                    ? styles.active_list_item
                    : styles.nav_start_list_item
                }
              >
                <Link href="/projects">
                  <a className={styles.link}>Projects</a>
                </Link>
              </li>
              <li
                className={
                  _path == "/pharmacist"
                    ? styles.active_list_item
                    : styles.nav_start_list_item
                }
              >
                <Link href="/pharmacist">
                  <a className={styles.link}>Pharmacist</a>
                </Link>
              </li>
              <li
                className={
                  _path == "/blogs"
                    ? styles.active_list_item
                    : styles.nav_start_list_item
                }
              >
                <Link href="/blogs">
                  <a className={styles.link}>Blogs</a>
                </Link>
              </li>
              <li
                className={
                  _path == "/books"
                    ? styles.active_list_item
                    : styles.nav_start_list_item
                }
              >
                <Link href="/books">
                  <a className={styles.link}>Book</a>
                </Link>
              </li>
              {/* <li className={_path == "/videos" ? styles.active_list_item : styles.nav_start_list_item}>
                                <Link href="/videos">
                                    <a className={styles.link}> Videos</a>
                                </Link>
                            </li>
                            <li className={_path == "/#courses" ? styles.active_list_item : styles.nav_start_list_item}>
                                <Link href="/#courses">
                                    <a className={styles.link}> Courses</a>
                                </Link>
                            </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
