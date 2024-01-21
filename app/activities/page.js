import activitiesData from "../Data/activitiesData";
import ActivityPageCard from "../components/Cards/ActivityPageCard";
import PageTopBanner from "../components/Banners/PageTopBanner";
import styles from '../styles/pages/activities.module.scss';

export default function Activities() {
    return (
        <>
            <PageTopBanner
                bannerImage={'/images/banners/about-banner.jpg'}
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
        </>
    )
}