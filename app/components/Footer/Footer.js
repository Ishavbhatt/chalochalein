import styles from "./Footer.module.scss";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer  className={styles.footer_parent}>
      <div className="container">
        <div className={styles.footer_container}>
          {/* <div className={styles.footer_head}>
            <h2>Follow Us</h2>
            <h3>#Chalo Chalein</h3>
          </div> */}
          <div className={styles.footer_column}>
            <div className={styles.column }>
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
           
              <div className={styles.social_icons}>
              <FaFacebookF />
              </div>
              <div className={styles.social_icons}>
              <FaInstagram />
              </div>
              <div className={styles.social_icons}>
              <FaTwitter />
              </div>
            </div>
            </div>
            <div className={styles.column }>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  About Us
                </li>
                <li>
                  Taxi Services
                </li>
                <li>
                  Tours
                </li><li>
                  Trekking
                </li>
                <li>
                  Sightseeing
                </li>
                <li>
                  Contact Us
                </li>
              </ul>
            </div>
            <div className={styles.column }>
              <h4>Tours</h4>
              <ul className="tours_list">
                <li>Gulmarg </li>
                <li>Phalgam </li>
                <li>Sonamarg </li>
                <li>Srinagar</li>
                <li> More</li>
              </ul>
            </div>
            <div className={`${styles.column} ${styles.footer_last_column}` }>
              <h4> Latest Projects</h4>
              <div className={styles.projects_container}>
                <div className={styles.projects_list}>
                  <Image className= {styles.project_image}
                    src="/images/andman.png"
                    alt="Picture of the author"
                    fill={true}
                  />
                  <p>Thailand</p>
                  <div className={styles.gradient}>/</div>

                </div>
                <div className={styles.projects_list}>
                <Image className= {styles.project_image}
                    src="/images/Bali.png"
                   fill={true}
                    alt="Picture of the author"
                  />
                  <p>Thailand</p>

                </div>
                <div className={styles.projects_list}>
                <Image className= {styles.project_image}
                    src="/images/dubai.png"
                    fill={true}
                    alt="Picture of the author"
                  />
                  <p>Thailand</p>

                </div>
                <div className={styles.projects_list}>
                <Image className= {styles.project_image}
                    src="/images/hongkong.png"
                    fill={true}
                    alt="Picture of the author"
                  />
                  <p>Thailand</p>

                </div>
                <div className={styles.projects_list}>
                <Image className= {styles.project_image}
                    src="/images/india.png"
                    fill={true}
                    alt="Picture of the author"
                  />
                  <p>Thailand</p>

                </div>
                <div className={styles.projects_list}>
                <Image className= {styles.project_image}
                    src="/images/ladakh.png"
                   fill={true}
                    alt="Picture of the author"
                  />
                  <p>Thailand</p>

                </div>
                <div className={styles.projects_list}>
                <Image className= {styles.project_image}
                    src="/images/singapore.png"
                   fill={true}
                    alt="Picture of the author"
                  />  
                  <p>Thailand</p>
              </div>
                <div className={styles.projects_list}>
                  <Image className= {styles.project_image}
                    src="/images/srilanka.png"
                    alt=""
                   fill={true}
                  />
                  <p>Thailand</p>

                </div>
                <div className={styles.projects_list}>
                <Image className= {styles.project_image}
                    src="/images/thailand.png"
                   fill={true}
                    alt="Picture of the author"
                  />
                  <p>Thailand</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className={styles.footer_bottom}><p>Copyright © 2024 ChaloChalein - Theme by Shufflehound</p></div>
    </footer>
  );
}
