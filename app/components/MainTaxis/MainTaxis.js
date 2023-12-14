import Image from "next/image";
import Link from "next/link";
import styles from './MainTaxis.module.scss'

const MainTaxis = () => {

    const taxisData = [
        {
            id: 1,
            taxi_image: '/images/taxi/innova.png',
            taxi_name: 'Innova',
            description: 'Spacious and comfortable SUV, perfect for families or groups, seating up to 7 passengers.',
            cta_link: '',
        },
        {
            id: 2,
            taxi_image: '/images/taxi/tempo-traveller.png',
            taxi_name: 'Tempo Traveller',
            description: 'Large and versatile, ideal for group travel, accommodating up to 12 passengers comfortably.',
            cta_link: '',
        },
        {
            id: 3,
            taxi_image: '/images/taxi/swift-desire.png',
            taxi_name: 'Swift Desire',
            description: `Compact and efficient sedan, great for small groups or solo travelers, with seating for up to 4 passengers.`,
            cta_link: '',
        },
        {
            id: 4,
            taxi_image: '/images/taxi/alto.png',
            taxi_name: 'Alto',
            description: `Economical and compact, suitable for individuals or couples, seating up to 4 passengers comfortably.`,
            cta_link: '',
        },
    ];

    return (
        <>
            <section className={`${styles.main_taxis_sec} common_margin`}>
                <div className="container">
                    <div className={styles.main_taxis}>
                        {taxisData.map((taxi) => (
                            <div className={styles.main_taxis_child} key={taxi.id}>
                                <div className={styles.main_taxis_child_image}>
                                <Image src={taxi.taxi_image} height={150} width={150} alt={taxi.taxi_name} priority={true} />
                                </div>
                                <div className={styles.taxi_content}>
                                    <h4>{taxi.taxi_name}</h4>
                                    <p>{taxi.description}</p>
                                </div>
                                <button className={styles.taxi_btn}>
                                    next
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainTaxis;
