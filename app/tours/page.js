import ToursPageCard from "../components/Cards/ToursPageCard";
import styles from '../styles/pages/tours.module.scss';
import toursData from "../Data/toursData";

export default function Tours() {
    return (
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
    )
}
