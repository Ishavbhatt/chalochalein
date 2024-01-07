import PageTopBanner from "../components/Banners/PageTopBanner";
import styles from "../styles/pages/about.module.scss";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <PageTopBanner
        bannerImage={'/images/banners/about-banner.jpg'}
        title={'About Us'}
        subtitle={'Our Journey, Your Experience'}
      />
      <section className={`${styles.about_us_sec} common_margin`}>
        <div className="container">
          <div className={`${styles.about_us_content} flex_center common_margin d_flex`}>
            <div className={styles.left_sec}>
              <h2>What is Chalo-Chalien</h2>
              <p>
                BanBanjara is how you can discover travel experiences that truly
                fill your soul. Looking for a Himalayan Trek? An awesome nearby
                weekend getaway? Scuba Diving, rafting or paragliding? How about
                an experiential stay in a coffee estate? BanBanjara is all of this
                and much more. Discover all such travel experiences at your
                fingertips.
              </p>
            </div>
            <div className={styles.right_sec}>
              <div className={styles.about_image}>
                <Image
                  src="/images/about-chalo-chalien.png"
                  fill={true}
                  alt="About us Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutUs;
