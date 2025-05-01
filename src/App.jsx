import NavBar from './components/NavBar';
import Hero from './sections/Hero';
import ShowcaseSection from './sections/ShowcaseSection';
import LogoSection from './sections/LogoSection';
import FeatureCards from './sections/FeatureCards';
import ExperienceSection from './sections/ExperienceSection';
import TechStack from './sections/TechStack';
import Contact from './sections/Contact';

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoSection />
            <FeatureCards />
            <ExperienceSection />
            <TechStack />
            <Contact />
        </>
    );
};

export default App;
