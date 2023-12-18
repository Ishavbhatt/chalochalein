'use client';
import { useState } from 'react';
import styles from './Taxis.module.scss';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

export default function TaxiServiceContent() {

    const [hideText, setHideText] = useState(false);

    const handleShowHide = () => {
        setHideText(!hideText);
    };

    return (
        <div className={`${styles.taxi_service_overview} `}>
            <div className='common_heading'>
                <h4>Welcome to Chalo Chalein Taxi Service- </h4>
                <h5>Your Trusted Travel Companion in Dharamshala</h5>
                <span></span>
            </div>
            <div className={styles.text_container}>
                <p>At Chalo Chalein, we invite you to embark on seamless journeys across the stunning landscapes of Himachal Pradesh. As your local travel partner in Dharamshala, we offer more than just transportation; we provide experiences that resonate with comfort, reliability, and adventure.{hideText ? `  At Chalo Chalein, we're more than a taxi service; we're your local companions facilitating unforgettable journeys through the breathtaking landscapes of Himachal Pradesh, particularly in the enchanting city of Dharamshala. Our commitment goes beyond mere transportation – it's about curating experiences that blend comfort, reliability, and the thrill of adventure.` : null}
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
