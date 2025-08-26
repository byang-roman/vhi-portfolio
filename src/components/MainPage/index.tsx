import React from 'react';
import About from '../About';
import Projects from '../Projects';
import Skills from '../Skills';
import Home from '../Home';

const MainPage: React.FC = () => {
    return (
        <div>
            <section id="home">
                <Home />
            </section>

            <section id="about">
                <About />
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
