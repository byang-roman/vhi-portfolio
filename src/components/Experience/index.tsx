import React from 'react';

const experiences = [
    {
        year: '2024',
        role: 'Backend Developer',
        company: 'Trackerteer Web Developer Corporation',
        location: 'Onsite',
        date: 'April 2024 – Present',
        description: 'Built and maintained Backoffice and POS apps, ensuring integration, performance, and timely issue resolution.'
    },
    {
        year: '2022',
        role: 'Software Engineer',
        company: 'Hooli Software',
        location: 'Remote',
        date: 'July 2022 – February 2024',
        description: 'Enhanced front-end features, developed new functionalities, transitioned into backend work, and collaborated with clients to deliver reliable solutions.'
    },
    {
        year: '2022',
        role: 'Software Engineer Intern',
        company: 'Hooli Software',
        location: 'Remote',
        date: 'March 2022 – June 2022',
        description: 'Contributed to front-end development, gained real project experience, and converted to full-time through performance and initiative.'
    }
];

const Experience: React.FC = () => {
    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 text-gray-100 py-10 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center text-white tracking-wide">Work Experience</h2>

                <div className="relative w-full flex flex-col gap-10">
                    <div className="hidden md:block absolute left-10 top-0 bottom-0 w-1 bg-blue-400 rounded-full"></div>

                    {experiences.map((exp, i) => (
                        <div key={i} className="relative flex items-center gap-8">
                            <div className="hidden md:flex flex-shrink-0 w-20 h-20 rounded-full bg-blue-600 text-white font-bold shadow-lg ring-4 ring-blue-400 items-center justify-center z-10 translate-y-4">
                                <span className="text-xl font-sans">{exp.year}</span>
                            </div>

                            <div className="flex-1 p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl border border-blue-500 hover:border-blue-400 transition min-h-[200px] flex flex-col justify-center">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-2xl md:text-3xl font-sans font-bold text-blue-300 mb-2 tracking-wide">{exp.role.toUpperCase()}</p>
                                        <p className="text-lg md:text-xl font-sans font-medium text-gray-200 mb-1">{exp.company}</p>
                                        <p className="text-md italic font-light text-blue-400 mb-1">{exp.location.toUpperCase()}</p>
                                        <p className="text-sm font-light text-gray-400">{exp.date}</p>
                                    </div>

                                    <div className="flex items-center">
                                        <p className="text-lg md:text-xl leading-relaxed font-light text-gray-300">{exp.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
