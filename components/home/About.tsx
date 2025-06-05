
import CustomImage from "@components/ui/CustomImage";
const About = () => {
    return (
        <div className="mt-[125px]">
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
                <h1 className="text-[30px] md:text-[40px] font-[700]  text-[#000] ">About Me </h1>
            </div>

            <div className="block md:flex justify-between gap-[120px] mt-[96px]">

                <div className="mb-[20px] md:mb-0">
                    <CustomImage src="/images/sam.png" alt="Ripple" width={2000} height={600} className="" />

                </div>

                <div className="text-[#000] text-[18px] md:text-[25px] font-[500]">
                    <p>I’m Ademola Samuel Mayowa, a professional realistic pencil artist with over 12years of experience in creating beautiful arts. In my few years of being an artist, i have worked with two schools and i taught students and pupils how to create beautiful art and crafts, sharing my knowledge and bringing more passionate people to art field is my priority.</p>

                    <p className=" mt-[50px] md:mt-[125px]">I got into tech in the year 2023, i have always got the passion and zeal to be a designer. it’s a great and lifetime opportunity to be in the tech field. I acquired user experience and user interface skill/ knowledge from mr joseph brendan youtube lecture which took me 3 weeks to accomplish. Ever since then i have been making nice apps and website design and it feels great to have 2 careers that involves creativity.</p>
                </div>


            </div>



        </div>
    )
}

export default About