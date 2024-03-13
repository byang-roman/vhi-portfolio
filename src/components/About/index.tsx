import React from 'react';
import Header from '../Header';

const About: React.FC = () => {
    return (
        <div>
            <Header />
            <section className="bg-blue-100 text-blue-900 py-8 z-10 font-serif">
                <div className="container mx-auto flex flex-col md:flex-row items-center max-w-6xl px-6 py-8">
                    <div className="w-full py-8">
                        <h1 className="text-4xl md:text-5xl font-semibold mb-4">About Me</h1>

                        <p className="text-lg md:text-xl leading-relaxed mb-4">I started programming in Junior High and found my passion. That's where I began learning the basics of coding.</p>
                        <p className="text-lg md:text-xl leading-relaxed mb-4">
                            In college, I drew inspiration from my Junior High programming experiences. It was a way to showcase what I had learned and built upon since then.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed mb-4">
                            Since then, I've been advancing my programming skills, always seeking new challenges. My experiences in Junior High and college have deeply shaped my passion for
                            programming and pursuit of excellence.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-blue-300 text-blue-900 py-8 z-10">
                <div className="container mx-auto flex flex-col md:flex-row items-center max-w-9xl px-6 py-8">
                    <div className="w-full py-8">
                        <h2 className="text-3xl md:text-4xl font-semibold mt-8 mb-4 font-serif">Education</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-4xl font-semibold mb-2">2022</h2>
                                <h4 className="text-2xl font-semibold mb-2">CITY COLLEGE OF ANGELES</h4>
                                <p className="text-lg leading-relaxed">Bachelor of Science in Computer Science</p>
                                <p className="text-lg leading-relaxed">Magna Cum Laude Graduate</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-4xl font-semibold mb-2">2018</h2>
                                <h4 className="text-lg font-semibold mb-2">
                                    ANGELES CITY SCIENCE HIGH SCHOOL <br />
                                    (SENIOR HIGH)
                                </h4>
                                <p className="text-lg leading-relaxed">Graduate with Honors</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-4xl font-semibold mb-2">2016</h2>
                                <h4 className="text-xl font-semibold mb-2">CLARO M. RECTO INFORMATION AND COMMUNICATION TECHNOLOGY HIGH SCHOOL (JUNIOR HIGH)</h4>
                                <p className="text-lg leading-relaxed">High School Diploma</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-blue-100 text-blue-900 py-8 z-10 font-serif">
                <div className="container mx-auto flex flex-col md:flex-row items-center max-w-6xl px-6 py-8">
                    <div className="w-full py-8">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Work Experience</h2>
                        <div className="mt-4">
                            <div className="bg-white p-6 rounded-lg shadow-md border mb-4">
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">Software Engineer</h3>
                                <p className="text-lg md:text-xl leading-relaxed mb-2">July 2022 - February 2024</p>
                                <ul className="list-disc pl-4 mt-2">
                                    <li className="text-lg md:text-xl leading-relaxed">Developed and enhanced front-end features to optimize user experience.</li>
                                    <li className="text-lg md:text-xl leading-relaxed">Specialized in creating new features and also played a key role in upgrading existing features.</li>
                                    <li className="text-lg md:text-xl leading-relaxed">Accepted the change of role and transitioned to backend team to further hone my programming skills.</li>
                                    <li className="text-lg md:text-xl leading-relaxed">
                                        Proactively addressed client issues and concerns. Maintaining a high responsiveness rate, and always making sure that features, functionalities, amendments are
                                        implemented on time through effective teamwork and collaboration.
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md border">
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">Software Engineer Intern</h3>
                                <p className="text-lg md:text-xl leading-relaxed mb-2">March 2022 – June 2022</p>
                                <ul className="list-disc pl-4 mt-2">
                                    <li className="text-lg md:text-xl leading-relaxed">Acquired hands-on experience of what it is to be a software engineer during the internship period.</li>
                                    <li className="text-lg md:text-xl leading-relaxed">
                                        Contributed significantly to the development of front-end features, gaining practical insights into the field.
                                    </li>
                                    <li className="text-lg md:text-xl leading-relaxed">
                                        Successfully absorbed as a full-time based employee as I have shown dedication, passion and skills as an intern.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
