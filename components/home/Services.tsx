import CustomImage from "@components/ui/CustomImage";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const services = [
    {
        title: "UI/UX Designer",
        image: "/images/serv1.png", // Place your image in public/images/uiux.png
        description:
            "I design website, applications and dashboards using Figma. My skills are prototyping, responsive design, usability test, communication, user writing, wire framing, typography. ETC.",
    },
    {
        title: "Pencil Artist",
        image: "/images/serv2.png", // Place your image in public/images/pencil-artist.png
        description:
            "I make realistic pencil portrait using charcoal pencil on eggshell paper and i also do mural paintings using oil paint.",
    },
];

const Services = () => {
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
                <h1 className="text-[40px] font-[700]  text-[#000] ">My Services</h1>
            </div>

            <div className="flex flex-col mt-[117px] gap-8 md:flex-row md:justify-center  md:gap-12">
                {services.map((service, idx) => (
                    <div
                        key={service.title}
                        className={`rounded-[20px] overflow-hidden w-[650px] service-box shadow-md bg-[#E2E2E2] flex  flex-col items-center md:w-[650px] transition-all 
                            }`}
                    >
                        <div className="pt-8 px-10 w-full flex justify-center items-center h-[497px] image-service">
                            <CustomImage
                                src={service.image}
                                alt={service.title}
                                width={320}
                                height={220}
                                className=""
                            />
                        </div>
                        <div className=" w-full text-[#000] p-6 flex flex-col items-center min-h-[170px]">
                            <h2 className="text-[32px] font-[700] mb-[20px] text-center">{service.title}</h2>
                            <p className="text-[28px] font-[500] text-center">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    )
}

export default Services