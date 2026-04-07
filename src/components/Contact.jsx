import contactImg from '../assets/contact.png'
import { motion as Motion } from 'framer-motion'

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-16 sm:py-20
                 bg-[#F8FAFC] dark:bg-[#0F172A]
                 overflow-x-hidden"
            data-aos="fade-up"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* ===== HEADING ===== */}
                <header
                    className="text-center mb-10 sm:mb-14"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <h2
                        className="text-3xl sm:text-4xl lg:text-5xl
                       font-bold
                       text-[#0F172A] dark:text-[#E5E7EB]
                       mb-3"
                    >
                        Get In{' '}
                        <span className="text-[#2563EB] dark:text-[#60A5FA]">
                            Touch
                        </span>
                    </h2>

                    <p
                        className="text-base sm:text-lg
                       text-[#475569] dark:text-[#CBD5F5]"
                    >
                        Have a project or opportunity in mind? Let’s talk.
                    </p>
                </header>

                {/* ===== CONTENT ===== */}
                <div
                    className="grid grid-cols-1 lg:grid-cols-2
                     gap-10 lg:gap-14
                     items-center"
                >
                    {/* IMAGE */}
                    <div
                        className="flex justify-center order-2 lg:order-1
             max-w-md mx-auto"
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        <div className="relative overflow-hidden rounded-xl">
                            <img
                                src={contactImg}
                                alt="Contact illustration"
                                className="w-full h-auto object-contain
                 transform transition-transform duration-500
                 hover:scale-105"
                            />
                        </div>
                    </div>


                    {/* FORM */}
                    <form
                        className="order-1 lg:order-2
                       rounded-2xl
                       bg-white dark:bg-[#020617]
                       border border-[#E2E8F0] dark:border-[#1E293B]
                       p-6 sm:p-8
                       shadow-sm"
                        data-aos="fade-left"
                        data-aos-delay="300"
                    >
                        {/* NAME */}
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2
                         gap-4 mb-4"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <input
                                type="text"
                                placeholder="First name"
                                required
                                className="w-full px-4 py-3 rounded-lg
                           text-sm sm:text-base
                           bg-transparent
                           border border-[#E2E8F0] dark:border-[#1E293B]
                           text-[#0F172A] dark:text-[#E5E7EB]
                           placeholder-[#64748B] dark:placeholder-[#94A3B8]
                           focus:outline-none
                           focus:ring-2 focus:ring-[#2563EB]/30
                           transition"
                            />

                            <input
                                type="text"
                                placeholder="Last name"
                                required
                                className="w-full px-4 py-3 rounded-lg
                           text-sm sm:text-base
                           bg-transparent
                           border border-[#E2E8F0] dark:border-[#1E293B]
                           text-[#0F172A] dark:text-[#E5E7EB]
                           placeholder-[#64748B] dark:placeholder-[#94A3B8]
                           focus:outline-none
                           focus:ring-2 focus:ring-[#2563EB]/30
                           transition"
                            />
                        </div>

                        {/* EMAIL */}
                        <div
                            className="mb-4"
                            data-aos="fade-up"
                            data-aos-delay="450"
                        >
                            <input
                                type="email"
                                placeholder="Email address"
                                required
                                className="w-full px-4 py-3 rounded-lg
                           text-sm sm:text-base
                           bg-transparent
                           border border-[#E2E8F0] dark:border-[#1E293B]
                           text-[#0F172A] dark:text-[#E5E7EB]
                           placeholder-[#64748B] dark:placeholder-[#94A3B8]
                           focus:outline-none
                           focus:ring-2 focus:ring-[#2563EB]/30
                           transition"
                            />
                        </div>

                        {/* PHONE (OPTIONAL) */}
                        <div
                            className="mb-4"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <input
                                type="tel"
                                placeholder="Phone number (optional)"
                                className="w-full px-4 py-3 rounded-lg
                           text-sm sm:text-base
                           bg-transparent
                           border border-[#E2E8F0] dark:border-[#1E293B]
                           text-[#0F172A] dark:text-[#E5E7EB]
                           placeholder-[#64748B] dark:placeholder-[#94A3B8]
                           focus:outline-none
                           focus:ring-2 focus:ring-[#2563EB]/30
                           transition"
                            />
                        </div>

                        {/* MESSAGE */}
                        <div
                            className="mb-6"
                            data-aos="fade-up"
                            data-aos-delay="550"
                        >
                            <textarea
                                rows="4"
                                placeholder="Your message"
                                required
                                className="w-full px-4 py-3 rounded-lg
                           text-sm sm:text-base
                           bg-transparent
                           border border-[#E2E8F0] dark:border-[#1E293B]
                           text-[#0F172A] dark:text-[#E5E7EB]
                           placeholder-[#64748B] dark:placeholder-[#94A3B8]
                           focus:outline-none
                           focus:ring-2 focus:ring-[#2563EB]/30
                           transition resize-none"
                            />
                        </div>

                        {/* BUTTON */}
                        <Motion.button
                            type="submit"
                            whileHover={{
                                scale: 1.03,
                                boxShadow: '0px 6px 18px rgba(37, 99, 235, 0.25)',
                            }}
                            whileTap={{ scale: 0.97 }}
                            transition={{
                                type: 'spring',
                                stiffness: 220,
                                damping: 26,
                                mass: 0.9,
                            }}
                            className="w-full inline-flex justify-center items-center
             px-6 py-3
             rounded-full
             font-semibold text-base
             bg-[#2563EB] dark:bg-[#60A5FA]
             text-white dark:text-[#020617]"
                        >
                            Send Message
                        </Motion.button>


                    </form>
                </div>
            </div>
        </section>
    )
}

