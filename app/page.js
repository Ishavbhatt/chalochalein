import styles from './styles/pages/page.module.scss';
import HomeBanner from "./components/Banners/HomeBanner";
import MainTaxis from "./components/Taxis/MainTaxis";
import Whychooseus from "./components/Whychooseus/Whychooseus";
import destinationsData from "./Data/destinationsData";
import toursData from "./Data/toursData";
import DestinationCard from "./components/Cards/DestinationCard";
import Tours from "./components/Tours/tours";
import Loader from './components/Loader/Loader';
import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import BookTaxiBanner from './components/Banners/BookTaxiBanner';
import ToursPageCard from './components/Cards/ToursPageCard';
import Activities from './components/Activities/activities';
import Accordion from './components/Accordion/Accordion'
import BookCabBanner from './components/Banners/BookCabBanner';
export default function Home() {

  const homePageFaqs = [
    {
      question: 'What does "Chalo Chalein" mean?',
      answer: `"Chalo Chalein" is a Hindi phrase that translates to "Let's go" in English. It encapsulates the spirit of our travel agency, inviting you to embark on exciting journeys and adventures.`
    },
    {
      question: 'What services does Chalo Chalein offer?',
      answer: `Chalo Chalein provides a range of travel services, including taxi services for seamless transportation, curated tours for memorable experiences, adventurous trekking in the lap of nature, thrilling paragliding adventures, and immersive camping experiences.`
    },
    {
      question: 'Where does Chalo Chalein operate?',
      answer: `Our services extend across Himachal Pradesh, with a primary focus on popular destinations such as Dharamshala, Dalhousie, Manali, Shimla, Kinnaur, Kullu, Lahaul Spiti, as well as connectivity to Amritsar, Chandigarh, and Delhi.`
    },
    {
      question: 'How can I book a taxi with Chalo Chalein?      ',
      answer: `"Booking a taxi with Chalo Chalein is easy. Simply visit our website, choose your destination, select the type of taxi service you need, and follow the intuitive booking process. Alternatively, you can contact our customer support for assistance.`
    },
    {
      question: 'Are your drivers experienced and professional?',
      answer: `Yes, our drivers are seasoned professionals with extensive experience. They are not only skilled in safe navigation but also knowledgeable about the local attractions, ensuring you have a comfortable and enjoyable journey.`
    },
    {
      question: 'What safety measures are in place for trekking and paragliding activities?',
      answer: `Your safety is our priority. Our trekking and paragliding activities adhere to stringent safety protocols. We work with certified guides and instructors, use high-quality equipment, and conduct thorough safety briefings to ensure a secure and enjoyable experience.`
    },
    {
      question: 'Can Chalo Chalein customize tour packages?',
      answer: `Absolutely! We understand that every traveler has unique preferences. Chalo Chalein offers customizable tour packages to tailor your journey according to your interests, schedule, and group size. Contact us, and we'll create a personalized itinerary for you.      `
    },
    {
      question: 'What amenities are provided during camping trips?',
      answer: `Our camping trips are designed for comfort and adventure. We provide essential amenities such as tents, sleeping bags, and camping gear. Additionally, our camping experiences include bonfires, delicious meals, and activities to make your stay memorable.`
    },
  ];

  return (
    <main>
      <HomeBanner />
      <Whychooseus />
      <MainTaxis />

      <section className={`${styles.popular_destinations} common_margin`}>
        <div className="container">
          <div className="d_flex justify_content_between align_items_center">
            <div className="common_heading">
              <h4>Explore Our Premier Destinations</h4>
              <h5>Discover the Charms of Shimla, Manali, Dharamshala, and More</h5>
              <span></span>
            </div>
            <div>
              <Link href="/destinations" className='common_btn inline-block'>
                Explore More <HiOutlineArrowUpRight />
              </Link>
            </div>
          </div>
          <div className={styles.popular_destinations_cards}>
            {destinationsData && destinationsData.slice(0, 4).map((destination, index) => (
              <div className={styles.popular_destinations_card} key={index} >
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.activities_sec} common_margin`}>
        <div className="container">
          <div className="d_flex justify_content_between align_items_center">
            <div className="common_heading">
              <h4>Adventure Awaits</h4>
              <h5>Explore the Thrill of Our Popular Activities</h5>
              <span></span>
            </div>
            {/* <div>
              <Link href="/destinations" className='common_btn inline-block'>
                Explore More <HiOutlineArrowUpRight />
              </Link>
            </div> */}
          </div>
          <Activities />
        </div>
      </section>

      <section className={`${styles.popular_tours} common_margin`}>
        <div className="container">
          <div className="d_flex justify_content_between align_items_center">
            <div className="common_heading">
              <h4>Featured Tours for Unforgettable Adventures</h4>
              <h5>Embark on Exciting Journeys: Explore, Trek, and Discover</h5>
              <span></span>
            </div>
            <div>
              <Link href="/tours" className='common_btn inline-block'>
                View All Tours <HiOutlineArrowUpRight />
              </Link>
            </div>
          </div>
          <div className={styles.popular_tours_cards}>
            {toursData && toursData.slice(0, 4).map((tour, index) => (
              <div className={styles.popular_destinations_card} key={index} >
                <ToursPageCard tour={tour} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookTaxiBanner />

      <div className="common_margin">
        <div className='container-sm'>
          {homePageFaqs.map((faq, index) => (
            <Accordion key={index} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </div>
      </div>
      <BookCabBanner />
    </main>
  )
}
