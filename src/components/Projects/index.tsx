import React from 'react';
import Header from '../Header';
import images from '../../theme/images';
import videos from '../../theme/videos.d';
import ReactPlayer from 'react-player';

const Projects: React.FC = () => {
    const thesisProjects = [
        {
            title: 'Grade 10 School Website',
            description:
                'A web application was developed using PHP and MySQL, serving to user roles including admin, guest, students, and teachers. With navigation features, users can seamlessly access sections such as home, accounts, forum, files, profile, and logout. As an assistant programmer, I contributed to the development of this dynamic platform, ensuring smooth functionality and a user-friendly interface.',
            type: 'screenshot',
            media: images.Grade10SchoolWebsite
        },
        {
            title: 'Assistive App for Visually Impaired People (AAVI)',
            description:
                'AAVI is a user-friendly mobile app designed to assist individuals with visual impairments in navigating their digital environment effortlessly. It offers features such as text-to-speech functionality and a virtual box that reads text aloud in real-time. With AAVI, users can confidently engage with their devices, empowering them to access information and navigate their surroundings with ease.',
            type: 'video',
            media: videos.AAVI
        }
    ];

    return (
        <div>
            <Header />
            <section className="bg-white text-blue-900 py-8 z-10">
                <div className="container mx-auto max-w-6xl px-6 py-8">
                    <h1 className="text-4xl font-semibold mb-8 font-serif">Projects</h1>
                    {thesisProjects.map((project, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
                            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                            <p className="text-lg mb-4">{project.description}</p>
                            {project.type === 'screenshot' ? (
                                <img src={project.media} alt={project.title} className="w-full mb-4" style={{ maxWidth: '100%', height: 'auto' }} />
                            ) : (
                                <div className="flex justify-center">
                                    <ReactPlayer url={project.media} controls width="25%" height="25%" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
