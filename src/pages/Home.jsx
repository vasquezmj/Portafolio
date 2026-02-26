import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
    return (
        <main className="home">
            <Hero />
            <Projects />
            <Skills />
            <Education />
            <Contact />
            <Footer />
        </main>
    );
}

export default Home;
