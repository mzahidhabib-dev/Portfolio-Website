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









// import laravel from '../assets/laravel.png'
// import react from '../assets/react.png'
// import tailwind from '../assets/tailwind.png'


// export default function Skills({ darkMode }) {

//     const skills = [
//         {
//             name: 'PHP', icon: laravel, level: 95,
//             color: 'from-orange-500 to-amber-500'
//         },
//         {
//             name: 'React', icon: react, level: 75,
//             color: 'from-cyan-500 to-blue-500'
//         },
//         {
//             name: 'Tailwind CSS', icon: tailwind, level: 75,
//             color: 'from-teal-500 to-cyan-500'
//         },
//         {
//             name: 'HTML', icon: tailwind, level: 75,
//             color: 'from-teal-500 to-cyan-500'
//         },
//         {
//             name: 'CSS', icon: tailwind, level: 75,
//             color: 'from-teal-500 to-cyan-500'
//         },
//         {
//             name: 'Node js', icon: tailwind, level: 75,
//             color: 'from-teal-500 to-cyan-500'
//         },
//         {
//             name: 'Laravel', icon: laravel, level: 95,
//             color: 'from-orange-500 to-amber-500'
//         },
//         {
//             name: 'javascript', icon: react, level: 75,
//             color: 'from-cyan-500 to-blue-500'
//         },
//         {
//             name: 'jquery', icon: react, level: 75,
//             color: 'from-cyan-500 to-blue-500'
//         },
//     ]

//     return (
//         <section id='skills'
//             style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
//             className='py-14 relative overflow-hidden'>
//             <div className='py-14 relative overflow-hidden'>
//                 <div className='container px-5 py-14 mx-auto'>
//                     <div className='text-center mb-20' data-aos='fade-up'>
//                         <h1 className='sm:text-4xl text-3xl font-bold title-font
//                         mb-4'
//                             style={{ color: darkMode ? 'white' : '#1f2973' }}>My <span style={{
//                                 background: 'linear-gradient(to right, #f97316, #f59e0b)',
//                                 WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'
//                             }}>
//                                 Skills
//                             </span>
//                         </h1>
//                         <p className='text-lg max-w-2xl mx-auto leading-relaxed'
//                             style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}>Lorem ipsum dolor sit amet consectetur,
//                             adipisicing elit. Quasi, quam dolor soluta
//                             suscipit sequi libero aliquid doloremque?
//                             Deleniti ipsam libero eaque quia eligendi
//                             culpa. Doloribus illo autem a! In, commodi.</p>
//                     </div>
//                     <div className='flex flex-wrap -m-4'
//                         data-aos='fade-up'
//                         data-aos-delay='200'>
//                         {skills.map((skill, index) => (
//                             <div key={index}
//                                 className='p-4 lg:2-1/4 md:w-1/2 w-full'
//                                 data-aos='fade-up'
//                                 data-aos-delay={`${300 + index * 100}`}>
//                                 <div style={{
//                                     background: darkMode ? 'linear-gradient(to bottom right, #1f2937, #111827)'
//                                         : 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
//                                     borderColor: darkMode ? '#374151' : '#e5e7eb'
//                                 }}
//                                     className='h-full p-6 rounded-2xl border hover:border-orange-500/50
//                                 transition-all duration-300 hover:-translate-y-2
//                                 group hover:shadow-[0_0_30px_rgb(255, 165, 0,0,0.15)]'>
//                                     <div className='flex items-center mb-6'>
//                                         <div style={{
//                                             background: darkMode ? 'linear-gradient(to bottom right, #374151, #1f2937)'
//                                                 : 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)',

//                                         }}
//                                             className='w-16 h-16 rounded-xl p-3 flex
//                                         items-center justify-center
//                                         group-hover:scale-110 transition-transform
//                                         duration-300'>
//                                             <img src={skill.icon} alt={skill.name}
//                                                 className='w-full h-full object-contain' />
//                                         </div>
//                                         <h3 className='text-xl font-bold
//                                         ml-4'
//                                             style={{
//                                                 color: darkMode ? 'white' : '#1f2937'
//                                             }}>{skill.name}</h3>
//                                     </div>
//                                     <div className='mb-2 flex justify-between items-center'>
//                                         <span className='font-medium'
//                                             style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>Proficiency</span>
//                                         <span
//                                             style={{
//                                                 background: 'linear-gradient(to right, #f97316, #f59e0b)',
//                                                 WebkitBackgroundClip: 'text',
//                                                 backgroundClip: 'text',
//                                                 color: 'transparent'
//                                             }} className='font-bold' >{skill.level}%</span>
//                                     </div>
//                                     <div className='w-full rounded-full h-3 overflow-hidden'
//                                         style={{
//                                             backgroundColor: darkMode ? '#374151' : '#e5e7eb'
//                                         }}>
//                                         <div className={`h-full rounded-full bg-linear-to-r
//                                             ${skill.color} transition-all duration-1000
//                                             ease-out`}
//                                             style={{ width: `${skill.level}%` }}>

//                                         </div>
//                                     </div>
//                                     <div className={`mt-6 pt-4 border-t
//                                         ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
//                                         <div className='h-1 rounded-full opacity-70 group-hover:w-full transition-all
//                                             duration-500 w-1/3'
//                                             style={{
//                                                 background: 'linear-gradient(to right, #f97316, #f59e0b)'
//                                             }}></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }
