import Image from "next/image";
import Link from "next/link";
import styles from './PageBanner.module.scss'

const PageBanner = () => {
    return (
        <>
            <div className="common_margin">

                <section className={styles.book_taxi_banner}>
                    <div className="container">
                        <div className={styles.book_taxi_banner_main}>
                            <Image src="/images/taxi-banner.png" alt="Book A Taxi" fill={true} priority={true} sizes="(max-width: 768px) 400px, (max-width: 1200px) 600px, 1200px" />
                            <div className={styles.book_taxi_banner_main_content}>
                                <h2>Seamless Travel Experiences </h2>
                                <h2>Await</h2>
                                <p>Book Your Ride Now</p>
                                <Link className="transparent_button" href="tel:9418249045">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M5.79529 2.40081L6.66396 2.03681C7.47794 1.69574 8.41062 2.04969 8.84353 2.86392L9.70487 4.48429C10.0803 5.19039 9.98336 6.06798 9.46526 6.65394L8.02369 8.28453C8.19905 9.16878 8.57629 10.0216 9.15539 10.8429C9.73455 11.6642 10.426 12.327 11.2297 12.8312L13.0632 12.0357C13.7581 11.7341 14.5619 11.9401 15.0576 12.5467L16.2125 13.9599C16.7889 14.6651 16.7878 15.7078 16.2101 16.3993L15.5911 17.1403C14.975 17.8779 14.0315 18.2087 13.1144 18.0086C10.949 17.536 8.83996 15.7542 6.78711 12.6632C4.73127 9.5675 3.86436 6.86408 4.18639 4.55292C4.32191 3.58042 4.93395 2.76173 5.79529 2.40081Z" fill="white" />
                                    </svg> +91 94182-49045</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default PageBanner;
