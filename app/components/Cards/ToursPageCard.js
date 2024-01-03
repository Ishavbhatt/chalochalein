'use client';
import Image from 'next/image';
import styles from './Cards.module.scss';
import { IoLocationOutline } from 'react-icons/io5';
import { MdArrowOutward } from 'react-icons/md';
import Link from 'next/link';

export default function ToursPageCard({ tour }) {
    return (
        <div className={styles.tour_card}>
            <div className={styles.card_top}>
                <div className={styles.card_image}>
                    <Image
                        className={styles.image}
                        src={tour.ImageSrc}
                        fill={true}
                        alt="Picture of the tour"
                    />
                </div>
                <div className={styles.tour_gradient}></div>
                <div className={`${styles.card_image_content} flex_center`}>
                    <div>
                        <p>{tour.Duration}</p>
                    </div>
                    <div className="flex_center">
                        <IoLocationOutline />
                        <h5>{tour.tourName}</h5>
                    </div>
                </div>
            </div>
            <div className={`${styles.card_bottom}`}>
                <h4>{tour.title}</h4>
                <p>{tour.description}</p>
                {/* <button className="common_btn">{destination.button}</button>               */}
                <Link href={"/"}>
                    <button className="common_btn">
                        Explore <MdArrowOutward />
                    </button>{" "}
                </Link>
            </div>
        </div>
    )
}
