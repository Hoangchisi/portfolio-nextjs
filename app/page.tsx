import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import WeatherWidget from './components/WeatherWidget'
import CurrencyDisplay from './components/CurrecyDisplay'
export default function Home() {
  return (
    <>
    <script src="https://kit.fontawesome.com/db53215521.js" crossOrigin="anonymous"></script>
      <Header />
      <About />
      <Services />
      <Projects />
      <Contact />
      <div className="api_list">
        <WeatherWidget />
        <CurrencyDisplay />
      </div>
    </>
  );
}
