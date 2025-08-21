import React from 'react';
import images from '../../theme/images';
import Header from '../Header';

const Home: React.FC = () => {
    return (
        <div>
            {/* Background Image */}
            <section className="h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${images.VhianneRoman})` }}>
                {/* Header */}
                <div className="absolute top-0 left-0 w-full">
                    <Header />
                </div>

                {/* Right Panel */}
                <div className="absolute top-0 right-0 h-full w-full md:w-1/2 flex items-center bg-black bg-opacity-80 text-white shadow-lg border-l-4 border-blue-500">
                    <div className="p-12 w-full">
                        <p className="text-3xl md:text-6xl font-semibold leading-none tracking-tighter font-serif">Vhianne Nicole Roman</p>
                        <p className="text-2xl md:text-4xl font-serif mt-4">Web Developer and Video Editor</p>

                        <div className="mt-10">
                            <a href="/about" className="bg-blue-500 text-black font-semibold py-2 px-6 rounded-md hover:bg-blue-600 transition">
                                LEARN MORE
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
