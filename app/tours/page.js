import ToursPageCard from "../components/Cards/ToursPageCard";
import styles from '../styles/pages/tours.module.scss';
import toursData from "../Data/toursData";
import PageTopBanner from "../components/Banners/PageTopBanner";
import SEOContent from '../components/SEOContent/SEOContent'

export const metadata = {
    title: 'Book Himachal Pradesh Tour Packages - Explore the Scenic Beauty',
    description: 'Discover the beauty of Himachal Pradesh with our book tour packages. Experience the breathtaking views of mountains, lush valleys, and serene lakes in Himachal. Plan your trip now!',
}

export default function Tours() {
    return (
        <>
            <PageTopBanner
                bannerImage={'/images/banners/tours-page-banner.webp'}
                title={'Tours'}
                subtitle={'Explore Our Exciting Offerings'}
            />
            <SEOContent
                title="Himachal tour packages with chalo chalein"
                description={`Embark on an unforgettable journey with "Chalo Chalein" as we invite you to explore the majestic beauty of Himachal Pradesh through our specially curated tour packages. Our newly launched tour page on the Chalo Chalein travel agency website is your gateway to the serene landscapes and vibrant culture that epitomize tours in Himachal Pradesh with Chalo Chalein. Whether you're seeking adventure or tranquility, our customizable itineraries are designed to cater to your every desire, ensuring that your experience in the Himalayan paradise is unparalleled. With Chalo Chalein, you can trust that your tours in Himachal Pradesh will be filled with awe-inspiring moments, seamless travel arrangements, and the warm hospitality that our agency is renowned for. So why wait? Let Chalo Chalein guide you through the wonders of Himachal Pradesh, where every tour becomes a cherished memory.`}
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
