
import PageTopBanner from '../components/Banners/PageTopBanner'
import ContactUsComponent from '../components/ContactUsComponent/ContactUsComponent'
export const metadata = {
    title: 'Check Taxi Prices in Dharamshala | Contact Us for Tour Packages',
    description: 'Looking for taxi prices in Dharamshala? Contact us to know about tour packages prices, adventure activities price, and sightseeing in Himachal Pradesh. Send your query now and explore the beauty of Himachal with us.',
  }
const page = () => {
    return (
        <>
            <PageTopBanner
                bannerImage={'/images/banners/about-banner.jpg'}
                title={'Contact Us'}
                subtitle={'Contact for Queries, Ready to Assist'}
            />
            <ContactUsComponent />
        </>
    )
}

export default page
