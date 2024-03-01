import BoxSocialMidia from "../components/BoxSocialMidia/BoxSocialMidia";
import boxSocialMidiaData from "../components/BoxSocialMidia/dados";
import BoxUlLinks from "../components/footer/boxUlLinks/boxUlLinks";
import footerDate from "../components/footer/boxUlLinks/dados";
import Content from "../components/galleryComponents/content";
import contentData from "../components/galleryComponents/dados";
import { Icon } from "../utils/Icon";
export default function GalleryPage() {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-2xl text-black bg-gradient-to-r w-full gap-2 font-[poppins]">
                <h1 className="text-4xl">ForgeComponent
                </h1>
                <h1 className="text-2xl">GALLERY</h1>
                <div className="flex flex-col gap-4">
                    <Content contentData={contentData} />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">

                <div className="part-1 flex flex-col justify-center items-center border">
                    <div className="w-[1200px] flex justify-between gap-4 p-4">
                        <div>
                            <h1>Inscreva-se e confira tudo!</h1>
                            <h2>Digite seu e-mail e aproveite esta vantagem na sua 1ª compra.</h2>
                        </div>
                        <div className="flex justify-between gap-2 p-2 w-[506px]">
                            <input className="rounded" type="text" placeholder="Digite seu e-mail" />
                            <button className="px-6 rounded-full">Enviar</button>
                        </div>
                    </div>
                </div>

                <div className="part-2 w-[1200px] flex flex-col justify-center items-center border-b border-black">
                    <div className="w-[662px] flex flex-col justify-center items-center border">
                        <div className="w-[260px] flex flex-col text-center border">
                            <h1>Atendimento Loja Virtual</h1>
                            <h2>Segunda a sexta das 8h30 às 17h30</h2>
                        </div>
                        <div className="flex justify-between border gap-5 text-white">
                            <div className="border flex bg-[#E40028] rounded-full px-2 p-1"><Icon svgString="#"></Icon>(47) 3018-1248</div>
                            <div className="border flex bg-[#E40028] rounded-full px-2 p-1"><Icon svgString="#"></Icon>(47) 3018-1248</div>
                            <div className="border flex bg-[#E40028] rounded-full px-2 p-1"><Icon svgString="#"></Icon>saojose@podiumsom.com.br</div>
                        </div>
                    </div>
                </div>

                <div className="part-3 w-[1200px] flex justify-between">

                    <div className="flex flex-col border bg-black">
                        <img className="w-[179px]" src="https://media.discordapp.net/attachments/979432429569843280/1213164791640625285/image.png?ex=65f47ac1&is=65e205c1&hm=4cb6b21544532a2691ede464383f5d6df9e951bef0ced3077c86c066538c9ef6&=&format=webp&quality=lossless" alt="" />
                        <BoxSocialMidia dados={boxSocialMidiaData} title="sina-nos em:" direction="col" />
                    </div>
                    <div className="flex flex-col border">
                        <BoxUlLinks dados={footerDate} title="Ajude e suporte" />
                    </div>
                    <div className="flex flex-col border">
                        <BoxUlLinks dados={footerDate} title="Ajude e suporte" />
                    </div>

                </div>
            </div>
        </>
    )
}