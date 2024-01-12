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
          <div className={`${styles.about_us_content} flex_center d_flex`}>
            <div className={`${styles.left_sec} ${styles.top_sec_content}`}>
              <h2>What is Chalo-Chalien?</h2>
              <p>
                At Chalo Chalein, the very essence of our name, 'Chalo Chalein,' encapsulates the spirit of exploration and the call to embark on unforgettable journeys. In Hindi, 'Chalo Chalein' translates to 'let's go,' and for us, it represents more than just a phrase – it's an invitation to discover, experience, and create lasting memories.
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
          <div className={`${styles.about_us_content} flex_center d_flex`}>
          <div className={styles.right_sec}>
              <div className={styles.about_image}>
                <Image
                  src="/images/about-chalo-chalien.png"
                  fill={true}
                  alt="About us Image"
                />
              </div>
            </div>
            <div className={`${styles.left_sec} ${styles.bottom_sec_content}`}>
              <p>
              We are not just a travel agency; we are your companions on the road, guiding you through the diverse landscapes, vibrant cultures, and hidden gems that our beautiful destinations have to offer. Whether you're seeking the convenience of seamless taxi services, the excitement of curated tours, or the thrill of adventurous trekking, Chalo Chalein is your trusted partner in every step of the journey.
              </p>
              <p>So, join us on this incredible journey. Let's go explore, let's go discover – Chalo Chalein!</p>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutUs;
