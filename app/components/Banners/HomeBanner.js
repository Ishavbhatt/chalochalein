'use client'
import Image from "next/image";
import styles from "./Banners.module.scss";
import Slider from "react-slick";
import Link from "next/link";
import { FaTaxi } from "react-icons/fa";
import { TbTrekking } from "react-icons/tb";
import { MdOutlineTour } from "react-icons/md";

const HomeBanner = () => {

  const banners = [
    {
      id: 1,
      title: `Seamless Transfers`,
      description: 'Effortless journeys across Himachal Pradesh with our reliable taxi services. Your destination, our priority.',
      imgSrc: "/images/banners/taxi-banner.webp",
      mobileBannerImage: "/images/banners/taxi-banner.webp",
      button_text: 'Book A Taxi',
      button_icon: <FaTaxi />
    },
    {
      id: 2,
      title: `Journey into Himachal's Charm`,
      description: `Explore Himachal's wonders with our curated tours. Discover the beauty and culture that define this mesmerizing region`,
      imgSrc: "/images/banners/tours-banner.jpg",
      mobileBannerImage: "/images/banners/tours-banner.jpg",
      button_text: 'Book a Tours',
      button_icon: <MdOutlineTour />
    },
    {
      id: 3,
      title: `Trek Beyond Boundaries`,
      description: `Unleash your spirit of adventure amidst the Himalayas. Experience exhilarating treks and stunning vistas that defy imagination.`,
      imgSrc: "/images/banners/trekking-banner.jpg",
      mobileBannerImage: "/images/banners/trekking-banner.jpg",
      button_text: 'Book Treks',
      button_icon: <TbTrekking />
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
      <section className={styles.desktop_banner}>
        <Slider {...settings} className="banner_slider">
          {banners.map((banner) => (
            <div className={styles.home_banner} key={banner.id}>
              <Image
                src={banner.imgSrc}
                alt={banner.button_icon + 'with Chalo Chalein'}
                fill={true}
              />
              <div className="container">
                <div className={styles.home_banner_content}>
                  <h2 className="common_headings_white">{banner.title}</h2>
                  <p className="common_para_white">{banner.description}</p>
                  <Link href="tel:8894460060" className="common_animate_btn">{banner.button_icon} {banner.button_text}</Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className={styles.mobile_banner}>
        <Slider {...settings} className='banner_slider' >
          {banners.map((banner) => (
            <div className={styles.home_banner} key={banner.id}>
              <img src={banner.mobileBannerImage} width="100%" height="100%" />
              <div className={styles.home_banner_content}>
                <h2 className="common_headings_white">{banner.title}</h2>
                <p className="common_para_white">{banner.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};
export default HomeBanner;