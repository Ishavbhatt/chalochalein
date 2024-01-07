import destinationsData from "../Data/destinationsData";
import PageTopBanner from "../components/Banners/PageTopBanner";
import DestinationPageCard from "../components/Cards/DestinationPageCard";
import styles from '../styles/pages/destination.module.scss';

export default function Destinations() {
    return (
        <>
            <PageTopBanner
                bannerImage={'/images/banners/about-banner.jpg'}
                title={'Destinations'}
                subtitle={'Your Gateway to Adventure'}
            />
            <section className={`${styles.destinations_page} common_margin`}>
                <div className="container">
                    <div className={styles.destinations_cards}>
                        {destinationsData && destinationsData.map((destination, index) => (
                            <div className={styles.destinations_page_card} key={index} >
                                <DestinationPageCard destination={destination} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>

    )
}
