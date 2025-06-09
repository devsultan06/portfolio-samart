import Link from "next/link";

const CTA = () => {
    return (
        <div className="relative mt-[125px] pb-[125px]">
            {/* Section tag */}


            {/* Background image container */}
            <div
                className="relative w-full h-[588px] pt-[200px] md:pt-[400px] px-[30px] block md:flex justify-between rounded-md overflow-hidden  bg-cover "
                style={{ backgroundImage: "url('/images/cta3.png')" }} // replace with your image path
            >

                <div  className="font-miama mb-[50px] italic">
                    <h1>Dive into my art gallery and experience
                    </h1>
                    <h1> the fusion of creativity and innovation, where art meets imagination.</h1>

                </div>

                <Link href="/gallery">
                    <button className="px-[50px] py-[10px] gal text-white text-[22px] font-[500] transition-transform">
                        My Gallery
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default CTA;
