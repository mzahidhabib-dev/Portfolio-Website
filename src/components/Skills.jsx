import reactIcon from '../assets/react.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import node from '../assets/nodejs-2.svg'
import php from '../assets/php.png'
import laravel from '../assets/laravel.png'
import sql from '../assets/sql.png'
import mongo from '../assets/mongo.png'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {
    useEffect(() => {
        AOS.init({ once: true, duration: 600 });
    }, []);

    const skills = [
        { name: 'HTML', icon: html, years: 2 },
        { name: 'CSS', icon: css, years: 2 },
        { name: 'Bootstrap', icon: bootstrap, years: 2 },
        { name: 'Tailwind CSS', icon: tailwind, years: 2 },
        { name: 'JavaScript', icon: js, years: 2 },
        { name: 'React.js', icon: react, years: 2 },
        { name: 'Node.js', icon: node, years: 3 },
        { name: 'PHP', icon: php, years: 2 },
        { name: 'Laravel', icon: laravel, years: 2 },
        { name: 'SQL', icon: sql, years: 3 },
        { name: 'MongoDB', icon: mongo, years: 2 },
        { name: 'AJAX / jQuery', icon: js, years: 1 },
    ];

    const maxUnits = 5;

    return (
        <section
            id="skills"
            className="py-20 bg-[#F8FAFC] dark:bg-[#0F172A] relative px-6 sm:px-8"
        >
            <div className="container mx-auto">
                {/* Heading */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-[#0F172A] dark:text-[#E5E7EB]">
                        My <span className="text-[#2563EB] dark:text-[#60A5FA]">Skills</span>
                    </h2>
                    <p className="text-[#475569] dark:text-[#CBD5F5] max-w-2xl mx-auto text-lg">
                        I focus on building reliable, maintainable applications across the full stack.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group relative rounded-2xl border border-[#E2E8F0] dark:border-[#1E293B]
             bg-white/60 dark:bg-[#020617]/60 backdrop-blur-sm
             p-6
             transform transition duration-700 ease-in-out
             hover:scale-105 hover:-translate-y-1 hover:shadow-2xl dark:hover:shadow-2xl"
                        >
                            {/* Icon + Title */}
                            <div className="flex items-center mb-5">
                                <div className="w-16 h-16 rounded-xl p-3 flex items-center justify-center
                    bg-[#F1F5F9]/70 dark:bg-[#1E293B]/70
                    transform transition duration-500 ease-in-out
                    group-hover:scale-110">
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h3 className="ml-4 text-lg font-bold text-[#0F172A] dark:text-[#E5E7EB]">
                                    {skill.name}
                                </h3>
                            </div>


                            {/* Years Bars */}
                            <div className="flex gap-1 mb-3">
                                {Array.from({ length: maxUnits }).map((_, i) => (
                                    <span
                                        key={i}
                                        className={`h-2 flex-1 rounded-full transition-colors duration-300
                                        ${i < skill.years
                                                ? 'bg-[#2563EB] dark:bg-[#60A5FA]'
                                                : 'bg-[#E2E8F0] dark:bg-[#1E293B]'}`}
                                    />
                                ))}
                            </div>

                            {/* Years text */}
                            <p className="text-sm font-medium text-[#64748B] dark:text-[#94A3B8]">
                                {skill.years} {skill.years > 1 ? 'Years' : 'Year'} Experience
                            </p>

                            {/* Accent line */}
                            <div className="mt-6 pt-4 border-t border-[#E2E8F0] dark:border-[#1E293B]">
                                <div className="h-1 w-1/3 rounded-full bg-[#2563EB] dark:bg-[#60A5FA] opacity-80
                                                transition-all duration-500 ease-out group-hover:w-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}








