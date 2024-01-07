"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

const NewHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header_main}>
      <div className="container">
        <nav className={styles.navbar}>
          <div className={styles.header_logo}>
            <Link href="/">
              <Image src="/logo-color.png" height={80} width={100} alt="Chalo Chalein Logo" />
            </Link>
          </div>
          <div
            className={`${styles.links} ${menuOpen ? styles.open : styles.close
              }`}
          >
            <div className={styles.links_main}>
              {menuOpen === true && (
                <button className={styles.cross_btn} onClick={toggleMenu}>
                  <RxCross2 />
                </button>
              )}
              <Link href="/about" onClick={toggleMenu}>
                About Us
              </Link>
              <Link href="/taxi-services" onClick={toggleMenu}>
                Taxi Services
              </Link>
              <Link href="/countries" onClick={toggleMenu}>
                Tours
              </Link>
              <Link href="/courses" onClick={toggleMenu}>
                Trekking
              </Link>
              <Link href="/blogs" onClick={toggleMenu}>
                Sightseeing
              </Link>
              <Link href="/contact-us" onClick={toggleMenu}>
                Contact Us
              </Link>
            </div>
          </div>
          {/* <div className={styles.header_right}>
            <Link href="tel:9418249045">9418249045</Link>
          </div> */}
          <div className={styles.hamburger} onClick={toggleMenu}>
            <CgMenuRight />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NewHeader;
