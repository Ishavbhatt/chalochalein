import Image from "next/image";
import styles from "./destination.module.scss";
const Destinations = () => {
  const DestinationsData = [
    {
      ImageSrc: "/images/destinations/destination2.jpg",
      destinationName: "Andman",
      description:
        "Immerse yourself in nature's beauty on our thrilling treks.",
      button: "More Details",
    },
    {
      ImageSrc: "/images/destinations/destination3.jpg",
      destinationName: "Bali",
      description:
        "Immerse yourself in nature's beauty on our thrilling treks.",
      button: "More Details",
    },
    {
      ImageSrc: "/images/destinations/destination4.jpg",
      destinationName: "Dubai",
      description:
        "Immerse yourself in nature's beauty on our thrilling treks.",
      button: "More Details",
    },
    {
      ImageSrc: "/images/destinations/destination6.jpg",
      destinationName: "Hongkong",
      description:"Immerse yourself in nature's beauty on our thrilling treks.",
      button: "More Details",
    },
    {
      ImageSrc: "/images/destinations/destination7.jpg",        

      destinationName: "India",
      description:
        "Immerse yourself in nature's beauty on our thrilling treks.",
      button: "More Details",
    },
    {
      ImageSrc: "/images/destinations/destination8.jpg",
      destinationName: "Ladakh",
      description:
        "Immerse yourself in nature's beauty on our thrilling treks.",
      button: "More Details",
    },
    {
      ImageSrc: "/images/destinations/destination4.jpg",
      destinationName: "Singapore",
      description:
        "Immerse yourself in nature's beauty on our thrilling treks.",
      button: "More Details",
    },
    {
      ImageSrc: "/images/destinations/downloadestination1.jpg",
      destinationName: "Srilanka",
      description:
        "Immerse yourself in nature's beauty on our thrilling treks.",
      button: "More Details",
    },
    {
      ImageSrc: "/images/destinations/destination9.jpg",
      destinationName: "Thailand",
      description:
        "Immerse yourself in nature's beauty on our thrilling treks.",
      button: "More Details",
    },
  ];
  return (
    <section className={styles.destination_section}>
      <div className="container">
       <h1>Popular Destinations</h1>
      <div className={styles.destinations_parent}>
      {DestinationsData.map((destination) => {
        return (
            <div className={styles.single_destonation}>
              <div className={styles.image_parent}>
                <Image
                  src={destination.ImageSrc}
                  fill={true}
                  alt="Picture of the destination"
                />
              </div>
              <div className={styles.btn_parent}>
              
              <h3>{destination.destinationName}</h3>
              <p>{destination.description}</p> 
              <button className="common_btn">{destination.button}</button>              
              </div>
              
            </div>
        );
      })}
      </div>

    </div>
    </section>
    
  );
};
export default Destinations;
