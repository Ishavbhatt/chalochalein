import destinationsData from '../../Data/destinationsData';
import styles from '../../styles/pages/destination.module.scss'
// import { FaMountainSun, FaPrayingHands, FaLandmark, FaHiking } from "react-icons/fa";
import { FaMountainSun, FaPersonHiking } from "react-icons/fa6";
import { FaPrayingHands, FaLandmark } from "react-icons/fa";
import DestinationCard from '../../components/Cards/DestinationCard';

function getDestination(slug) {
    return destinationsData.find(destination => destination.slug === slug);
}

function otherDestination(slug) {
    return destinationsData.filter(destination => destination.slug != slug);
}

const page = ({ params }) => {
    const single_destination = getDestination(params?.slug);
    const other_destinaiton = otherDestination(params?.slug);

    if (!single_destination) {
        return <div>Destination not found</div>;
    }

    return (
        <>
            <section className={`${styles.single_destination} common_margin`}>
                <div className='container'>
                    <div className={styles.single_destination_content}>
                        <div className={styles.destination_top_icons}>
                            <div className={styles.top_icon_col}>
                                <FaMountainSun />
                                <h5>Scenic Beauty</h5>
                            </div>
                            <div className={styles.top_icon_col}>
                                <FaPersonHiking />
                                <h5>Adventure Trails</h5>
                            </div>
                            <div className={styles.top_icon_col}>
                                <FaPrayingHands />
                                <h5>Spiritual Haven</h5>
                            </div>
                            <div className={styles.top_icon_col}>
                                <FaLandmark />
                                <h5>Cultural Delights</h5>
                            </div>
                        </div>

                        <div className={styles.destination_overview}>
                            <h3>{single_destination.destination_name} Overview</h3>
                            <p>{single_destination.breif_overview}</p>
                        </div>

                        <div className={styles.destination_overview}>
                            <h3>Best Time to Visit:</h3>
                            <p>{single_destination.brief_best_time_to_visit}
                            </p>
                        </div>

                        <div className={styles.destination_overview}>
                            <h3>Places To Visit in {single_destination.destination_name}:</h3>

                            <ul>
                                {single_destination.places_to_visit.map((item, index) => (
                                    <li key={index}><strong>{item.name}:</strong> {item.description}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.destination_overview}>
                            <h3>Travel Tips</h3>
                            <ul>
                                {single_destination.travel_tips.map((item, index) => (
                                    <li key={index}><strong>{item.title}:</strong> {item.description}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <section className={`${styles.popular_destinations} common_margin`}>
                        <div className="container">
                            <div className="d_flex justify_content_between align_items_center">
                                <div className="common_heading">
                                    <h4>Other Destinations</h4>
                                    <h5>Discover the Charms of Shimla, Manali, Dharamshala, and More</h5>
                                    <span></span>
                                </div>
                            </div>
                            <div className={styles.popular_destinations_cards}>
                                {other_destinaiton && other_destinaiton.slice(0, 4).map((destination, index) => (
                                    <div className={styles.popular_destinations_card} key={index} >
                                        <DestinationCard destination={destination} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};

export default page;
