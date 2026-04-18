import AnnouncementBar from "../components/AnnouncementBar"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import MarqueeBanner from "../components/MarqueeBanner"
import Collections from "../components/Collections"
import NewArrivals from "../components/NewArrivals"
import BrandStory from "../components/BrandStory"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
import ScrollIndicator from "../components/ScrollIndicator"
import FashionBackground from "../components/FashionBackground"

export default function Home() {
  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", position: "relative" }}>
      <FashionBackground />
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <Collections />
      <NewArrivals />
      <BrandStory />
      <Testimonials />
      <Footer />
      <ScrollIndicator />
    </div>
  )
}
