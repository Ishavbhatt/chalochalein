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

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <Whychooseus />

      <MainTaxis />

      <section className={`${styles.popular_destinations} common_margin`}>
        <div className="container">
          <div className="d_flex justify_content_between align_items_center">
            <div className="common_heading">
              <h4>Explore Our Premier Destinations</h4>
              <h5>Discover the Charms of Shimla, Manali, Dharamshala, and More</h5>
              <span></span>
            </div>
            <div>
              <Link href="/destinations" className='common_btn inline-block'>
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
          <div className="d_flex justify_content_between align_items_center">
            <div className="common_heading">
              <h4>Adventure Awaits</h4>
              <h5>Explore the Thrill of Our Popular Activities</h5>
              <span></span>
            </div>
            {/* <div>
              <Link href="/destinations" className='common_btn inline-block'>
                Explore More <HiOutlineArrowUpRight />
              </Link>
            </div> */}
          </div>
          <Activities />
        </div>
      </section>

      <section className={`${styles.popular_tours} common_margin`}>
        <div className="container">
          <div className="d_flex justify_content_between align_items_center">
            <div className="common_heading">
              <h4>Featured Tours for Unforgettable Adventures</h4>
              <h5>Embark on Exciting Journeys: Explore, Trek, and Discover</h5>
              <span></span>
            </div>
            <div>
              <Link href="/tours" className='common_btn inline-block'>
                View All Tours <HiOutlineArrowUpRight />
              </Link>
            </div>
          </div>
          <div className={styles.popular_tours_cards}>
            {toursData && toursData.slice(0, 4).map((tour, index) => (
              <div className={styles.popular_destinations_card} key={index} >
                <ToursPageCard tour={tour} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookTaxiBanner />

    </main>
  )
}
