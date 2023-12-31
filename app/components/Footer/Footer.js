import styles from "./Footer.module.scss";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer_parent}>
      <div className="container">
        <div className={styles.footer_container}>
          {/* <div className={styles.footer_head}>
            <h2>Follow Us</h2>
            <h3>#Chalo Chalein</h3>
          </div> */}
          <div className={styles.footer_column}>
            <div className={styles.column}>
              <h4>Follow Us</h4>
              <ul>
                <li>
                  <IoCall />
                  <span>+91 9876543210</span>
                </li>
                <li>
                  <IoMail />
                  <span>john@gmail.com</span>
                </li>
                <li>
                  <FaLocationDot />
                  <span>Office San Diego — 845 15th</span>
                </li>
              </ul>
              <div className={styles.social_icons_main}>
                <Link href="/" className={styles.social_icons}>
                  <FaFacebookF />
                </Link>
                <Link href="/" className={styles.social_icons}>
                  <FaInstagram />
                </Link>
                <Link href="/" className={styles.social_icons}>
                  <FaTwitter />
                </Link>
              </div>
            </div>
            <div className={styles.column}>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link href='/about-us'>About Us</Link>
                </li>
                <li>
                  <Link href='/taxi-services'>Taxi Services</Link>
                </li>
                <li>
                  <Link href='/tours'>Tours</Link>
                </li>
                <li>
                  <Link href='/destinations'>Destinations</Link>
                </li>
                <li>
                  <Link href='/contact-us'>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className={styles.column}>
              <h4>Tours</h4>
              <ul className="tours_list">
                <li>Gulmarg </li>
                <li>Phalgam </li>
                <li>Sonamarg </li>
                <li>Srinagar</li>
                <li> More</li>
              </ul>
            </div>
            <div className={`${styles.column} ${styles.footer_last_column}`}>
              <h4> Latest Projects</h4>
              <div className={styles.projects_container}>
                <div className={styles.projects_list}>
                  <Image className={styles.project_image}
                    src="/images/andman.png"
                    alt="Picture of the author"
                    // fill={true}
                    height={90}
                    width={88}
                  />
                  <Link href='/'>Thailand</Link>
                </div>
                <div className={styles.projects_list}>
                  <Image className={styles.project_image}
                    src="/images/Bali.png"
                    height={90}
                    width={88}
                    alt="Picture of the author"
                  />
                  <Link href='/'>Thailand</Link>
                </div>
                <div className={styles.projects_list}>
                  <Image className={styles.project_image}
                    src="/images/dubai.png"
                    height={90}
                    width={88}
                    alt="Picture of the author"
                  />
                  <Link href='/'>Thailand</Link>
                </div>
                <div className={styles.projects_list}>
                  <Image className={styles.project_image}
                    src="/images/hongkong.png"
                    height={90}
                    width={88}
                    alt="Picture of the author"
                  />
                  <Link href='/'>Thailand</Link>
                </div>
                <div className={styles.projects_list}>
                  <Image className={styles.project_image}
                    src="/images/india.png"
                    height={90}
                    width={88}
                    alt="Picture of the author"
                  />
                  <Link href='/'>Thailand</Link>
                </div>
                <div className={styles.projects_list}>
                  <Image className={styles.project_image}
                    src="/images/ladakh.png"
                    height={90}
                    width={88}
                    alt="Picture of the author"
                  />
                  <Link href='/'>Thailand</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <p>Copyright © 2024 Chalo Chalein Tour & Travel</p>
      </div>
    </footer>
  );
}
