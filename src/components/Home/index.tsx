import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="bg-gray-100 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
                    <p className="text-lg mb-8">
                        Hi, I'm <span className="font-bold">[Your Name]</span>, a passionate <span className="font-bold">[Your Role/Title]</span> with expertise in{' '}
                        <span className="font-bold">[Your Expertise]</span>.
                    </p>
                    <p className="text-lg mb-8">
                        I specialize in <span className="font-bold">[Your Specializations]</span>. With a strong background in <span className="font-bold">[Your Background]</span>, I strive to{' '}
                        <span className="font-bold">[Your Goal or Mission]</span>.
                    </p>
                    <p className="text-lg mb-8">Feel free to explore my projects, skills, and get in touch to discuss collaboration opportunities.</p>
                    <a href="#contact" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
