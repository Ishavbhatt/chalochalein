
import PageTopBanner from '../components/Banners/PageTopBanner'
import ContactUsComponent from '../components/ContactUsComponent/ContactUsComponent'
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
