import { useState } from 'react';
import Hero from '../components/Hero';
import DemoShowroom from '../components/DemoShowroom';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  const [activeDemoId, setActiveDemoId] = useState('pos');
  const [prefilledSubject, setPrefilledSubject] = useState('');

  return (
    <main className="home">
      <Hero onSelectDemo={setActiveDemoId} />
      <DemoShowroom
        activeDemoId={activeDemoId}
        onSelectDemo={setActiveDemoId}
        onRequestQuote={setPrefilledSubject}
      />
      <Projects onLaunchDemo={setActiveDemoId} />
      <Experience />
      <Skills />
      <Education />
      <Contact key={prefilledSubject} prefilledSubject={prefilledSubject} />
      <Footer />
    </main>
  );
}

export default Home;
