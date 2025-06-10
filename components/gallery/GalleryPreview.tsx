import CustomImage from "@components/ui/CustomImage";
import Image from "next/image";


const pencilPortraits = [
    { id: 1, title: "Portrait 1", image: "/images/img1.png" },
    { id: 2, title: "Portrait 2", image: "/images/img2.png" },
    { id: 3, title: "Portrait 3", image: "/images/img3.png" },
    { id: 4, title: "Portrait 4", image: "/images/img4.png" },
    { id: 5, title: "Portrait 5", image: "/images/img5.png" },
    { id: 6, title: "Portrait 6", image: "/images/img6.png" },
    { id: 7, title: "Portrait 7", image: "/images/img7.png" },
    { id: 8, title: "Portrait 8", image: "/images/img8.png" },
    { id: 9, title: "Portrait 9", image: "/images/img9.png" },
    { id: 10, title: "Portrait 10", image: "/images/img10.png" },
    { id: 11, title: "Portrait 11", image: "/images/img11.png" },
    { id: 12, title: "Portrait 12", image: "/images/img12.png" },
    { id: 13, title: "Portrait 13", image: "/images/img13.png" },
    { id: 14, title: "Portrait 14", image: "/images/img14.png" },
    { id: 15, title: "Portrait 15", image: "/images/img15.png" },
    { id: 16, title: "Portrait 16", image: "/images/img16.png" },
    { id: 17, title: "Portrait 17", image: "/images/img17.png" }
];

// Mural Paintings Array
const muralPaintings = [
    { id: 1, title: "Mural 1", image: "/images/img18.png" },
    { id: 2, title: "Mural 2", image: "/images/img19.png" },
    { id: 3, title: "Mural 3", image: "/images/img20.png" },
    { id: 4, title: "Mural 4", image: "/images/img21.png" },
    { id: 5, title: "Mural 5", image: "/images/img22.png" }
];

const GalleryPreview = () => {
    return (
        <div className="mt-[95px] pb-[150px]" >

             <div className=" text-center mb-[103px] " >

                <h1 className="text-[20px] md:text-[48px] mx-auto font-[500] text-[#000]">  Welcome to my artistic haven where pencil art and mural paintings blend together in a stunning display of color and creativity. </h1>
            </div>




            <div className="max-w-7xl mx-auto p-6">
                {/* Pencil Portraits Section */}
                <div className="mb-16">
                    <h2 className="text-[20px] md:text-[48px] font-[400] text-[#000] mb-4">PENCIL PORTRAITS</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pencilPortraits.map((portrait) => (
                            <div
                                key={portrait.id}
                                className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="aspect-[3/4] overflow-hidden">
                                    <img
                                        src={portrait.image}
                                        alt={portrait.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

                {/* Mural Paintings Section */}
                <div>
                    <h2 className="text-[20px] md:text-[48px] font-[400] text-[#000] mb-2 ">MURAL PAINTINGS</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {muralPaintings.map((mural) => (
                            <div
                                key={mural.id}
                                className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="aspect-[3/4] overflow-hidden">
                                    <img
                                        src={mural.image}
                                        alt={mural.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default GalleryPreview