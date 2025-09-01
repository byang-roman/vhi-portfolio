import React from 'react';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
    const navLinks = [
        { name: 'HOME', id: 'home' },
        { name: 'ABOUT', id: 'about' },
        { name: 'EDUCATION', id: 'education' },
        { name: 'WORK EXPERIENCE', id: 'experience' },
        { name: 'PROJECTS', id: 'projects' },
        { name: 'SKILLS', id: 'skills' }
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-gray-900 text-gray-100 shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <p className="text-3xl font-bold tracking-wide text-blue-400">vhi</p>
                <nav>
                    <ul className="flex space-x-6 text-lg font-medium">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <Link
                                    to={link.id}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-70}
                                    activeClass="text-blue-400 font-bold underline decoration-blue-400 underline-offset-4"
                                    className="hover:text-blue-400 cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
