import React from 'react';
import images from '../../theme/images';
import Header from '../Header';

const Home: React.FC = () => {
    return (
        <div>
            <section className="h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${images.VhianneRoman})` }}>
                <div className="absolute top-0 left-0 w-full">
                    <Header />
                </div>
                <div className="container mx-auto flex items-center justify-end h-full">
                    <div className="max-w-lg p-8 bg-black bg-opacity-50 text-white relative">
                        <h1 className="text-4xl md:text-6xl font-semibold leading-none tracking-tighter font-serif">
                            Welcome to <br />
                            <span className="text-yellow-500">
                                Vhi's Portfolio, <br />
                            </span>{' '}
                            I am a Software Engineer.
                        </h1>
                        <br />
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4">
                                <a href="/about" className="bg-black text-white py-2 px-4 rounded-md transition duration-300 hover:bg-gray-800" style={{ width: '200px', textAlign: 'center' }}>
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
