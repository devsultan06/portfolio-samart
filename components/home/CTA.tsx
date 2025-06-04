import Link from "next/link";

const CTA = () => {
    return (
        <div className="relative mt-[125px] pb-[125px]">
            {/* Section tag */}


            {/* Background image container */}
            <div
                className="relative w-full h-[588px] rounded-md overflow-hidden border-2 border-blue-500 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/cta.png')" }} // replace with your image path
            >

                <Link href="/gallery">
                    <button className="px-[50px] absolute right-[120px] bottom-[60px] py-[10px] gal text-white text-[22px] font-[500] transition-transform">
                        My Gallery
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default CTA;
