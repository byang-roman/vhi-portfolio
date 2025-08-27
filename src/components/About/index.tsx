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
                            <a href="https://www.facebook.com/vhiannenicole.roman" className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition flex items-center gap-2">
                                Facebook
                            </a>
                            <a
                                href="https://github.com/byang-roman"
                                target="_blank"
                                className="px-5 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-900 transition flex items-center gap-2"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/vhianne-nicole-roman-15b1942b3"
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

            <section className="min-h-screen w-full py-20 bg-blue-100 text-gray-900">
                <div className="container mx-auto max-w-3xl px-6">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center relative inline-block text-blue-900">Education</h2>

                    {/* Timeline */}
                    <div className="relative pl-10">
                        {/* Vertical line */}
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-300" />

                        <div className="space-y-12">
                            {/* 2022 - College */}
                            <div className="relative">
                                <div className="absolute left-0 top-2 w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold shadow-md">2022</div>
                                <div className="ml-16 p-5 rounded-xl bg-green-50 border-l-4 border-green-600">
                                    <p className="text-lg font-semibold text-green-800">City College of Angeles</p>
                                    <p className="text-gray-700">BS Computer Science</p>
                                    <p className="text-sm italic text-green-600 mt-1">Magna Cum Laude</p>
                                </div>
                            </div>

                            {/* 2018 - Senior */}
                            <div className="relative">
                                <div className="absolute left-0 top-2 w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center text-sm font-bold shadow-md">2018</div>
                                <div className="ml-16 p-5 rounded-xl bg-violet-50 border-l-4 border-violet-600">
                                    <p className="text-lg font-semibold text-violet-800">Angeles City Science High School</p>
                                    <p className="text-gray-700">Senior High</p>
                                    <p className="text-sm italic text-violet-600 mt-1">With Honors</p>
                                </div>
                            </div>

                            {/* 2016 - Junior */}
                            <div className="relative">
                                <div className="absolute left-0 top-2 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-md">2016</div>
                                <div className="ml-16 p-5 rounded-xl bg-blue-50 border-l-4 border-blue-600">
                                    <p className="text-lg font-semibold text-blue-800">Claro M. Recto ICT High School</p>
                                    <p className="text-gray-700">Junior High</p>
                                    <p className="text-sm italic text-blue-600 mt-1">High School Diploma</p>
                                </div>
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
