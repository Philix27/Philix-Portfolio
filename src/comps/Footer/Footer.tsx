import React from "react";
import styles from "./Footer.module.scss";
import { FaWhatsapp } from "react-icons/fa";
import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillPhone,
} from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  return (
    <div id="footer" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.section}>
          <p className={styles.list_headers}>Contacts</p>
          <ul>
            <li>
              <Link
                className={styles.Linka}
                target="_blank"
                href="/docs/res.pdf"
                download="philix_cv"
              >
                {/* <LinkiFillGithub size={15} />   */}
                <span className={styles.contact_list}>Resume</span>
              </Link>
            </li>
            <li>
              <Link
                className={styles.Linka}
                target="_blank"
                href="mailto:philixbob@gmail.com"
              >
                <AiOutlineMail size={15} />
                <span className={styles.contact_list}>Email</span>
              </Link>
            </li>
            <li>
              <Link
                className={styles.Linka}
                target="_blank"
                href="https://wa.me/2348108850572?text=Hi+Philix%2C+I%27m+just+visited+your+website."
              >
                <FaWhatsapp size={15} />
                <span className={styles.contact_list}>Whatsapp</span>
              </Link>
            </li>
            <li>
              <Link
                passHref={false}
                className={styles.Linka}
                href="tel:+2348108850572"
              >
                <AiFillPhone size={15} />
                <span className={styles.contact_list}>Phone </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <p className={styles.list_headers}>Socials</p>
          <ul>
            <li>
              <Link
                className={styles.Linka}
                target="_blank"
                href="https://linkedin.com/in/eligbue-felix-362372124"
              >
                <AiFillLinkedin size={15} />
                <span className={styles.contact_list}>Linkedin</span>
              </Link>
            </li>
            <li>
              <Link
                className={styles.Linka}
                target="_blank"
                href="https://facebook.com/eligbue.felix.7"
              >
                <AiFillFacebook size={15} />
                <span className={styles.contact_list}>Facebook</span>
              </Link>
            </li>
            <li>
              <Link
                className={styles.Linka}
                target="_blank"
                href="https://twitter.com/eligbue_felix"
              >
                <AiFillTwitterSquare />
                <span className={styles.contact_list}>Twitter</span>
              </Link>
            </li>
            <li>
              <Link
                className={styles.Linka}
                target="_blank"
                href="https://github.com/Philix27"
              >
                <AiFillGithub size={15} />
                <span className={styles.contact_list}>Github</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        {/* <p>Copyright &copy;.</p> */}
        <p>2022 Copyright &copy; All Rights Reserved</p>
      </div>
    </div>
  );
}
