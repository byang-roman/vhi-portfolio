import React from 'react';
import Header from '../Header';
import images from '../../theme/images';
import videos from '../../theme/videos.d';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
    const thesisProjects = [
        {
            title: 'School Website',
            description:
                'A web application built using PHP and MySQL, with roles for admin, guest, students, and teachers. It includes smooth navigation between sections like home, forum, files, and accounts. As an assistant programmer, I helped build a dynamic and user-friendly platform.',
            type: 'screenshot',
            media: images.Grade10SchoolWebsite
        },
        {
            title: 'Assistive App for Visually Impaired People (AAVI)',
            description:
                'AAVI is a user-friendly mobile app designed to assist visually impaired users with text-to-speech and real-time virtual box reading. It empowers users to navigate digital content seamlessly.',
            type: 'video',
            media: videos.AAVI
        }
    ];

    return (
        <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 min-h-screen">
            <Header />
            <section className="py-16 text-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.h1 className="text-5xl font-serif font-bold mb-12 text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        Projects
                    </motion.h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {thesisProjects.map((project, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                                <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col h-full border border-gray-200">
                                    <h2 className="text-2xl font-semibold mb-4 text-blue-800">{project.title}</h2>
                                    <p className="text-base text-gray-700 mb-6 flex-grow">{project.description}</p>

                                    {project.type === 'screenshot' ? (
                                        <img src={project.media} alt={project.title} className="w-full rounded-lg shadow-md object-cover" />
                                    ) : (
                                        <div className="flex justify-center">
                                            <ReactPlayer url={project.media} controls width="100%" height="240px" />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
