import Image from "next/image";
import styles from './Banners.module.scss'
const BookCabBanner = () => {
    return (
        <div className="container">
            <div className={`${styles.cab_banner} d_flex`} >
                <div className={`${styles.left}`}>
                    <h3>Book Your Cab</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Massa egestas id sit nulla ac. 
                        Turpis mattis elit purus lorem amet et tempus.
                         Aliquet viverra ipsum sed purus fermentum.</p>
                     <button className="common_btn">Book Now</button>
                </div>
                <div className={styles.right}>
                    <Image src='/images/banners/cab-banner.jpeg' width={255} height={230}></Image>
                </div>
            </div>
        </div>
    );
}
export default BookCabBanner;