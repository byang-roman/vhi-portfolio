import React from 'react';
import Header from '../Header';
import images from '../../theme/images';

const About: React.FC = () => {
    return (
        <div>
            <Header />
            {/* About Me */}
            <section className="min-h-screen w-full py-20 bg-gradient-to-br from-black via-blue-950 to-blue-900">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 text-gray-100">
                    {/* Text Content */}
                    <div>
                        <h2 className="text-4xl font-serif font-semibold mb-6 relative inline-block text-white">
                            About VHI
                            <span className="absolute -bottom-2 left-0 w-48 h-1 bg-blue-500 rounded-full"></span>
                        </h2>

                        <p className="text-lg md:text-xl leading-relaxed mb-4 text-gray-300 text-justify">
                            I built a foundation in programming early on and strengthened it through college, working on practical projects that shaped my approach to development. I prioritize writing
                            clean, maintainable code and delivering fast, modern applications. By staying adaptable to new technologies, I ensure the solutions I create are efficient, scalable, and
                            future-ready.
                        </p>

                        {/* Connect Section */}
                        <div className="flex flex-wrap gap-4 mt-6">
                            <a href="mailto:youremail@example.com" className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition flex items-center gap-2">
                                Contact Me
                            </a>
                            <a
                                href="https://github.com/yourprofile"
                                target="_blank"
                                className="px-5 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-900 transition flex items-center gap-2"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/yourprofile"
                                target="_blank"
                                className="px-5 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-900 transition flex items-center gap-2"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center md:justify-end">
                        <img src={images.VhiSolo} alt="Vhianne Nicole Roman" className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl border-2 border-blue-500" />
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="h-screen bg-blue-300 text-blue-900 py-8 z-10">
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

            {/* Work Experience */}
            <section className="h-screen bg-blue-100 text-blue-900 py-8 z-10 font-serif">
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
