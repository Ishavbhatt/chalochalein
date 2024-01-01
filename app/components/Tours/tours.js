import Image from "next/image";
import styles from "./tours.module.scss";
import { MdArrowOutward } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import ToursData from "../../data/tours-data";

const Tours = () => {
  // const ToursData = [
  //   {
  //     ImageSrc: "/images/destinations/destination2.jpg",
  //     tourName: "Andman",
  //     description:
  //       "Immerse yourself in nature's beauty on our thrilling treks.",
  //     title: "Powered Paragliding in Rishikesh",
  //     Duration: "2D/3N",
  //   },
  //   {
  //     ImageSrc: "/images/destinations/destination3.jpg",
  //     tourName: "Bali",
  //     description:
  //       "Immerse yourself in nature's beauty on our thrilling treks.",
  //     title: "Powered Paragliding in Rishikesh",
  //     Duration: "2D/3N",
  //   },
  //   {
  //     ImageSrc: "/images/destinations/destination4.jpg",
  //     tourName: "Dubai",
  //     description:
  //       "Immerse yourself in nature's beauty on our thrilling treks.",
  //     title: "Powered Paragliding in Rishikesh",
  //     Duration: "2D/3N",
  //   },
  //   {
  //     ImageSrc: "/images/destinations/destination6.jpg",
  //     tourName: "Hongkong",
  //     title: "Powered Paragliding in Rishikesh",
  //     description:
  //       "Immerse yourself in nature's beauty on our thrilling treks.",
  //     Duration: "2D/3N",
  //   },
  //   // {
  //   //   ImageSrc: "/images/destinations/destination7.jpg",

  //   //   destinationName: "India",
  //   //   description:
  //   //     "Immerse yourself in nature's beauty on our thrilling treks.",
  //   //   button: "More Details",
  //   // },
  //   // {
  //   //   ImageSrc: "/images/destinations/destination8.jpg",
  //   //   destinationName: "Ladakh",
  //   //   description:
  //   //     "Immerse yourself in nature's beauty on our thrilling treks.",
  //   //   button: "More Details",
  //   // },
  //   // {
  //   //   ImageSrc: "/images/destinations/destination4.jpg",
  //   //   destinationName: "Singapore",
  //   //   description:
  //   //     "Immerse yourself in nature's beauty on our thrilling treks.",
  //   //   button: "More Details",
  //   // },
  //   // {
  //   //   ImageSrc: "/images/destinations/downloadestination1.jpg",
  //   //   destinationName: "Srilanka",
  //   //   description:
  //   //     "Immerse yourself in nature's beauty on our thrilling treks.",
  //   //   button: "More Details",
  //   // },
  //   // {
  //   //   ImageSrc: "/images/destinations/destination9.jpg",
  //   //   destinationName: "Thailand",
  //   //   description:
  //   //     "Immerse yourself in nature's beauty on our thrilling treks.",
  //   //   button: "More Details",
  //   // },
  // ];
  return (
    <section className={styles.destination_section}>
      <div className="container">
        <div className={`${styles.destination_head} d_flex`}>
          <h1>Popular Tours</h1>
          <button className={styles.more_btn}>
            More <MdArrowOutward />
          </button>
        </div>
        <div className={styles.destinations_card}>
          {ToursData.map((tour) => {
            return (
              <div className={styles.single_tour}>
                <div className={styles.card_top}>
                  <div className={styles.card_image}>
                    <Image
                      className={styles.image}
                      src={tour.ImageSrc}
                      fill={true}
                      alt="Picture of the tour"
                    />
                  </div>
                  <div class={styles.tour_gradient}></div>

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
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Tours;
