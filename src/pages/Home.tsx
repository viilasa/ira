import { useEffect } from 'react'
import Hamburger from '../components/layout/Hamburger'
import Footer from '../components/layout/Footer'
import Hero from '../components/home/Hero'
import Overview from '../components/home/Overview'
import Residences from '../components/home/Residences'
import Amenities from '../components/home/Amenities'
import Location from '../components/home/Location'
import UpcomingProjects from '../components/home/UpcomingProjects'
import ContactFormSection from '../components/shared/ContactFormSection'
import SectionIndicator from '../components/home/SectionIndicator'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Home() {
  useScrollReveal()

  useEffect(() => {
    document.title = 'IRA Estates — Luxury Private Pool Villas in South Goa'
  }, [])

  return (
    <>
      <Hamburger />
      <SectionIndicator />
      <main>
        <Hero />
        <Overview />
        <Residences />
        <div className="home-continuous-bg">
          <Amenities />
          <Location />
        </div>
        <UpcomingProjects />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  )
}
