import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaEnvelope, FaPhone } from "react-icons/fa";
import logoLight from "../assets/Light mode logo.svg";
import logoDark from "../assets/Dark mode logo.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F1F5F9] dark:bg-[#1E293B] border-t border-[#E2E8F0] dark:border-[#1E293B] pt-12 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        {/* Adjusted Grid: Using 12 columns for finer control over widths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-4 items-start">

          {/* Logo / Info - Spans 3 columns */}
          <div className="lg:col-span-3 flex flex-col items-center md:items-start">
            <img src={logoLight} alt="Logo" className="w-32 mb-3 block dark:hidden" />
            <img src={logoDark} alt="Logo" className="w-32 mb-3 hidden dark:block" />
            <p className="text-[#475569] dark:text-[#CBD5F5] text-sm text-center md:text-left">
              Full Stack Developer & UI/UX Designer
            </p>
          </div>

          {/* Quick Links - Spans 2 columns (Reduced space) */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start">
            <h4 className="text-[#0F172A] dark:text-[#E5E7EB] font-semibold mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm">
              {["Home", "About", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[#64748B] dark:text-[#94A3B8] hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         {/* Follow Me - Continued */}
          <div className="lg:col-span-3 flex flex-col items-center md:items-start">
            <h4 className="text-[#0F172A] dark:text-[#E5E7EB] font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-3 mb-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#181717] hover:scale-110 transition-transform text-white">
                <FaGithub size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0A66C2] hover:scale-110 transition-transform text-white">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1DA1F2] hover:scale-110 transition-transform text-white">
                <FaTwitter size={18} />
              </a>
            </div>
            <p className="text-[#64748B] dark:text-[#94A3B8] text-sm text-center md:text-left leading-relaxed">
              Let's build something great together.
            </p>
          </div>

          {/* Contact Info - Expanded to 4 columns to fit long email */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start">
            <h4 className="text-[#0F172A] dark:text-[#E5E7EB] font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 w-full">
              {/* Email Card */}
              <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-[#020617] rounded-xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm hover:border-[#2563EB] dark:hover:border-[#60A5FA] transition-colors">
                <FaEnvelope className="text-[#2563EB] dark:text-[#60A5FA] flex-shrink-0" size={16} />
                <span className="text-[#64748B] dark:text-[#94A3B8] text-[12px] xl:text-sm break-all font-medium">
                  mohammadzahidhabib786@gmail.com
                </span>
              </div>
              {/* Phone Card */}
              <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-[#020617] rounded-xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm hover:border-[#2563EB] dark:hover:border-[#60A5FA] transition-colors">
                <FaPhone className="text-[#2563EB] dark:text-[#60A5FA] flex-shrink-0" size={16} />
                <span className="text-[#64748B] dark:text-[#94A3B8] text-sm font-medium">
                  +92 300 1234567
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-[#E2E8F0] dark:border-[#334155] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#64748B] dark:text-[#94A3B8]">
          <p className="text-center md:text-left">
            © {currentYear} Made with <FaHeart className="text-red-500 inline-block mx-1 animate-pulse" /> by <span className="font-semibold text-[#0F172A] dark:text-[#E5E7EB]">M Zahid Habib</span>
          </p>
          <div className="flex gap-6 font-medium">
             <span className="hover:text-[#2563EB] cursor-pointer transition-colors">Terms of Use</span>
             <span className="opacity-50">|</span>
             <span className="hover:text-[#2563EB] cursor-pointer transition-colors">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

// export default function Footer({ darkMode }) {
//     const currentYear = new Date().getFullYear();

//     return (
//         <footer style={{
//             background: darkMode ?
//                 'linear-linear(to bottom, #000000, #111827)'
//                 : 'linear-linear(to bottom, #f3f4f6, #efe7eb)',
//             borderColor: darkMode ? '#374151' : '#d1d5db'
//         }}
//             className='border-t'>
//             <div className='container mx-auto px-4 py-8'>
//                 <div className='flex flex-col md:flex-row justify-between
//                 items-center gap-6'>
//                     <div className='text-center md:text-left'>
//                         <h3 className='text-2xl font-bold mb-2
//                         text-orange-500 dark:text-white'>
//                             Portfolio
//                         </h3>
//                         <p className='text-sm'
//                             style={{
//                                 color: darkMode ? '#9ca3af' : '#6b7280'
//                             }}>
//                             Full Stack Developer & UI/UX Designer
//                         </p>
//                     </div>
//                     <div className='flex gap-4'>
//                         <a href="#"
//                             className='w-10 h-10 rounded-full flex items-center
//                         justify-center hover:scale-110 transition-all
//                         hover:bg-linear-to-r hover:from-orange-500
//                         hover:to-amber-500 hover:text-white
//                          bg-[#374151] dark:bg-[#f3f4f6]
//                         text-white dark:text-[#374151]'>
//                             <FaGithub />
//                         </a>
//                         <a href="#"
//                             className='w-10 h-10 rounded-full flex items-center
//                         justify-center hover:scale-110 transition-all
//                         hover:bg-linear-to-r hover:from-orange-500
//                         hover:to-amber-500 hover:text-white
//                          bg-[#374151] dark:bg-[#f3f4f6]
//                         text-white dark:text-[#374151]'>
//                             <FaLinkedin />
//                         </a>
//                         <a href="#"
//                             className='w-10 h-10 rounded-full flex items-center
//                         justify-center hover:scale-110 transition-all
//                         hover:bg-linear-to-r hover:from-orange-500
//                         hover:to-amber-500 hover:text-white
//                          bg-[#374151] dark:bg-[#f3f4f6]
//                         text-white dark:text-[#374151]'>
//                             <FaTwitter />
//                         </a>
//                     </div>
//                     <div className='text-center md:text-right'>
//                         <p className='text-sm flex items-center justify-end
//                         gap-1 text-[#6b7280] dark:text-[#9ca3af]'>

//                             @{currentYear} made with <FaHeart className='text-red-500' />
//                             by <span className='mt-1 text-[#f97316]'>M Zahid Habib</span>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     )
// }
