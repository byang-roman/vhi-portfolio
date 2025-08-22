import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-gray-900 text-gray-100 shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <p className="text-3xl font-bold tracking-wide text-blue-400">vhi</p>
                <nav>
                    <ul className="flex space-x-6 text-lg font-medium">
                        <li>
                            <a href="/" className="hover:text-blue-400">
                                HOME
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-blue-400">
                                ABOUT
                            </a>
                        </li>
                        <li>
                            <a href="/projects" className="hover:text-blue-400">
                                PROJECTS
                            </a>
                        </li>
                        <li>
                            <a href="/skills" className="hover:text-blue-400">
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
