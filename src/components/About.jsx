import about from '../assets/about.png'

export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen overflow-hidden flex items-center justify-center
                       px-4 sm:px-6
                       bg-[#F8FAFC] dark:bg-[#0F172A]"
        >
            <div
                className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2
                           gap-8 sm:gap-12 items-center"
            >
                {/* IMAGE SIDE */}
               <figure className="flex justify-center relative order-2 lg:order-1" data-aos="fade-up" data-aos-delay="300">
  <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-96 lg:h-96">
    
    {/* Star */}
    <div className="absolute -inset-6 md:-inset-12 lg:-inset-12
                    bg-[#2563EB]/10 dark:bg-[#60A5FA]/10
                    rotate-6 star-shape z-0
                    transition-transform duration-700 ease-in-out
                    hover:rotate-12"
         data-aos="zoom-in"
         data-aos-delay="450"
    />

    {/* Image Container */}
    <div className="relative overflow-hidden w-full h-full rounded-xl">
      <img
        src={about}
        alt="About"
        className="w-full h-full object-cover
                   transform hover:scale-105
                   transition-transform duration-500"
        data-aos="zoom-in"
        data-aos-delay="500"
      />
    </div>

  </div>
</figure>


                {/* CONTENT SIDE */}
                <article
                    data-aos="fade-left"
                    data-aos-delay="300"
                    className="text-center lg:text-left relative
                               order-1 lg:order-2"
                >
                    <header className="mb-4 sm:mb-6">
                        <h2
                            className="text-3xl sm:text-4xl lg:text-5xl
                                       font-bold
                                       text-[#0F172A] dark:text-[#E5E7EB]"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            About Me
                        </h2>
                    </header>

                    <p
                        className="text-sm sm:text-base lg:text-lg
                                   leading-relaxed
                                   mb-6 sm:mb-8
                                   text-[#475569] dark:text-[#CBD5F5]"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                       I’m a full-stack developer focused on building reliable, performance-driven 
                       web applications with clean architecture and long-term maintainability in 
                       mind. I care deeply about code quality, thoughtful UI decisions, and creating
                        user experiences that feel intuitive rather than forced. I enjoy working 
                        across the stack, turning complex requirements into scalable, 
                        well-structured solutions.
                    </p>

                    {/* STATS */}
                    <div
                        className="flex flex-wrap justify-center lg:justify-start
                                   gap-6 sm:gap-8 mb-6 sm:mb-8"
                    >
                        <div
                            className="text-center"
                            data-aos="zoom-in"
                            data-aos-delay="600"
                        >
                            <div className="text-2xl sm:text-3xl lg:text-4xl
                                            font-bold
                                            text-[#2563EB] dark:text-[#60A5FA]">
                                5+
                            </div>
                            <div className="text-xs sm:text-sm lg:text-base
                                            text-[#64748B] dark:text-[#94A3B8]">
                                Education
                            </div>
                        </div>

                        <div
                            className="text-center"
                            data-aos="zoom-in"
                            data-aos-delay="650"
                        >
                            <div className="text-2xl sm:text-3xl lg:text-4xl
                                            font-bold
                                            text-[#2563EB] dark:text-[#60A5FA]">
                                3+
                            </div>
                            <div className="text-xs sm:text-sm lg:text-base
                                            text-[#64748B] dark:text-[#94A3B8]">
                                Years Experience
                            </div>
                        </div>

                        <div
                            className="text-center"
                            data-aos="zoom-in"
                            data-aos-delay="700"
                        >
                            <div className="text-2xl sm:text-3xl lg:text-4xl
                                            font-bold
                                            text-[#2563EB] dark:text-[#60A5FA]">
                                10+
                            </div>
                            <div className="text-xs sm:text-sm lg:text-base
                                            text-[#64748B] dark:text-[#94A3B8]">
                                Projects Completed
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <button
                         className="w-full sm:w-auto inline-flex items-center
             justify-center
             px-6 py-3
             rounded-full
             font-semibold text-base sm:text-lg
             bg-[#2563EB] dark:bg-[#60A5FA]
             text-white dark:text-[#020617]
             transition-all duration-300
             hover:translate-y-[-1px]
             hover:shadow-lg
             mb-10 sm:mb-12 lg:mb-0"
                        data-aos="fade-up"
                        data-aos-delay="800"
                    >
                        Learn More
                    </button>
                </article>
            </div>
        </section>
    )
}

