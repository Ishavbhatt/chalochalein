import activitiesData from "../Data/activitiesData";
import ActivityPageCard from "../components/Cards/ActivityPageCard";
import PageTopBanner from "../components/Banners/PageTopBanner";
import styles from '../styles/pages/activities.module.scss';
import BookCabBanner from "../components/Banners/BookCabBanner";

export const metadata = {
    title: 'Book Adventure Activities with Chalo Chalein | Trekking, Paragliding, Camping in Dharamshala, Himachal',
    description: 'Experience thrilling adventure activities in Himachal Pradesh with Chalo Chalein! Book trekking, paragliding, camping in Dharamshala and explore the stunning landscapes of Himachal.',
}

export default function Activities() {
    return (
        <>
            <PageTopBanner
                bannerImage={'/images/banners/activities-page-banner.webp'}
                title={'Explore the Wild: Trek, Glide, Camp'}
                subtitle={'Embark on Thrilling Treks, Soar through the Skies with Paragliding, and Unwind Amidst Nature with Camping.'}
            />
            <section className={`${styles.activities_page} common_margin`}>
                <div className="container">
                    <div className={styles.activity_card}>
                        {activitiesData && activitiesData.map((activity, index) => (
                            <div className={styles.activity_page_card} key={index} >
                                <ActivityPageCard activity={activity} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <BookCabBanner
                title={'Explore the Outdoors with Chalo Chalein'}
                description={'Unleash the adventurer in you! Choose from exciting trekking trails, exhilarating paragliding experiences, or serene camping getaways. Your next escapade awaits – book now!'}
                CTA_text={'Book Now'}
                image={'/vectors/trekking.svg'}
            />
        </>
    )
}