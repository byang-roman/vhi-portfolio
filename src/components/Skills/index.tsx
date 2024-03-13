import React from 'react';
import Header from '../Header';
import icons from '../../theme/icons';

interface SkillProps {
    icon: string;
    name: string;
    level: string;
}

const SkillItem: React.FC<SkillProps> = ({ icon, name, level }) => {
    return (
        <div className="flex flex-col items-center mr-8 mb-8">
            <img src={icon} alt={`${name} Icon`} className="w-20 h-20 mb-2" />
            <span className="text-lg font-bold mt-2">{name}</span>
            <div className="w-32 h-4 bg-gray-200 rounded-full">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${level}%` }} />
            </div>
        </div>
    );
};

const Skills: React.FC = () => {
    return (
        <div>
            <Header />
            <section className="bg-white text-blue-900 py-8 z-10">
                <div className="container mx-auto max-w-6xl px-6 py-8">
                    <h1 className="text-4xl font-semibold mb-4 font-serif">Skills</h1>
                    <div className="bg-gray-100 border border-gray-300 rounded-md p-6 mb-8">
                        <h2 className="text-xl font-bold mb-2">Frontend Development</h2>
                        <ul className="ml-6 mt-4 flex flex-wrap">
                            <SkillItem icon={icons.JavaScriptIcon} name="JavaScript" level="70" />
                            <SkillItem icon={icons.TypeScriptIcon} name="TypeScript" level="70" />
                            <SkillItem icon={icons.HTMLIcon} name="HTML" level="90" />
                            <SkillItem icon={icons.CSSIcon} name="CSS" level="60" />
                            <SkillItem icon={icons.ReactIcon} name="React" level="80" />
                            <SkillItem icon={icons.ReduxIcon} name="Redux" level="60" />
                            <SkillItem icon={icons.TailwindCssIcon} name="Tailwind CSS" level="70" />
                        </ul>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 rounded-md p-6 mb-8">
                        <h2 className="text-xl font-bold mt-4 mb-2">Backend Development</h2>
                        <ul className="ml-6 mt-4 flex flex-wrap">
                            <SkillItem icon={icons.SpringBootIcon} name="Spring Boot" level="60" />
                            <SkillItem icon={icons.MySQLIcon} name="MySQL" level="90" />
                            <SkillItem icon={icons.LiquibaseIcon} name="Liquibase" level="20" />
                            <SkillItem icon={icons.PythonIcon} name="Python" level="70" />
                        </ul>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 rounded-md p-6 mb-8">
                        <h2 className="text-xl font-bold mb-2">Mobile Development</h2>
                        <div className="flex flex-wrap">
                            <SkillItem icon={icons.JavaIcon} name="Java" level="20" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
