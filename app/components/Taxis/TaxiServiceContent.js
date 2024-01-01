'use client';
import { useState } from 'react';
import styles from './Taxis.module.scss';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { IoCallSharp } from "react-icons/io5";

export default function TaxiServiceContent() {

    const [hideText, setHideText] = useState(false);

    const handleShowHide = () => {
        setHideText(!hideText);
    };

    const mainlyTaxiService = [
        {
            id: 1,
            title: `Taxi Service in\n Dharamshala`,
            taxi_image: '/images/taxi/taxi.jpg'
        },
        {
            id: 2,
            title: `Taxi Service in\n Kangra Airport`,
            taxi_image: '/images/taxi/taxi.jpg'

        },
        {
            id: 3,
            title: `Taxi Service in\n McLeod Ganj`,
            taxi_image: '/images/taxi/taxi.jpg'

        }
    ];

  
    return (
        <div className={`${styles.taxi_service_overview} `}>
            <div className='common_heading'>
                <h4>Welcome to Chalo Chalein Taxi Service- </h4>
                <h5>Your Trusted Travel Companion in Dharamshala</h5>
                <span></span>
            </div>
            <div className={styles.text_container}>
                <p>Embark on a journey of discovery with Chalo Chalein, your go-to taxi service connecting the enchanting city of Dharamshala to the most sought-after destinations across Himachal Pradesh and beyond. Our dedicated taxi services extend seamlessly from Dharamshala to the captivating towns and cities of Dalhousie, Manali, Shimla, Kinnaur, Kullu, Lahaul Spiti, as well as offering connections to Amritsar, Chandigarh, and Delhi.{hideText ? `  At Chalo Chalein, we're more than a taxi service; we're your local companions facilitating unforgettable journeys through the breathtaking landscapes of Himachal Pradesh, particularly in the enchanting city of Dharamshala. Our commitment goes beyond mere transportation – it's about curating experiences that blend comfort, reliability, and the thrill of adventure.` : null}
                    {hideText ?
                        <button
                            className={styles.showhide_Btn}
                            onClick={handleShowHide}
                        >Show Less <FaAngleUp />
                        </button> :
                        <button
                            className={styles.showhide_Btn}
                            onClick={handleShowHide}>
                            Show More <FaAngleDown />
                        </button>
                    }
                </p>
            </div>

            <div className={styles.mainly_taxi_service}>
                <div className={styles.mainly_taxi_service_main}>
                    {mainlyTaxiService.map((item) => (
                        <div className={styles.mainly_taxi_service_main_child} key={item.id}>
                            <Image src={item.taxi_image} alt={item.title} fill={true} priority />
                            <div className={styles.mainly_taxi_service_content}>
                                <h4>{item.title}</h4>
                                <Link href="tel:9418249045" className="transparent_button">
                                    <IoCallSharp />
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.key_features}>
                <div className='common_heading'>
                    {/* <h6>Chalo Chalein Specialties:</h6> */}
                    <h6>Benefits of Choosing Chalo Chalein:</h6>
                    <ul>
                        <li><strong>Punctuality Assured:</strong> We understand the value of your time. With Chalo Chalein, expect punctual pickups and drop-offs, allowing you to adhere to your schedule without stress.</li>
                        <li><strong>Effortless Booking Experience:</strong> Our user-friendly booking system ensures convenience at your fingertips. Simply say "Chalo Chalein" and embark on your journey hassle-free.</li>
                        <li><strong>Local Insights and Expertise:</strong> Discover Dharamshala's hidden gems and the wonders of Himachal Pradesh with our insider knowledge. Our team ensures that every trip is infused with local insights, making your experiences authentic and unforgettable.</li>
                    </ul>
                    <p>Whether you're exploring Dharamshala's cultural richness, delving into the tranquility of nature, or seeking thrilling adventures off the beaten path, Chalo Chalein is your partner in creating memories that linger long after your journey ends.</p>
                    <p>Let's venture into the heart of Himachal Pradesh together. Chalo Chalein – Let's go!</p>
                </div>
            </div>

        </div>
    )
}
