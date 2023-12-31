import { HomeBanner } from "./components/Banners/HomeBanner/HomeBanner";
import PageBanner from "./components/Banners/PageBanner/PageBanner";
import MainTaxis from "./components/MainTaxis/MainTaxis";
import Whychooseus from "./components/Whychooseus/Whychooseus";
import Tours from "./components/Tours/tours";
import AboutUs from "./styles/pages/About-Us/page";
export default function Home() {
  return (
    <main>
      {/* <HomeBanner />
      <Whychooseus />
      <PageBanner /> */}
      <MainTaxis />
      {/* <Tours /> */}
      <AboutUs />
    </main>
  )
}
