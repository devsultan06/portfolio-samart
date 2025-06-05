import CustomImage from "@components/ui/CustomImage";
import Image from "next/image";

const Review = () => {
    return (
        <div className="mt-[95px]">


            <div className=" text-center mb-[103px] " >

                <h1 className="text-[20px] md:text-[48px] w-full md:w-[1200px] mx-auto font-[500] text-[#000]">                    Review my resume to learn about my expertise and achievements.
                </h1>
            </div>



            {/* Resume Content */}
            <div className=" pb-[150px]">
                <div className="">
                    {/* Introduction */}
                    <div className="mb-12">
                        <p className="text-[#000] text-[14px] md:text-[30px] font-[500]  ">
                            I'm a UI/UX designer with a passion for creating digital experiences that feels natural, enjoyable and
                            meaningful. With over 2years of experience, I have honed my skills in collaboration with teams to
                            design solutions that not only meet business objectives but also delight users. I believe in the
                            power of data to inform my great design decisions and I am dedicated to using research and
                            analytics to craft intuitive and engaging experiences. My goal is to make user friendly design and
                            positively impact people's lives through the products I design.
                        </p>
                    </div>

                    {/* Skills Section */}
                    <div className="mb-12 text-[#000]">
                        <h2 className="text-[20px] md:text-[48px] font-[400] text-[#000] mb-[28px]">SKILLS</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-gray-800 rounded-full mt-5 mr-4 flex-shrink-0"></span>
                                <span className="text-[14px] md:text-[30px] font-[500]">User Research and Usability Test</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-gray-800 rounded-full mt-5 mr-4 flex-shrink-0"></span>
                                <span className="text-[14px] md:text-[30px] font-[500]">Proficient Design Tool; FIGMA</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-gray-800 rounded-full mt-5 mr-4 flex-shrink-0"></span>
                                <span className="text-[14px] md:text-[30px] font-[500]">Wire Framing and Prototyping</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-gray-800 rounded-full mt-5 mr-4 flex-shrink-0"></span>
                                <span className="text-[14px] md:text-[30px] font-[500]">Interaction Design</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-gray-800 rounded-full mt-5 mr-4 flex-shrink-0"></span>
                                <span className="text-[14px] md:text-[30px] font-[500]">Visual Design</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-gray-800 rounded-full mt-5 mr-4 flex-shrink-0"></span>
                                <span className="text-[14px] md:text-[30px] font-[500]">Responsive Design</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-gray-800 rounded-full mt-5 mr-4 flex-shrink-0"></span>
                                <span className="text-[14px] md:text-[30px] font-[500]">Communication</span>
                            </li>
                        </ul>
                    </div>

                    {/* Work Experience Section */}
                    <div className="mb-12 text-[#000]">
                        <h2 className="text-[20px] md:text-[48px] font-[400] text-[#000] mb-[28px]">WORK EXPERIENCE</h2>
                        <div className="mb-4">
                            <h3 className="text-[30px] font-[500]">Freelancer | Currently Working Here</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-gray-800 rounded-full mt-5 mr-4 flex-shrink-0"></span>
                                <span className="text-[14px] md:text-[30px] font-[500]">Communicating with stakeholders and creating a survey about the website or application.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-gray-800 rounded-full mt-5 mr-4 flex-shrink-0"></span>
                                <span className="text-[14px] md:text-[30px] font-[500]">Manage projects scopes an deadlines, ensuring timely delivery of high quality UX/UI elements in alignment with business objectives.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-gray-800 rounded-full mt-5 mr-4 flex-shrink-0"></span>
                                <span className="text-[14px] md:text-[30px] font-[500]">Engage with stakeholders, end-users and research teams to gather insights and requirements, translating them into solutions.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-gray-800 rounded-full mt-5 mr-4 flex-shrink-0"></span>
                                <span className="text-[14px] md:text-[30px] font-[500]">Making sure every design is well responsive and user friendly.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Education Section */}
                    <div className="text-[#000]">
                        <h2 className="text-[20px] md:text-[48px] font-[400] text-[#000] mb-[28px]">EDUCATION</h2>
                        <div>
                            <h3 className="text-[14px] md:text-[30px] font-[500]">ST GRAAGS COLLEGE</h3>
                            <p className="text-[14px] md:text-[30px] font-[500]">Studied Art | 2010 - 2016</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review