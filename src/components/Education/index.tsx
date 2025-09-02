import React from 'react';

const Education: React.FC = () => {
    return (
        <section className="min-h-screen w-full relative py-10 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-gray-100 overflow-hidden">
            <div className="w-full relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center text-white">Education</h2>

                {/* EDUCATION - DIAGONAL TIMELINE */}
                <div className="hidden md:block relative w-full min-h-[80vh]">
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full"></div>
                    {/* JUNIOR HIGH */}
                    <div className="absolute bottom-[10%] left-[5%] w-[600px] flex items-start gap-6 group">
                        <div className="flex-shrink-0 w-24 h-24 rounded-full bg-blue-600 text-white font-bold shadow-lg ring-4 ring-blue-400 relative flex items-center justify-center">
                            <span className="absolute inset-0 flex items-center justify-center text-2xl text-center">2016</span>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/20 backdrop-blur-md shadow-2xl border border-blue-500 group-hover:border-blue-400">
                            <p className="text-2xl font-semibold text-blue-300">Claro M. Recto Information and Communication Technology High School</p>
                            <p className="text-gray-200 mt-2">Junior High</p>
                            <p className="text-sm italic text-blue-400 mt-2">High School Diploma</p>
                        </div>
                    </div>

                    {/* SENIOR HIGH SCHOOL */}
                    <div className="absolute bottom-[45%] left-[35%] w-[600px] flex items-start gap-6 group">
                        <div className="flex-shrink-0 w-24 h-24 rounded-full bg-purple-600 text-white font-bold shadow-lg ring-4 ring-purple-400 relative flex items-center justify-center">
                            <span className="absolute inset-0 flex items-center justify-center text-2xl text-center">2018</span>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/20 backdrop-blur-md shadow-2xl border border-purple-500 group-hover:border-purple-400 ">
                            <p className="text-2xl font-semibold text-purple-300">Angeles City Science High School</p>
                            <p className="text-gray-200 mt-2">Senior High</p>
                            <p className="text-sm italic text-purple-400 mt-2">With Honors</p>
                        </div>
                    </div>

                    {/* COLLEGE */}
                    <div className="absolute top-[5%] left-[62%] w-[1000px] flex items-start gap-6 group">
                        <div className="flex-shrink-0 w-24 h-24 rounded-full bg-green-600 text-white font-bold shadow-lg ring-4 ring-green-400 relative flex items-center justify-center">
                            <span className="absolute inset-0 flex items-center justify-center text-2xl text-center">2022</span>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/20 backdrop-blur-md shadow-2xl border border-green-500 group-hover:border-green-400">
                            <p className="text-2xl font-semibold text-green-300">City College of Angeles</p>
                            <p className="text-gray-200 mt-2">College - Bachelor of Science in Computer Science</p>
                            <p className="text-sm italic text-green-400 mt-2">Magna Cum Laude</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
