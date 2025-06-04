import GalleryPreview from "@components/gallery/GalleryPreview";
import HeaderGallery from "@components/gallery/HeadeyGallery";

export default function Gallery() {
    return (
        <div className=" bg-[#afafaf]">
            <HeaderGallery />
            <GalleryPreview />

        </div>
    );
}
