import { HomeBanner } from "./components/Banners/HomeBanner/HomeBanner";
import PageBanner from "./components/Banners/PageBanner/PageBanner";
import MainTaxis from "./components/MainTaxis/MainTaxis";
import Whychooseus from "./components/Whychooseus/Whychooseus";
import Destinations from "./components/Destinations/destination";
export default function Home() {
  return (
    <main>
      <HomeBanner />
      <h2>fsdfasdfsad</h2>
      <p>fasdfasdfsdfdsa</p>
      <Whychooseus />
      <PageBanner />
      {/* <MainTaxis /> */}
      <Destinations />
    </main>
  )
}
