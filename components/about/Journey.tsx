import CustomImage from "@components/ui/CustomImage";
import Image from "next/image";

const timelineData = [
    {
        title: "A Real Estate Landing Page Website.",
        images: [
            "/images/estate.png",
            "/images/est2.png",
            "/images/est3.png",
            "/images/est4.png",
            "/images/est5.png",
        ],
        isLive: false,
    },
    {
        title: "A Cargo Shipping and Logistics Website.",
        images: [
            "/images/cargo1.png",
            "/images/cargo2.png",
            "/images/cargo3.png",
            "/images/cargo4.png",
            "/images/cargo5.png",

        ],
        isLive: true,
    },
];


const Journey = () => {
    return (
        <div className="mt-[95px] w-full" >
            <div className=" text-center mb-[103px] " >

                <h1 className="text-[20px] md:text-[48px] w-full md:w-[1200px] mx-auto font-[500] text-[#000]">Step into my design studio and discover the amazing projects that showcase my passion for creativity. </h1>
            </div>


            {timelineData.map((project, index) => (
                <div key={index} className="mb-24">
                    <h2 className="text-[#000] text-[20px] md:text-[40px] font-[400] mb-6">
                        {project.title}{" "}
                        {project.isLive && (
                            <span className="text-[#ff0019] font-[700] text-[20px] md:text-[48px] ml-2">(LIVE)</span>
                        )}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.images.map((src, idx) => (
                            <div key={idx} className="relative w-full  rounded-lg overflow-hidden ">
                                <Image
                                    src={src}
                                    alt={`Project image ${idx + 1}`}
                                    width={500}
                                    height={528}

                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div>
                <div>
                    <h2 className="text-[#000] font-[400] text-[20px] md:text-[40px] mb-6">
                        A Fintech Dashboard.
                    </h2>
                    <div className="relative w-[100%] mx-auto h-[80vh] md:h-[120vh] px-20">
                        <Image
                            src="/images/dashboard.png"
                            alt="Car Rental Website"
                            fill
                            className="object-cover"
                            priority
                        />
                        
                    </div>

                </div>

                <div className="mt-[50px] pb-[150px]">
                    <h2 className="text-[#000] font-[400] text-[20px] md:text-[40px] mb-6">
                        A Futuristic Furniture Website (Dummy Header Section).
                    </h2>
                    <div className="relative w-[100%] mx-auto h-[80vh] md:h-[120vh] px-20">
                        <Image
                            src="/images/futuristic.png"
                            alt="Car Rental Website"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Journey