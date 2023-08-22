import './App.css';
import Card from './components/cards/Card.jsx';
import Footer from './components/footer/Footer';
import Header from './components/header/Header.jsx';
import HeroSection from './components/heroSection/HeroSection.jsx';
import Section from './components/section/Section';
import SectionFive from './components/sectionFive/SectionFive';
import SectionFour from './components/sectionFour/SectionFour';
import SectionOne from './components/sectionOne/SectionOne';
import SectionThree from './components/sectionThee/SectionThree';
import SectionTwo from './components/sectionTwo/SectionTwo';

function App() {
  return (
    <>  
    <Header />
    <HeroSection />
    <Card />
    <Section />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <Footer />
    


    </>
  );
}

export default App;
