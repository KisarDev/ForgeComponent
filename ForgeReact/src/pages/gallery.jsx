import Content from "../components/galleryComponents/content";
import contentData from "../components/galleryComponents/dados";
import FooterPodium from "../components/footerPodium";
export default function GalleryPage() {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-2xl text-black bg-gradient-to-r w-full gap-2 font-[poppins]">
                <div className="flex flex-col md:w-[1200px] justify-center">
                    <h1 className="text-4xl text-center">ForgeComponent
                    </h1>
                    <h1 className="text-2xl text-center">GALLERY</h1>
                    <div className="flex flex-col gap-4">
                        <Content contentData={contentData} />
                    </div>
                </div>
            </div>

            <FooterPodium />
        </>
    )
}