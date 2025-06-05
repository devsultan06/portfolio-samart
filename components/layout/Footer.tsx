import CustomImage from "@components/ui/CustomImage";
import Link from "next/link";
import {
    FaInstagram,
    FaLinkedin,
    FaFacebook,
} from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    return (
        <footer className="bg-[#141414] px-[30px] max-900:px-[20px] text-white py-10">
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Logo and description */}
                <div>
                    <CustomImage src="/images/logo.png" alt="Ripple" width={200} height={50} className="max-900:w-[80%]" />

                    <p className="text-sm leading-relaxed">
                        I'm thrilled that you have taken an interest in my portfolio. If you are looking for a collaborative partner to bring your tech and art projects to life, hit that “Let’s Talk” button and let’s discuss.
                    </p>
                    {/* Social Icons */}
                    <div className="flex items-center gap-4 mt-4 text-lg">
                        <Link href="https://x.com/sam_art6675?s=21&t=OypTPkmp9VXkaPhnhYMeNg" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M23.235 17.32L35.8925 2.5H32.8925L21.905 15.3675L13.125 2.5H3L16.275 21.96L3 37.5H6L17.605 23.91L26.8775 37.5H37.0025L23.235 17.32ZM19.1275 22.13L17.7825 20.1925L7.08 4.775H11.6875L20.3225 17.2175L21.6675 19.155L32.895 35.33H28.2875L19.1275 22.13Z" fill="white" />
                            </svg>                     </Link>
                        <Link href="https://www.instagram.com/samuels_art7?igsh=anpkdmdjYno4Zzl2&utm_source=qr" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M28.333 14.167C29.7137 14.167 30.833 13.0477 30.833 11.667C30.833 10.2863 29.7137 9.16699 28.333 9.16699C26.9523 9.16699 25.833 10.2863 25.833 11.667C25.833 13.0477 26.9523 14.167 28.333 14.167Z" fill="white" />
                                <path d="M26.6667 5C31.2667 5 35 8.73333 35 13.3333V26.6667C35 31.2667 31.2667 35 26.6667 35H13.3333C8.73333 35 5 31.2667 5 26.6667V13.3333C5 8.73333 8.73333 5 13.3333 5H20H26.6667Z" stroke="white" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19.9997 13.333C23.683 13.333 26.6663 16.3163 26.6663 19.9997C26.6663 23.683 23.683 26.6663 19.9997 26.6663C16.3163 26.6663 13.333 23.683 13.333 19.9997C13.333 16.3163 16.3163 13.333 19.9997 13.333Z" stroke="white" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>                     </Link>
                        <Link href="https://www.linkedin.com/in/samuel-ademola-a532272bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M34.1169 3.33324H5.88359C5.56622 3.32883 5.2511 3.38699 4.9562 3.50438C4.66131 3.62177 4.39243 3.79611 4.16492 4.01743C3.93741 4.23875 3.75573 4.50271 3.63025 4.79426C3.50476 5.0858 3.43794 5.3992 3.43359 5.71657V34.2832C3.43794 34.6006 3.50476 34.914 3.63025 35.2056C3.75573 35.4971 3.93741 35.7611 4.16492 35.9824C4.39243 36.2037 4.66131 36.378 4.9562 36.4954C5.2511 36.6128 5.56622 36.671 5.88359 36.6666H34.1169C34.4343 36.671 34.7494 36.6128 35.0443 36.4954C35.3392 36.378 35.6081 36.2037 35.8356 35.9824C36.0631 35.7611 36.2448 35.4971 36.3703 35.2056C36.4958 34.914 36.5626 34.6006 36.5669 34.2832V5.71657C36.5626 5.3992 36.4958 5.0858 36.3703 4.79426C36.2448 4.50271 36.0631 4.23875 35.8356 4.01743C35.6081 3.79611 35.3392 3.62177 35.0443 3.50438C34.7494 3.38699 34.4343 3.32883 34.1169 3.33324ZM13.4836 31.2332H8.48359V16.2332H13.4836V31.2332ZM10.9836 14.1332C10.294 14.1332 9.63271 13.8593 9.14512 13.3717C8.65752 12.8841 8.38359 12.2228 8.38359 11.5332C8.38359 10.8437 8.65752 10.1824 9.14512 9.69476C9.63271 9.20717 10.294 8.93324 10.9836 8.93324C11.3498 8.89172 11.7206 8.928 12.0717 9.03971C12.4229 9.15143 12.7465 9.33606 13.0214 9.58151C13.2962 9.82696 13.5161 10.1277 13.6667 10.464C13.8173 10.8004 13.8951 11.1647 13.8951 11.5332C13.8951 11.9017 13.8173 12.2661 13.6667 12.6024C13.5161 12.9388 13.2962 13.2395 13.0214 13.485C12.7465 13.7304 12.4229 13.9151 12.0717 14.0268C11.7206 14.1385 11.3498 14.1748 10.9836 14.1332ZM31.5169 31.2332H26.5169V23.1832C26.5169 21.1666 25.8003 19.8499 23.9836 19.8499C23.4214 19.854 22.8739 20.0304 22.415 20.3552C21.9561 20.68 21.6077 21.1377 21.4169 21.6666C21.2865 22.0583 21.23 22.4709 21.2503 22.8832V31.2166H16.2503V16.2166H21.2503V18.3332C21.7045 17.5451 22.3651 16.8958 23.161 16.4552C23.9569 16.0147 24.8579 15.7997 25.7669 15.8332C29.1003 15.8332 31.5169 17.9832 31.5169 22.5999V31.2332Z" fill="white" />
                            </svg>                      </Link>

                        <Link href="https://www.facebook.com/share/16TMgfNVKo/?mibextid=LQQJ4d" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M36.6663 19.9997C36.6663 10.7997 29.1997 3.33301 19.9997 3.33301C10.7997 3.33301 3.33301 10.7997 3.33301 19.9997C3.33301 28.0663 9.06634 34.783 16.6663 36.333V24.9997H13.333V19.9997H16.6663V15.833C16.6663 12.6163 19.283 9.99967 22.4997 9.99967H26.6663V14.9997H23.333C22.4163 14.9997 21.6663 15.7497 21.6663 16.6663V19.9997H26.6663V24.9997H21.6663V36.583C30.083 35.7497 36.6663 28.6497 36.6663 19.9997Z" fill="white" />
                            </svg>                    </Link>
                    </div>
                </div>

                {/* Menu */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Menu</h3>

                    <ul className="space-y-2 text-sm">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/project">Projects</Link></li>
                        <li><Link href="/resume">Resume</Link></li>
                        <li><Link href="/gallery">Gallery</Link></li>
                    </ul>

                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                            <HiOutlineLocationMarker className="mt-1" />
                            <span>5, Kofo Akah street, Oke Afa, Isolo Ikeja, Lagos, Nigeria.</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <HiOutlinePhone />
                            <span>+234 913 411 8514</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <HiOutlinePhone />
                            <span>+234 908 230 7362</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <HiOutlineMail />
                            <span>ademolasamuel280@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-[#fff] mt-8 pt-4 text-center text-xs text-white/60">
                © Copyright All Rights Reserved 2024
            </div>
        </footer>
    );
};

export default Footer;
