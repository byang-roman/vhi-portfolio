import React from 'react';

const Experience: React.FC = () => {
    return (
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
                                <li className="text-lg md:text-xl leading-relaxed">Contributed significantly to the development of front-end features, gaining practical insights into the field.</li>
                                <li className="text-lg md:text-xl leading-relaxed">Successfully absorbed as a full-time based employee as I have shown dedication, passion and skills as an intern.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
