import styles from './styles/pages/page.module.scss';
import HomeBanner from "./components/Banners/HomeBanner/HomeBanner";
import PageBanner from "./components/Banners/PageBanner/PageBanner";
import MainTaxis from "./components/Taxis/MainTaxis";
import Whychooseus from "./components/Whychooseus/Whychooseus";
import Destinations from "./components/Destinations/destination";
import destinationsData from "./Data/destinationsData";
import DestinationCard from "./components/Cards/DestinationCard";
import Tours from "./components/Tours/tours";
import Loader from './components/Loader/Loader';
import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineArrowUpRight } from "react-icons/hi2";


export default function Home() {
  return (
    <main>
      {/* <HomeBanner />
      <Whychooseus />
      <PageBanner />
      <MainTaxis /> */}
      {/* <Tours /> */}

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
    </main>
  )
}
