"use client";

import { useState } from "react";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import CustomImage from "@components/ui/CustomImage";

const projects = [
    {
        id: 1,
        title: "A Fintech Dashboard",
        image: "/images/dashboard.png",
    },
    {
        id: 2,
        title: "A Futuristic Interior Website",
        image: "/images/futuristic.png",
    },
    {
        id: 3,
        title: "A Real Estate Website",
        image: "/images/estate.png",
    },

    {
        id: 4,
        title: "A Car Rental Website",
        image: "/images/car.png",
    },

    {
        id: 5,
        title: "A Social Media Template For Ads",
        image: "/images/social.png"
    }
];

const Recent = () => {
    const [current, setCurrent] = useState(0);
    const total = projects.length;

    const goToSlide = (index: number) => setCurrent(index);
    const goNext = () => setCurrent((prev) => (prev + 1) % total);
    const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total);

    return (
        <section className="relative mt-[125px] w-full overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 mb-[98px] px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="105" height="4" viewBox="0 0 105 4" fill="none">
                    <path d="M2 2H103" stroke="url(#paint0_linear_1292_17747)" strokeWidth="4" strokeLinecap="round" />
                    <defs>
                        <linearGradient id="paint0_linear_1292_17747" x1="103.223" y1="-183.5" x2="-176.086" y2="-28.5407" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF0900" />
                            <stop offset="0.568693" stopColor="#FFDD55" />
                        </linearGradient>
                    </defs>
                </svg>
                <h1 className="text-[30px] md:text-[40px] font-bold text-black">My Recent Project</h1>
            </div>

            {/* Carousel */}
            <div className="overflow-hidden px-6">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${current * 50}%)` }} // shift by 50% to reveal one at a time in a 2-column layout
                >
                    {projects.map((project) => (
                        <div key={project.id} className=" w-full md:w-1/2 flex-shrink-0 flex justify-center items-center">
                            <div className="text-center px-4">
                                <CustomImage
                                    src={project.image}
                                    alt={project.title}
                                    width={814}
                                    height={300}
                                    className="rounded-lg mx-auto"
                                />
                                <p className="mt-4 font-[500] text-[#000] text-[20px]">{project.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Row */}
            <div className="flex justify-center items-center mt-6 space-x-6">
                <div className="relative cursor-pointer"
                    onClick={goPrev}

                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 92 78" fill="none">
                        <path d="M6.97216 48.273C-1.37028 44.9055 -1.37027 33.0945 6.97217 29.727L77.5278 1.24633C84.1006 -1.40688 91.2709 3.43122 91.2709 10.5193V67.4807C91.2709 74.5688 84.1006 79.4069 77.5278 76.7537L6.97216 48.273Z" fill="#232323" />
                    </svg>

                    <div className="absolute top-0 left-[10px] w-full h-full flex items-center justify-center">
                        Prev
                    </div>
                </div>
                {/* Dots */}
                <div className="flex space-x-2">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === current ? "bg-black" : "bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
                <div className="relative cursor-pointer"
                    onClick={goNext}

                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 92 78" fill="none">
                        <path d="M85.0278 29.727C93.3703 33.0945 93.3703 44.9055 85.0278 48.273L14.4722 76.7537C7.89941 79.4069 0.72908 74.5688 0.72908 67.4807V10.5193C0.72908 3.43122 7.89942 -1.40687 14.4722 1.24633L85.0278 29.727Z" fill="#232323" />
                    </svg>

                    <div className="absolute top-0 right-[10px] w-full h-full flex items-center justify-center">
                        Next
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Recent;
