import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import chat from '../assets/chat.jpg'
import cms from '../assets/cms.jpg'
import admin from '../assets/admin.jpg'
import portfolio from '../assets/portfolio.jpg'

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: 'Chat Application',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: chat,
            tags: [ 'Node.js', 'Express.js', 'Websocket',]
        },
        {
            id: 2,
            title: 'Website CMS',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: cms,
            tags: [ 'Node.js', 'Express.js', 'MySQL', 'React',]
        },
        {
            id: 3,
            title: 'Admin Penal',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: admin,
            tags: [ 'Node.js', 'Express.js', 'MySQL', 'React']
        },
        {
            id: 4,
            title: 'Portfolio Website',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: portfolio,
            tags: ['React', 'Node.js', 'MongoDB']
        },
        {
            id: 5,
            title: 'E-commerce Platform',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: cms,
            tags: ['React', 'Node.js', 'MongoDB']
        },
        {
            id: 6,
            title: 'Managers Penal',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: admin,
            tags: ['React', 'Node.js', 'MongoDB']
        },
    ]

    return (
        <section
            id='projects'
            className="bg-[#F8FAFC] dark:bg-[#0F172A] relative py-24 px-6 sm:px-8"
        >
            <div className='container mx-auto'>
                {/* Heading */}
                <div className='text-center mb-12' data-aos='fade-up'>
                    <h2 className='text-3xl sm:text-4xl font-bold mb-3 text-[#0F172A] dark:text-[#E5E7EB]'>
                        My <span className='text-[#2563EB] dark:text-[#60A5FA]'>Projects</span>
                    </h2>
                    <p className='text-[#475569] dark:text-[#CBD5F5] max-w-xl mx-auto'>
                        Some of the projects where I turn ideas into real applications.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mb-12'>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            data-aos='fade-up'
                            data-aos-delay={index * 150}
                            className="group rounded-xl border border-[#E2E8F0] dark:border-[#1E293B] 
                                       bg-white/60 dark:bg-[#020617]/60 backdrop-blur-sm 
                                       shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            {/* Image */}
                            <div className='overflow-hidden rounded-t-xl h-48 sm:h-56 md:h-60 lg:h-64'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                                />
                            </div>

                            {/* Content */}
                            <div className='p-4'>
                                <h3 className='text-[#0F172A] dark:text-[#E5E7EB] text-lg font-bold mb-2'>
                                    {project.title}
                                </h3>
                                <p className='text-[#475569] dark:text-[#CBD5F5] text-sm mb-3'>
                                    {project.desc}
                                </p>

                                {/* Tags */}
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.tags.map((tag, id) => (
                                        <span
                                            key={id}
                                            className="px-2 py-1 text-xs rounded-full bg-[#F1F5F9] dark:bg-[#1E293B] text-[#64748B] dark:text-[#94A3B8] transition-colors duration-200 hover:bg-[#E2E8F0] dark:hover:bg-[#2C3E50]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className='flex gap-2'>
                                    {/* Code Button */}
                                    <a
                                        href=''
                                        className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg bg-[#F1F5F9] dark:bg-[#1E293B] text-[#0F172A] dark:text-[#E5E7EB] font-semibold hover:scale-[1.03] hover:shadow-lg transition-all duration-300'
                                        data-aos='zoom-in'
                                        data-aos-delay='300'
                                    >
                                        <FaGithub className='text-sm' />
                                        <span>Code</span>
                                    </a>

                                    {/* Demo Button */}
                                    <a
                                        href=''
                                        className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg bg-[#2563EB] dark:bg-[#60A5FA] text-white dark:text-[#020617] font-semibold hover:scale-[1.03] hover:shadow-lg transition-all duration-300'
                                        data-aos='zoom-in'
                                        data-aos-delay='400'
                                    >
                                        <span>Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Projects */}
                <div className='text-center mt-10'>
                    <a
                        href='#'
                        className='inline-flex items-center font-semibold gap-2 px-7 py-4 text-white dark:text-[#020617] rounded-full bg-[#2563EB] dark:bg-[#60A5FA] hover:scale-[1.03] hover:shadow-lg transition-all duration-300'
                        data-aos='zoom-in'
                        data-aos-delay='400'
                    >
                        <FaGithub />
                        <span>View All Projects</span>
                        <FaExternalLinkAlt className='text-sm' />
                    </a>
                </div>
            </div>
        </section>
    )
}




