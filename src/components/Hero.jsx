import CV from '../assets/CV.pdf'
import hero from '../assets/hero.png'
import hi from '../assets/hi.png'
import { DownloadIcon, Mail } from 'lucide-react'

export default function Hero() {
    return (
        <div className="py-12 relative overflow-hidden min-h-screen flex flex-col
                    bg-[#F8FAFC] dark:bg-[#0F172A]">
            <section
                id="home"
                data-aos="fade-up"
                data-aos-delay="250"
                className="body-font z-10"
            >
                <div
                    className="container mx-auto flex px-4 sm:px-8 lg:px-14
                     py-12 lg:py-12 flex-col lg:flex-row
                     items-center justify-between
                     lg:mt-14 mt-14"
                >
                    {/* LEFT CONTENT */}
                    <div
                        className="lg:w-1/2 w-full flex flex-col items-center
                       lg:items-start text-center lg:text-left
                       mb-12 lg:mb-0"
                    >
                        <h1
                            className="title-font text-3xl sm:text-4xl lg:text-5xl
                         mb-4 font-bold
                         text-[#0F172A] dark:text-[#E5E7EB]"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            Hi, I&apos;m M Zahid Habib
                        </h1>

                        <p
                            className="mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg
                         text-[#475569] dark:text-[#CBD5F5]"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            I build reliable, performance-focused web applications with a strong
                            emphasis on clean architecture, maintainable code, and thoughtful
                            user experiences across the full stack.
                        </p>

                        {/* BUTTONS */}
                        <div className="w-full pt-4 sm:pt-6">
                            <div
                                className="flex flex-col sm:flex-row justify-center
                           lg:justify-start gap-3 sm:gap-4"
                                data-aos="fade-up"
                                data-aos-delay="700"
                            >
                                <a href={CV} download className="w-full sm:w-auto">
                                    <button
                                        className="w-full sm:w-auto inline-flex items-center justify-center
                               bg-[#2563EB] dark:bg-[#60A5FA]
                               text-white dark:text-[#020617]
                               py-3 px-6 sm:px-8 rounded-full
                               text-base sm:text-lg font-semibold
                               transition-all duration-300"
                                    >
                                        <DownloadIcon className="w-4 h-4 sm:h-5 sm:w-5 mr-2" />
                                        Download CV
                                    </button>
                                </a>

                                <a href="#contact" className="w-full sm:w-auto">
                                    <button
                                        className="w-full sm:w-auto inline-flex items-center justify-center
                               border-2 border-[#2563EB] dark:border-[#60A5FA]
                               text-[#0F172A] dark:text-[#E5E7EB]
                               hover:bg-[#2563EB] dark:hover:bg-[#60A5FA]
                               hover:text-white dark:hover:text-[#020617]
                               py-3 px-6 sm:px-8 rounded-full
                               text-base sm:text-lg font-semibold
                               transition-all duration-300"
                                    >
                                        <Mail className="w-4 h-4 sm:h-5 sm:w-5 mr-2" />
                                        Contact Me
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE CONTAINER */}
                    <div
                        className="lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center"
                        data-aos="fade-left"
                        data-aos-delay="400"
                    >
                        {/* w-4/5 for mobile (sm)
      md:w-full to keep it large on tablets and desktops
  */}
                        <div className="relative w-4/5 md:w-full max-w-md lg:max-w-lg">
                            <div className="relative overflow-hidden">
                                <img
                                    src={hero}
                                    alt="Hero"
                                    className="w-full h-auto object-cover
                   transform hover:scale-105
                   transition-transform duration-500"
                                />
                            </div>

                            {/* HI ICON - Positioned relative to the mouth area */}
                            <img
                                src={hi}
                                alt="Hi icon"
                                className="absolute 
                 top-[12%] 
                 left-[36%] 
                 w-10 h-10 
                 sm:w-16 sm:h-16 
                 lg:w-20 lg:h-20 
                 object-contain 
                 animate-bounce 
                 opacity-90 
                 z-10
                 pointer-events-none"
                            />
                        </div>
                    </div>
                </div>

                {/* DECORATIVE BLUR */}
                <div
                    className="absolute -top-20 -left-20 w-40 h-40
                     bg-[#2563EB]/20 dark:bg-[#60A5FA]/10
                     mix-blend-multiply filter blur-3xl
                     animate-pulse delay-1000 hidden sm:block"
                />
            </section>
        </div>
    )
}






