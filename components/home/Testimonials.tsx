import { testimonial } from "@/data/testimonial";
import Socials from "@components/layout/Socials";
import ButtonWithArrow from "@components/ui/Button";
import CustomImage from "@components/ui/CustomImage";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";


const Testimonials = () => {
    return (
        <div className="relative mt-[125px]">
            <div className="flex items-center gap-3 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="105" height="4" viewBox="0 0 105 4" fill="none">
                    <path d="M2 2H103" stroke="url(#paint0_linear_1292_17747)" stroke-width="4" stroke-linecap="round" />
                    <defs>
                        <linearGradient id="paint0_linear_1292_17747" x1="103.223" y1="-183.5" x2="-176.086" y2="-28.5407" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF0900" />
                            <stop offset="0.568693" stop-color="#FFDD55" />
                        </linearGradient>
                    </defs>
                </svg>
                <h1 className="text-[40px] font-[700]  text-[#000] ">Testimonials</h1>
            </div>





        </div>
    )
}

export default Testimonials