import destinationsData from "../Data/destinationsData";
import PageTopBanner from "../components/Banners/PageTopBanner";
import DestinationPageCard from "../components/Cards/DestinationPageCard";
import styles from '../styles/pages/destination.module.scss';
export const metadata = {
    title: 'Best Places to Visit Himachal - Explore the Destination with Chalo Chalein',
    description: 'Discover the best places to visit in Himachal and enjoy sightseeing with Chalo Chalein. Plan your trip to Himachal with expert guidance and explore the hidden gems of this beautiful destination.',
}
export default function Destinations() {
    return (
        <>
            <PageTopBanner
                bannerImage={'/images/banners/destination-page-banner.webp'}
                title={'Destinations'}
                subtitle={'Your Gateway to Adventure'}
            />
            <section className={`${styles.destinations_page} common_margin`}>
                <div className="container-sm">
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
