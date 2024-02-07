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
                  <p style={{ width: '20px', color: 'white' }}><IoCall /></p>
                  <span> <Link href='tel:8894460060'>+91 8894460060</Link></span>
                </li>
                <li>
                  <p style={{ width: '20px', color: 'white' }}> <IoMail /></p>
                  <span> <Link href='mailto:chalochaleintourandtravel@gmail.com'>chalochaleintourandtravel@gmail.com</Link></span>
                </li>
                <li>
                  <p style={{ width: '20px', color: 'white' }}> <FaLocationDot /></p>
                  <span>Dharamshala, Himachal Pradesh</span>
                </li>
              </ul>
              <div className={styles.social_icons_main}>
                <Link href="/" className={styles.social_icons}>
                  <FaFacebookF />
                </Link>
                <Link href="/" className={styles.social_icons}>
                  <FaInstagram />
                </Link>
                {/* <Link href="/" className={styles.social_icons}>
                  <FaTwitter />
                </Link> */}
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
                  <Link href='/activities'>Activities</Link>
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
                <li> <Link href='/tours'>Mcleodganj Taxi Tour</Link></li>
                <li> <Link href='/tours'>Dharamshala Taxi Tour</Link></li>
                <li> <Link href='/tours'>Devi Darshan Taxi Tour</Link></li>
                <li> <Link href='/tours'>Golden Temple Taxi Tour</Link></li>
                <li> <Link href='/tours'>Explore More</Link></li>
              </ul>
            </div>
            <div className={`${styles.column} ${styles.footer_last_column}`}>
              <h4>Destinations</h4>
              <div className={styles.projects_container}>
                <div className={styles.projects_list}>
                  <Image className={styles.project_image}
                    src="/images/destinations/dharamshala.png"
                    alt='Dharamshala'
                    // fill={true}
                    height={90}
                    width={88}
                  />
                  <Link href='/destinations/dharamshala'>Dharamshala</Link>
                </div>
                <div className={styles.projects_list}>
                  <Image className={styles.project_image}
                    src="/images/destinations/shimla.png"
                    height={90}
                    width={88}
                    alt="Shimla"
                  />
                  <Link href='/destinations/shimla'>Shimla</Link>
                </div>
                <div className={styles.projects_list}>
                  <Image className={styles.project_image}
                    src="/images/destinations/dalhousie.png"
                    height={90}
                    width={88}
                    alt="Dalhousie"
                  />
                  <Link href='/destinations/dalhousie'>Dalhousie</Link>
                </div>
                <div className={styles.projects_list}>
                  <Image className={styles.project_image}
                    src="/images/destinations/kullu.png"
                    height={90}
                    width={88}
                    alt="Kullu"
                  />
                  <Link href='/destinations/kullu'>Kullu</Link>
                </div>
                <div className={styles.projects_list}>
                  <Image className={styles.project_image}
                    src="/images/destinations/kasol.png"
                    height={90}
                    width={88}
                    alt="kasol"
                  />
                  <Link href='/destinations/kasol'>kasol</Link>
                </div>
                <div className={styles.projects_list}>
                  <Image className={styles.project_image}
                    src="/images/destinations/manali.png"
                    height={90}
                    width={88}
                    alt="Manali"
                  />
                  <Link href='/destinations/manali'>Manali</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <p>Copyright © 2024 Chalo Chalein Tour & Travel</p>
          <p>Design & Developed by <Link href='https://ishav.netlify.app/' target="_blank">Ishav Bhatt</Link></p>
        </div>
      </div>
    </footer>
  );
}
