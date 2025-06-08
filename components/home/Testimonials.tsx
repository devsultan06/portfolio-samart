"use client";

import { useEffect, useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Image from "next/image";

const testimonial = [
    {
        name: "Michael James",
        comment: "Samuel !!! You have done a great job my guy. Lovely it is.",
        image: "/images/michael.svg",
    },
    {
        name: "Reshma Thomas",
        comment:
            "Great design mayowa. You delivered a clean design within few hours. Very impressive.",
        image: "/images/reshma.svg",
    },
    {
        name: "Adebola Folashade",
        comment: "I love this artwork, it’s really beautiful. Good job!",
        image: "/images/adebola.svg",
    },
];


const Testimonials = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const scrollAmount = container.offsetWidth;
        container.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const interval = setInterval(() => scroll("right"), 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative mt-[125px] px-4 md:px-10">
            {/* Title */}
            <div className="flex items-center gap-3 mb-[96px]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="105"
                    height="4"
                    viewBox="0 0 105 4"
                    fill="none"
                >
                    <path
                        d="M2 2H103"
                        stroke="url(#paint0_linear_1292_17747)"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_1292_17747"
                            x1="103.223"
                            y1="-183.5"
                            x2="-176.086"
                            y2="-28.5407"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FF0900" />
                            <stop offset="0.568693" stopColor="#FFDD55" />
                        </linearGradient>
                    </defs>
                </svg>
                <h1 className="text-[40px] font-bold text-black">Testimonials</h1>
            </div>

            {/* Carousel */}
            <div className="relative">
                <div
                    ref={scrollRef}
                    className="flex gap-4 justify-between overflow-x-auto scrollbar-hide scroll-smooth"
                >
                    {testimonial.map((item, idx) => (
                        <div
                            key={idx}
                            className="min-w-[300px] max-w-[284px] md:max-w-[484px] flex-shrink-0 bg-white p-5 rounded-xl border border-gray-200 shadow-sm"
                        >
                            <div className="text-2xl star flex justify-between items-center text-black mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M10.6299 6.80176C7.40985 6.80176 4.79785 9.48776 4.79785 12.8018C4.79785 16.1138 7.40985 18.8018 10.6299 18.8018C16.4599 18.8018 12.5739 30.3998 4.79785 30.3998V33.1998C18.6759 33.2018 24.1139 6.80176 10.6299 6.80176ZM27.4299 6.80176C24.2119 6.80176 21.5999 9.48776 21.5999 12.8018C21.5999 16.1138 24.2119 18.8018 27.4299 18.8018C33.2619 18.8018 29.3759 30.3998 21.5999 30.3998V33.1998C35.4759 33.2018 40.9139 6.80176 27.4299 6.80176Z" fill="black" />
                                </svg>

                                <div className="flex gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path d="M12.2083 31.5381L14.275 22.6831L7.40332 16.7297L16.455 15.9464L20 7.59473L23.545 15.9447L32.595 16.7281L25.7233 22.6814L27.7917 31.5364L20 26.8364L12.2083 31.5381Z" fill="#FFD700" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path d="M12.2083 31.5381L14.275 22.6831L7.40332 16.7297L16.455 15.9464L20 7.59473L23.545 15.9447L32.595 16.7281L25.7233 22.6814L27.7917 31.5364L20 26.8364L12.2083 31.5381Z" fill="#FFD700" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path d="M12.2083 31.5381L14.275 22.6831L7.40332 16.7297L16.455 15.9464L20 7.59473L23.545 15.9447L32.595 16.7281L25.7233 22.6814L27.7917 31.5364L20 26.8364L12.2083 31.5381Z" fill="#FFD700" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path d="M12.2083 31.5381L14.275 22.6831L7.40332 16.7297L16.455 15.9464L20 7.59473L23.545 15.9447L32.595 16.7281L25.7233 22.6814L27.7917 31.5364L20 26.8364L12.2083 31.5381Z" fill="#FFD700" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path d="M12.2083 31.5381L14.275 22.6831L7.40332 16.7297L16.455 15.9464L20 7.59473L23.545 15.9447L32.595 16.7281L25.7233 22.6814L27.7917 31.5364L20 26.8364L12.2083 31.5381Z" fill="#FFD700" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-[15px] md:text-[36px] font-[500] text-[#000] h-[27vh] mb-6">{item.comment}</p>
                            <div className="flex items-center justify-between top pt-4 mt-auto">
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={32}
                                        height={32}
                                        className="rounded-full"
                                    />
                                    <span className="text-[15px] md:text-[24px] font-[500] text-[#000]">{item.name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Testimonials;
