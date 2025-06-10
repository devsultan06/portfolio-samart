"use client";

import CustomImage from "@components/ui/CustomImage"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion"
import { navLinks2 } from "@/data/navLinks2";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Project", href: "/project" },
    { name: "Resume", href: "/resume" },
];

const ActiveUnderline = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="4" viewBox="0 0 41 4" fill="none">
        <path d="M0 2H41" stroke="url(#paint0_linear_1292_17743)" strokeWidth="3" />
        <defs>
            <linearGradient id="paint0_linear_1292_17743" x1="41.0905" y1="-183.5" x2="-100.033" y2="-151.717" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF0900" />
                <stop offset="0.568693" stopColor="#FFDD55" />
            </linearGradient>
        </defs>
    </svg>
);

const HeaderContact = () => {
    const pathname = usePathname();
    
        const [isMenuOpen, setIsMenuOpen] = useState(false);
    
        const toggleMenu = () => {
            setIsMenuOpen(prev => !prev);
        };

    return (
        <div className="">
            <div className="bg-[url('/images/bg4.png')] relative bg-cover hidden md:block    h-[120vh]  bg-[#afafaf] font-inter">
                <div className="flex px-[27px] pt-[19px] max-900:pt-[30px] gap-20 items-center">
                    <div className=" ">
                        <CustomImage src="/images/logo2.png" alt="Ripple" width={200} height={50} className="max-900:w-[80%]" />
                    </div>
                    <nav className="flex gap-[104px] px-8">
                        {navLinks.map(link => (
                            <div key={link.href} className="">
                                <Link
                                    href={link.href}
                                    className={`text-[20px] text-[#000] font-[500]`}
                                >
                                    {link.name}
                                </Link>
                                {pathname === link.href && <ActiveUnderline />}
                            </div>
                        ))}
                    </nav>
                </div>

                <div>
                    <div className="flex max-1200:-mt-[100px] flex-col px-[300px] max-1200:px-[40px] justify-center  h-[100vh]">

                        <h1 className="text-[76px] max-1200:text-[53px] font-[700] mb-[96px] text-[#000] text-center">
                            Let’s Talk
                        </h1>

                        <p className="text-[36px] max-1200:text-[20px] text-[#000] font-[500] text-center">Ready to bring your tech design or art project to life ? Get in touch with me to discuss how we can collaborate and create something amazing together.</p>
                    </div>
                </div>

                <div className="absolute top-[0px] right-[0px]">
                    <div className="flex gap-[20px] items-center ">
                        <div>
                            <h1 className="text-[24px] font-[500] text-[#000]">My socials</h1>
                        </div>

                          <div className="flex gap-[20px] ml-[30px] ">
                            <Link href="https://x.com/sam_art6675?s=21&t=OypTPkmp9VXkaPhnhYMeNg" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                                    <rect width="40" height="40" rx="8" fill="black" />
                                    <path d="M24.1064 17.3669L34.9257 4H30.0967L21.8389 14.2089L14.5129 4H4L16.2666 21.0905L4.73857 35.33H9.56914L18.5341 24.2548L26.4871 35.33H37L24.1064 17.3669ZM20.3664 21.9881L18.0957 18.8254L9.28 6.5487H12.91L20.0254 16.4443L22.293 19.6086L31.7499 32.7813H28.1199L20.3664 21.9881Z" fill="white" />
                                </svg>                        </Link>
                            <Link href="https://www.instagram.com/samuels_art7?igsh=anpkdmdjYno4Zzl2&utm_source=qr" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 41 40" fill="none">
                                    <g clip-path="url(#clip0_1292_17727)">
                                        <path d="M30.958 0H9.70801C4.53034 0 0.333008 4.19733 0.333008 9.375V30.625C0.333008 35.8027 4.53034 40 9.70801 40H30.958C36.1357 40 40.333 35.8027 40.333 30.625V9.375C40.333 4.19733 36.1357 0 30.958 0Z" fill="url(#paint0_radial_1292_17727)" />
                                        <path d="M30.958 0H9.70801C4.53034 0 0.333008 4.19733 0.333008 9.375V30.625C0.333008 35.8027 4.53034 40 9.70801 40H30.958C36.1357 40 40.333 35.8027 40.333 30.625V9.375C40.333 4.19733 36.1357 0 30.958 0Z" fill="url(#paint1_radial_1292_17727)" />
                                        <path d="M20.3344 4.375C16.091 4.375 15.5583 4.39359 13.8918 4.46938C12.2283 4.54563 11.0929 4.80891 10.0994 5.19531C9.0716 5.59438 8.19988 6.12828 7.33145 6.99703C6.46223 7.86562 5.92832 8.73734 5.52801 9.76469C5.14051 10.7584 4.87691 11.8944 4.80207 13.557C4.72754 15.2238 4.70801 15.7566 4.70801 20.0002C4.70801 24.2438 4.72676 24.7747 4.80238 26.4412C4.87895 28.1047 5.14223 29.2402 5.52832 30.2336C5.9277 31.2614 6.4616 32.1331 7.33035 33.0016C8.19863 33.8708 9.07035 34.4059 10.0974 34.805C11.0916 35.1914 12.2272 35.4547 13.8904 35.5309C15.5571 35.6067 16.0893 35.6253 20.3325 35.6253C24.5764 35.6253 25.1074 35.6067 26.7739 35.5309C28.4374 35.4547 29.5741 35.1914 30.5683 34.805C31.5957 34.4059 32.4661 33.8708 33.3343 33.0016C34.2035 32.1331 34.7372 31.2614 35.1377 30.2341C35.5218 29.2402 35.7855 28.1044 35.8636 26.4416C35.9385 24.775 35.958 24.2438 35.958 20.0002C35.958 15.7566 35.9385 15.2241 35.8636 13.5573C35.7855 11.8939 35.5218 10.7586 35.1377 9.76516C34.7372 8.73734 34.2035 7.86562 33.3343 6.99703C32.4652 6.12797 31.596 5.59406 30.5674 5.19547C29.5713 4.80891 28.4352 4.54547 26.7718 4.46938C25.105 4.39359 24.5744 4.375 20.3296 4.375H20.3344ZM18.9327 7.19078C19.3488 7.19016 19.813 7.19078 20.3344 7.19078C24.5064 7.19078 25.0008 7.20578 26.6483 7.28063C28.1718 7.35031 28.9986 7.60484 29.5494 7.81875C30.2786 8.10188 30.7985 8.44047 31.345 8.9875C31.8919 9.53438 32.2304 10.0552 32.5143 10.7844C32.7282 11.3344 32.983 12.1613 33.0524 13.6847C33.1272 15.3319 33.1435 15.8266 33.1435 19.9966C33.1435 24.1666 33.1272 24.6614 33.0524 26.3084C32.9827 27.8319 32.7282 28.6587 32.5143 29.2089C32.2311 29.9381 31.8919 30.4573 31.345 31.0039C30.7982 31.5508 30.2789 31.8892 29.5494 32.1725C28.9993 32.3873 28.1718 32.6413 26.6483 32.7109C25.0011 32.7858 24.5064 32.802 20.3344 32.802C16.1622 32.802 15.6677 32.7858 14.0207 32.7109C12.4972 32.6406 11.6704 32.3861 11.1191 32.1722C10.39 31.8889 9.8691 31.5505 9.32223 31.0036C8.77535 30.4567 8.43691 29.9372 8.15301 29.2077C7.9391 28.6575 7.68426 27.8306 7.61488 26.3072C7.54004 24.66 7.52504 24.1653 7.52504 19.9927C7.52504 15.82 7.54004 15.328 7.61488 13.6808C7.68457 12.1573 7.9391 11.3305 8.15301 10.7797C8.43629 10.0505 8.77535 9.52969 9.32238 8.98281C9.86941 8.43594 10.39 8.09734 11.1193 7.81359C11.67 7.59875 12.4972 7.34484 14.0207 7.27484C15.4621 7.20969 16.0207 7.19016 18.9327 7.18687V7.19078ZM28.675 9.78516C27.6399 9.78516 26.8 10.6242 26.8 11.6595C26.8 12.6947 27.6399 13.5345 28.675 13.5345C29.7102 13.5345 30.55 12.6947 30.55 11.6595C30.55 10.6244 29.7102 9.78453 28.675 9.78453V9.78516ZM20.3344 11.9759C15.9032 11.9759 12.3104 15.5688 12.3104 20.0002C12.3104 24.4316 15.9032 28.0227 20.3344 28.0227C24.7658 28.0227 28.3574 24.4316 28.3574 20.0002C28.3574 15.5689 24.7655 11.9759 20.3341 11.9759H20.3344ZM20.3344 14.7917C23.2108 14.7917 25.5429 17.1234 25.5429 20.0002C25.5429 22.8766 23.2108 25.2086 20.3344 25.2086C17.458 25.2086 15.1261 22.8766 15.1261 20.0002C15.1261 17.1234 17.4579 14.7917 20.3344 14.7917Z" fill="white" />
                                    </g>
                                    <defs>
                                        <radialGradient id="paint0_radial_1292_17727" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.958 43.0808) rotate(-90) scale(39.643 36.8711)">
                                            <stop stop-color="#FFDD55" />
                                            <stop offset="0.1" stop-color="#FFDD55" />
                                            <stop offset="0.5" stop-color="#FF543E" />
                                            <stop offset="1" stop-color="#C837AB" />
                                        </radialGradient>
                                        <radialGradient id="paint1_radial_1292_17727" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-6.36715 2.88141) rotate(78.681) scale(17.7206 73.045)">
                                            <stop stop-color="#3771C8" />
                                            <stop offset="0.128" stop-color="#3771C8" />
                                            <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
                                        </radialGradient>
                                        <clipPath id="clip0_1292_17727">
                                            <rect width="40" height="40" fill="white" transform="translate(0.333008)" />
                                        </clipPath>
                                    </defs>
                                </svg>                        </Link>
                            <Link href="https://www.linkedin.com/in/samuel-ademola-a532272bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 41 40" fill="none">
                                    <g clip-path="url(#clip0_1292_17732)">
                                        <path d="M31.292 0H10.042C4.86432 0 0.666992 4.19733 0.666992 9.375V30.625C0.666992 35.8027 4.86432 40 10.042 40H31.292C36.4697 40 40.667 35.8027 40.667 30.625V9.375C40.667 4.19733 36.4697 0 31.292 0Z" fill="white" />
                                        <path d="M31.292 0H10.042C4.86432 0 0.666992 4.19733 0.666992 9.375V30.625C0.666992 35.8027 4.86432 40 10.042 40H31.292C36.4697 40 40.667 35.8027 40.667 30.625V9.375C40.667 4.19733 36.4697 0 31.292 0Z" fill="#0A66C2" />
                                        <path d="M29.5287 34.0133H34.1021C34.2679 34.0133 34.4268 33.9475 34.544 33.8303C34.6612 33.7131 34.7271 33.5542 34.7271 33.3884L34.7295 23.7256C34.7295 18.6752 33.6412 14.7931 27.7392 14.7931C25.4956 14.7097 23.3798 15.8663 22.2381 17.7975C22.2325 17.8069 22.224 17.8142 22.2139 17.8183C22.2038 17.8224 22.1926 17.8231 22.1821 17.8202C22.1715 17.8173 22.1622 17.8111 22.1555 17.8025C22.1489 17.7938 22.1452 17.7833 22.1451 17.7723V15.8844C22.1451 15.7186 22.0793 15.5596 21.9621 15.4424C21.8448 15.3252 21.6859 15.2594 21.5201 15.2594H17.18C17.0142 15.2594 16.8552 15.3252 16.738 15.4424C16.6208 15.5596 16.555 15.7186 16.555 15.8844V33.3875C16.555 33.5533 16.6208 33.7122 16.738 33.8294C16.8552 33.9467 17.0142 34.0125 17.18 34.0125H21.7531C21.9188 34.0125 22.0778 33.9467 22.195 33.8294C22.3122 33.7122 22.3781 33.5533 22.3781 33.3875V24.7355C22.3781 22.2891 22.8421 19.9198 25.8751 19.9198C28.865 19.9198 28.9037 22.7192 28.9037 24.8939V33.3883C28.9037 33.554 28.9696 33.713 29.0868 33.8302C29.204 33.9474 29.3629 34.0133 29.5287 34.0133ZM6.60449 9.31687C6.60449 11.1706 8.13059 12.6959 9.98449 12.6959C11.8379 12.6958 13.3631 11.1695 13.3631 9.31609C13.3628 7.46266 11.8375 5.9375 9.98387 5.9375C8.1298 5.9375 6.60449 7.46312 6.60449 9.31687ZM7.69184 34.0133H12.2711C12.4368 34.0133 12.5958 33.9474 12.713 33.8302C12.8302 33.713 12.8961 33.554 12.8961 33.3883V15.8844C12.8961 15.7186 12.8302 15.5596 12.713 15.4424C12.5958 15.3252 12.4368 15.2594 12.2711 15.2594H7.69184C7.52608 15.2594 7.3671 15.3252 7.24989 15.4424C7.13268 15.5596 7.06684 15.7186 7.06684 15.8844V33.3883C7.06684 33.554 7.13268 33.713 7.24989 33.8302C7.3671 33.9474 7.52608 34.0133 7.69184 34.0133Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1292_17732">
                                            <rect width="40" height="40" fill="white" transform="translate(0.666992)" />
                                        </clipPath>
                                    </defs>
                                </svg>                        </Link>

                            <Link href="https://www.facebook.com/share/16TMgfNVKo/?mibextid=LQQJ4d" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                                    <g clip-path="url(#clip0_1292_17737)">
                                        <rect width="40" height="40" rx="10" fill="white" />
                                        <path d="M32.5 0C34.566 0 36.3325 0.733507 37.7995 2.20052C39.2665 3.66753 40 5.43403 40 7.5V32.5C40 34.566 39.2665 36.3325 37.7995 37.7995C36.3325 39.2665 34.566 40 32.5 40H27.6042V24.5052H32.7865L33.5677 18.4635H27.6042V14.6094C27.6042 13.6372 27.8082 12.908 28.2161 12.4219C28.6241 11.9358 29.4184 11.6927 30.599 11.6927L33.776 11.6667V6.27604C32.6823 6.11979 31.1372 6.04167 29.1406 6.04167C26.7795 6.04167 24.8915 6.73611 23.4766 8.125C22.0616 9.51389 21.3542 11.4757 21.3542 14.0104V18.4635H16.1458V24.5052H21.3542V40H7.5C5.43403 40 3.66753 39.2665 2.20052 37.7995C0.733507 36.3325 0 34.566 0 32.5V7.5C0 5.43403 0.733507 3.66753 2.20052 2.20052C3.66753 0.733507 5.43403 0 7.5 0H32.5Z" fill="#1877F2" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1292_17737">
                                            <rect width="40" height="40" rx="10" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>                        </Link>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-[0px]  max-900:left-[20px] max-900:bottom-[20px]">
                   <Link href="/contact">
                        <button className="px-[50px] py-[8px] talk-contact text-white text-[22px] font-[500] transition-transform">
                            Let's Talk
                        </button>
                    </Link>
                </div>
            </div>


           
                       <div className="bg-[url('/images/bg4m.png')] relative bg-center rounded-3xl bg-cover bg-no-repeat block md:hidden h-[89vh]  bg-[#afafaf] font-inter">
           
                           <div className="flex px-[27px] pt-[19px]  items-center">
                               <div className="menu cursor-pointer " onClick={toggleMenu}>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                       <path d="M4 18C3.71667 18 3.47934 17.904 3.288 17.712C3.09667 17.52 3.00067 17.2827 3 17C2.99934 16.7173 3.09534 16.48 3.288 16.288C3.48067 16.096 3.718 16 4 16H20C20.2833 16 20.521 16.096 20.713 16.288C20.905 16.48 21.0007 16.7173 21 17C20.9993 17.2827 20.9033 17.5203 20.712 17.713C20.5207 17.9057 20.2833 18.0013 20 18H4ZM4 13C3.71667 13 3.47934 12.904 3.288 12.712C3.09667 12.52 3.00067 12.2827 3 12C2.99934 11.7173 3.09534 11.48 3.288 11.288C3.48067 11.096 3.718 11 4 11H20C20.2833 11 20.521 11.096 20.713 11.288C20.905 11.48 21.0007 11.7173 21 12C20.9993 12.2827 20.9033 12.5203 20.712 12.713C20.5207 12.9057 20.2833 13.0013 20 13H4ZM4 8C3.71667 8 3.47934 7.904 3.288 7.712C3.09667 7.52 3.00067 7.28267 3 7C2.99934 6.71733 3.09534 6.48 3.288 6.288C3.48067 6.096 3.718 6 4 6H20C20.2833 6 20.521 6.096 20.713 6.288C20.905 6.48 21.0007 6.71733 21 7C20.9993 7.28267 20.9033 7.52033 20.712 7.713C20.5207 7.90567 20.2833 8.00133 20 8H4Z" fill="black" />
                                   </svg>
                               </div>
                               <div className=" mx-auto">
                                   <CustomImage src="/images/logo2.png" alt="Ripple" width={200} height={50} className="" />
                               </div>
           
                           </div>
                           {isMenuOpen && (
                               <motion.div
                                   initial={{ x: '-100%' }}
                                   animate={{ x: 0 }}
                                   exit={{ x: '-100%' }}
                                   transition={{ type: 'tween', duration: 0.3 }}
                                   className="fixed top-0 left-0 z-50 w-[75%] h-full bg-black text-white p-6 md:hidden"
                               >
                                   <button onClick={toggleMenu} className="mb-6 text-right w-full">✕</button>
                                   <nav className="flex flex-col gap-4">
                                       {navLinks2.map((link) => (
                                           <Link key={link.href} href={link.href} onClick={toggleMenu}>
                                               <span className="text-[18px] font-medium">{link.name}</span>
                                           </Link>
                                       ))}
                                   </nav>
                               </motion.div>
                           )}

                <div>
                    <div className="flex flex-col  justify-center  h-[100vh] max-900:h-[60vh]">

                        <h1 className="text-[48px] md:text-[76px] font-[700] mb-[96px] text-[#000] text-center">
                            Let’s Talk
                        </h1>

                        <p className="text-[24px] md:text-[36px] text-[#000] font-[500] text-center">Ready to bring your tech design or art project to life ? Get in touch with me to discuss how we can collaborate and create something amazing together.</p>
                    </div>
                </div>


                <div className="absolute left-[0px] -bottom-[10px]">
                    <Link href="/contact">
                        <button className="px-[15px] py-[8px] talk-contact text-white text-[12px] font-[500] transition-transform">
                            Let's Talk
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default HeaderContact