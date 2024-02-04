import styles from './styles/pages/page.module.scss';
import HomeBanner from "./components/Banners/HomeBanner";
import MainTaxis from "./components/Taxis/MainTaxis";
import Whychooseus from "./components/Whychooseus/Whychooseus";
import destinationsData from "./Data/destinationsData";
import toursData from "./Data/toursData";
import DestinationCard from "./components/Cards/DestinationCard";
import Tours from "./components/Tours/tours";
import Loader from './components/Loader/Loader';
import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import BookTaxiBanner from './components/Banners/BookTaxiBanner';
import ToursPageCard from './components/Cards/ToursPageCard';
import Activities from './components/Activities/activities';
import Accordion from './components/Accordion/Accordion'
import BookCabBanner from './components/Banners/BookCabBanner';
import homePageFaqs from './Data/homePageFaqs';
import FaqCallSec from './components/FaqCallSec/FaqCallSec';

export const metadata = {
  title: 'Book Taxi in Dharamshala, Himachal Pradesh - Reliable Taxi Service',
  description: 'Experience the convenience of booking a taxi in Dharamshala, Himachal Pradesh. Our reliable taxi service offers hassle-free transportation for your travel needs. Book now!',
}

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <Whychooseus />
      <MainTaxis />

      <section className={`${styles.popular_destinations} common_margin`}>
        <div className="container">
          <div className="d_flex justify_content_between align_items_center common_parent_div">
            <div className="common_heading">
              <h4>Explore Our Premier Destinations</h4>
              <h5>Discover the Charms of Shimla, Manali, Dharamshala, and More</h5>
              <span></span>
            </div>
            <div className="common_btn_div">
              <Link href="/destinations" className='common_animate_btn inline-block'>
                Explore More <HiOutlineArrowUpRight />
              </Link>
            </div>
          </div>
          <div className={styles.popular_destinations_cards}>
            {destinationsData && destinationsData.slice(0, 4).map((destination, index) => (
              <div className={styles.popular_destinations_card} key={index} >
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.activities_sec} common_margin`}>
        <div className="container">
          <div className="d_flex justify_content_between align_items_center common_parent_div">
            <div className="common_heading">
              <h4>Adventure Awaits</h4>
              <h5>Explore the Thrill of Our Popular Activities</h5>
              <span></span>
            </div>
            <div className="common_btn_div">
              <Link href="/destinations" className='common_animate_btn'>
                Explore More <HiOutlineArrowUpRight />
              </Link>
            </div>
          </div>
          <Activities />
        </div>
      </section>

      <section className={`${styles.popular_tours} common_margin`}>
        <div className="container">
          <div className="d_flex justify_content_between align_items_center common_parent_div">
            <div className="common_heading">
              <h4>Featured Tours for Unforgettable Adventures</h4>
              <h5>Embark on Exciting Journeys: Explore, Trek, and Discover</h5>
              <span></span>
            </div>
            <div className="common_btn_div">
              <Link href="/tours" className='common_animate_btn inline-block'>
                View All Tours <HiOutlineArrowUpRight />
              </Link>
            </div>
          </div>
          <div className={styles.popular_tours_cards}>
            {toursData && toursData.slice(0, 4).map((tour, index) => (
              <div className={styles.popular_tour_card} key={index} >
                <ToursPageCard tour={tour} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <BookTaxiBanner /> */}
      <section className={`${styles.faq_sec} common_margin`}>
        <div className='container'>
          <div className="common_heading">
            <h4>Chalo Chalein FAQs</h4>
            <h5>Your Journey Begins with Answers</h5>
            <span></span>
          </div>
          <div className={`${styles.faq_content_main} d_flex gap_20`}>
            <div className={styles.faq_sec_left}>
              <FaqCallSec />
            </div>
            <div className={styles.faq_sec_right}>
              <Accordion items={homePageFaqs} />
            </div>
          </div>
        </div>
      </section>

      <BookCabBanner
        title={'Book Your Cab'}
        description={'Explore Himachal Pradesh with ease. Book your taxi now for a seamless journey through Dharamshala, Manali, and beyond. Our professional drivers ensure comfort and punctuality, making every trip memorable. Start your adventure today!'}
        CTA_text={'Book Now'}
        image={'/vectors/taxi.svg'}
      />
    </main>
  )
}
