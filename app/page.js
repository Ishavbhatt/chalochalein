import styles from './styles/pages/page.module.scss';
import HomeBanner from "./components/Banners/HomeBanner/HomeBanner";
import PageBanner from "./components/Banners/PageBanner/PageBanner";
import MainTaxis from "./components/Taxis/MainTaxis";
import Whychooseus from "./components/Whychooseus/Whychooseus";
import Destinations from "./components/Destinations/destination";
import destinationsData from "./Data/destinationsData";
import DestinationCard from "./components/Cards/DestinationCard";
import Tours from "./components/Tours/tours";
import Loader from './components/Loader/Loader'; ''
export default function Home() {
  return (
    <main>
      {/* <HomeBanner />
      <Whychooseus />
      <PageBanner />
      <MainTaxis /> */}
      {/* <Tours /> */}

      <section className={styles.popular_destinations}>
        <div className="container">
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
