import React from 'react';
import About from '../About';
import Projects from '../Projects';
import Skills from '../Skills';
import Home from '../Home';
import Education from '../Education';
import Experience from '../Experience';

const MainPage: React.FC = () => {
    return (
        <div>
            <section id="home">
                <Home />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="education">
                <Education />
            </section>

            <section id="experience">
                <Experience />
            </section>

            <section id="projects">
                <Projects />
            </section>

            <section id="skills">
                <Skills />
            </section>
        </div>
    );
};

export default MainPage;
