import BookTaxiForm from '../components/Forms/BookTaxiForm';
import styles from '../styles/pages/taxiservices.module.scss';
import TaxiServiceContent from '../components/Taxis/TaxiServiceContent';
import Benefits from '../components/Taxis/Benifits';
import Image from 'next/image';
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import Link from 'next/link';
import PopularRoutes from '../components/Taxis/PopularRouts';
import PageTopBanner from '../components/Banners/PageTopBanner';
import { IoCallSharp } from 'react-icons/io5';
import SEOContent from '../components/SEOContent/SEOContent';
import BookTaxiBanner from '../components/Banners/BookTaxiBanner';

export const metadata = {
    title: 'Taxi Service in Dharamshala, Shimla, Kullu, Manali - Book Your Cab',
    description: 'We provide taxi service in all over Himachal Pradesh. Book your cab now and explore the scenic beauty of Dharamshala, Shimla, Kullu, Manali. Hassle-free travel with experienced drivers.',
}

export default function TaxiServices() {

    const taxis = [
        {
            id: 1,
            taxi_name: `Alto`,
            seats: '4 + 1',
            taxi_image: '/images/taxi/alto.jpg'
        },
        {
            id: 2,
            taxi_name: `Swift Dezire`,
            seats: '4 + 1',
            taxi_image: '/images/taxi/swift-dezire.webp'
        },
        {
            id: 3,
            taxi_name: `Toyota Rumion`,
            seats: '6 + 1',
            taxi_image: '/images/taxi/toyota-rumion.jpg'
        },
        {
            id: 4,
            taxi_name: `Innova Crysta`,
            seats: '6 + 1',
            taxi_image: '/images/taxi/innova-crysta.jpg'
        },
        {
            id: 5,
            taxi_name: `Ertiga `,
            seats: '6 + 1',
            taxi_image: '/images/taxi/ertiga.webp'
        },
        {
            id: 6,
            taxi_name: `Toyota Etios`,
            seats: '4 + 1',
            taxi_image: '/images/taxi/toyota-etios.webp'
        },
       
        {
            id: 7,
            taxi_name: `Mahindra Bolero`,
            seats: '6 + 1',
            taxi_image: '/images/taxi/mahinda-bolero.webp'
        },
        {
            id: 8,
            // taxi_name: `Sedan`,
            taxi_name: `Scorpio`,
            seats: '6 + 1',
            taxi_image: '/images/taxi/scorpio.jpg'
        },
        {
            id: 9,
            // taxi_name: `Suv`,
            taxi_name: `Fortuner`,
            seats: '6 + 1',
            taxi_image: '/images/taxi/fortuner.jpg'
        },
        {
            id: 10,
            taxi_name: `Tempo Traveller`,
            seats: '12 + 1',
            taxi_image: '/images/taxi/tampo-traveller.jpg'
        },
    ];

    return (
        <>
            <PageTopBanner
                bannerImage={'/images/banners/taxi-page-banner.webp'}
                title={'Taxi Services'}
                subtitle={'Reliable Transport Solutions'}
                altTag={'Chalo Chalein taxi service in dharamshala'}
            />

            <SEOContent
                title="Chalo Chalein taxi service in dharamshala"
                description={`Explore Himachal with Ease – Premier Taxi Services in Dharamshala, Kangra, Shimla & Kullu Manali 
                
                At Chalo Chalein, we are proud to unveil our dedicated taxi service page, catering to your travel needs across the enchanting realms of Himachal Pradesh. Our focus is on providing reliable and comfortable taxi services, especially tailored for the picturesque towns of Dharamshala, Kangra, Shimla, and Kullu Manali. Whether you're planning a serene retreat in the hills or an adventurous excursion, our experienced drivers ensure your journey through the scenic beauty of Himachal is safe, enjoyable, and unforgettable. With our user-friendly online booking system, tourists can effortlessly reserve their preferred vehicles and customize their itineraries. Trust Chalo Chalein to be your travel companion as you embark on an exquisite exploration of Himachal's most beloved destinations.`}
            />

            <section className={`${styles.taxi_services} common_margin`}>
                <div className="container">
                    <div className={styles.taxi_services_top}>
                        <div className={styles.taxi_services_top_left}>
                            <TaxiServiceContent />
                        </div>

                        <div className={styles.taxi_services_top_right}>
                            <div className={styles.taxi_services_top_right_inner}>
                                <BookTaxiForm />
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.taxis_listing} common_margin`}>
                        <div className='common_heading'>
                            <h4>Explore Our Diverse Fleet of Taxis</h4>
                            <h5>Discover the Perfect Ride for Every Journey</h5>
                            <span></span>
                        </div>
                        <div className={styles.taxis_listing_main}>
                            {taxis.map((taxi, index) => (
                                <div className={styles.taxis_listing_child} key={index}>
                                    <div className={styles.taxis_listing_child_image}>
                                        <Image src={taxi.taxi_image} fill={true} alt={taxi.taxi_name} />
                                    </div>
                                    <div className={styles.taxis_listing_child_content}>
                                        <h4>{taxi.taxi_name} <span>(<MdOutlineAirlineSeatReclineNormal />   {taxi.seats})</span> </h4>
                                        <ul>
                                            <li>No Extra Charge</li>
                                            <li>Charging Port</li>
                                            <li>AC</li>
                                            <li>Music System</li>
                                            <li>Diesel</li>
                                        </ul>
                                        <Link href="tel:8894460060" className='common_animate_btn inline-block'>
                                            <IoCallSharp /> Call to Book
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Benefits />
                    <PopularRoutes />
                </div>
            </section>

            <BookTaxiBanner />
        </>
    )
}
