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
        </div>
    );
};

export default About;
