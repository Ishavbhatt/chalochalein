'use client';
import Image from 'next/image';
import styles from './DestinationPageCard.module.scss';
import Link from 'next/link';
import { PiArrowUpRightLight } from "react-icons/pi";
import { PiMountainsFill } from "react-icons/pi";


export default function DestinationPageCard({ destination }) {
    return (
        <div className={styles.destination_page_card}>
            <Link className='ancor_click' href='/destinations'></Link>
            <div className={styles.card_image}>
                <div className={styles.badge}>
                    <span className='d_flex align_items_center' style={{ gap: '5px' }}><PiMountainsFill />  {destination.region}</span>
                </div>
                <Image src={destination.destination_image}
                    alt={destination.destination_name}
                    fill={true}
                />
            </div>
            <div className={styles.card_content}>
                <h4>{destination.destination_name}</h4>
                <p>{destination.short_description}</p>
                {/* <p className={styles.best_time_to_visit}><strong>Best Time: </strong>{destination.best_time_to_visit}</p > */}
                <Link href="/destinations" className="common_btn">
                    Discover
                    <PiArrowUpRightLight />
                </Link>
            </div>
        </div>
    )
}
