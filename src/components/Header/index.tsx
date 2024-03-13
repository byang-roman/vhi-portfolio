import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <p className="text-3xl font-bold text-white border-b-2 border-black-800 pb-1">VHI'S PORTFOLIO</p>
                <nav className="mt-2">
                    <ul className="flex space-x-4">
                        <li>
                            <a href="/" className="hover:text-blue-200">
                                HOME
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-blue-200">
                                ABOUT
                            </a>
                        </li>
                        <li>
                            <a href="/projects" className="hover:text-blue-200">
                                PROJECTS
                            </a>
                        </li>
                        <li>
                            <a href="/skills" className="hover:text-blue-200">
                                SKILLS
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
