import React from 'react';

const Education: React.FC = () => {
    return (
        <section className="min-h-screen w-full py-20 bg-blue-100 text-gray-900">
            <div className="max-w-[95%] mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-20 text-center text-blue-900">Education</h2>

                {/* Diagonal Layout */}
                <div className="hidden md:block relative w-full h-[700px]">
                    {/* Step 1 - Bottom Left */}
                    <div className="absolute bottom-0 left-[3%] w-[650px] flex items-start gap-6">
                        <div className="flex-shrink-0 w-20 h-20 rounded-full bg-blue-600 text-white text-xl font-bold flex items-center justify-center shadow-md">2016</div>
                        <div className="p-8 rounded-2xl bg-white shadow-xl border-l-[8px] border-blue-600 w-full">
                            <p className="text-2xl font-semibold text-blue-800">Claro M. Recto ICT High School</p>
                            <p className="text-gray-700 mt-2">Junior High</p>
                            <p className="text-sm italic text-blue-600 mt-2">High School Diploma</p>
                        </div>
                    </div>

                    {/* Step 2 - Middle */}
                    <div className="absolute bottom-[38%] left-[30%] w-[650px] flex items-start gap-6">
                        <div className="flex-shrink-0 w-20 h-20 rounded-full bg-violet-600 text-white text-xl font-bold flex items-center justify-center shadow-md">2018</div>
                        <div className="p-8 rounded-2xl bg-white shadow-xl border-l-[8px] border-violet-600 w-full">
                            <p className="text-2xl font-semibold text-violet-800">Angeles City Science High School</p>
                            <p className="text-gray-700 mt-2">Senior High</p>
                            <p className="text-sm italic text-violet-600 mt-2">With Honors</p>
                        </div>
                    </div>

                    {/* Step 3 - Top Right */}
                    <div className="absolute top-0 right-[3%] w-[650px] flex items-start gap-6">
                        <div className="flex-shrink-0 w-20 h-20 rounded-full bg-green-600 text-white text-xl font-bold flex items-center justify-center shadow-md">2022</div>
                        <div className="p-8 rounded-2xl bg-white shadow-xl border-l-[8px] border-green-600 w-full">
                            <p className="text-2xl font-semibold text-green-800">City College of Angeles</p>
                            <p className="text-gray-700 mt-2">BS Computer Science</p>
                            <p className="text-sm italic text-green-600 mt-2">Magna Cum Laude</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
