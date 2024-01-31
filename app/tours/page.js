import ToursPageCard from "../components/Cards/ToursPageCard";
import styles from '../styles/pages/tours.module.scss';
import toursData from "../Data/toursData";
import PageTopBanner from "../components/Banners/PageTopBanner";
export const metadata = {
    title: 'Book Himachal Pradesh Tour Packages - Explore the Scenic Beauty',
    description: 'Discover the beauty of Himachal Pradesh with our book tour packages. Experience the breathtaking views of mountains, lush valleys, and serene lakes in Himachal. Plan your trip now!',
  }
export default function Tours() {
    return (
        <>
            <PageTopBanner
                bannerImage={'/images/banners/about-banner.jpg'}
                title={'Tours'}
                subtitle={'Explore Our Exciting Offerings'}
            />
            <section className={`${styles.tours_page} common_margin`}>
                <div className="container">
                    <div className={styles.tours_page_cards}>
                        {toursData && toursData.map((tour, index) => (
                            <div className={styles.tours_page_card} key={index}>
                                {/* <DestinationPageCard destination={tour} /> */}
                                <ToursPageCard tour={tour} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
