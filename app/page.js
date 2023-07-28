import Navbar from '@/components/Navbar'
import styles from './page.module.css'
import HomeSection from '@/components/HomeSection'
import About from '@/components/About'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Portfolio from '@/components/Portfolio'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'

export default function Home() {
  return (
  <>
    <Navbar/>
      <main className={styles.main}>
        <HomeSection />
        <About/>
        <Portfolio />
        <Skills />
        <Services/>
        <Contact/>
      </main>
    <Footer/>
  </>)
}
