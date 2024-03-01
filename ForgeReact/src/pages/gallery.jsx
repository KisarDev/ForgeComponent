import BoxSocialMidia from "../components/BoxSocialMidia/BoxSocialMidia";
import boxSocialMidiaData from "../components/BoxSocialMidia/dados";
import MetodosDePagamento from "../components/footer/boxMtdsPagamento/boxMtdsPagamento";
import boxMtdsPagamentosData from "../components/footer/boxMtdsPagamento/dados";
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

            <div id="PODIUM-FOOTER" className="flex flex-col items-center justify-center bg-black text-white gap-4">

                <div className="part-1 flex flex-col md:justify-center md:items-center bg-[#1C1C25] w-full">
                    <div className="md:w-[1200px] justify-center md:flex md:justify-between gap-4 p-4">
                        <div>
                            <h1 className="font-bold">Inscreva-se e confira tudo!</h1>
                            <h2>Digite seu e-mail e aproveite esta vantagem na sua 1ª compra.</h2>
                        </div>
                        <div className="flex justify-between md:gap-2 p-2 md:w-[506px]">
                            <input className="rounded-full md:grow p-1" type="text" placeholder="Digite seu e-mail" />
                            <button className="px-6 rounded-full bg-[#E40028]">Enviar</button>
                        </div>
                    </div>
                </div>

                <div className="part-2 md:w-[1200px] flex flex-col justify-center items-center">
                    <div className="md:w-[662px] flex flex-col justify-center items-center gap-4">
                        <div className="md:w-[270px] flex flex-col text-center pt-6">
                            <h1 className="font-bold">Atendimento Loja Virtual</h1>
                            <h2>Segunda a sexta das 8h30 às 17h30</h2>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-5 text-white">
                            <div className="flex bg-[#E40028] rounded-full px-2 p-1"><Icon svgString="#"></Icon>(47) 3018-1248</div>
                            <div className="flex bg-[#E40028] rounded-full px-2 p-1"><Icon svgString="#"></Icon>(47) 3018-1248</div>
                            <div className="flex bg-[#E40028] rounded-full px-2 p-1"><Icon svgString="#"></Icon>saojose@podiumsom.com.br</div>
                        </div>
                    </div>
                </div>

                <div className="part-3 justify-center items-center md:w-[1200px] flex flex-col md:flex-row md:justify-between text-gray-200 gap-10 border-t py-4 px-2 border-gray-700">

                    <div className="flex flex-col bg-black">
                        <img className="w-[179px]" src="https://media.discordapp.net/attachments/979432429569843280/1213164791640625285/image.png?ex=65f47ac1&is=65e205c1&hm=4cb6b21544532a2691ede464383f5d6df9e951bef0ced3077c86c066538c9ef6&=&format=webp&quality=lossless" alt="" />
                        <BoxSocialMidia dados={boxSocialMidiaData} title="siga-nos em:" direction="col" />
                    </div>

                    <div className="flex flex-col">
                        <BoxUlLinks dados={footerDate} title="Ajude e suporte" />
                    </div>

                    <div className="flex flex-col">
                        <BoxUlLinks dados={footerDate} title="Ajude e suporte" />
                    </div>

                    <div className="flex flex-col items-center">
                        <MetodosDePagamento dados={boxMtdsPagamentosData} title="Métodos de pagamento" />
                    </div>

                    <div className="flex flex-col w-[188px]">
                        <img src="https://media.discordapp.net/attachments/979432429569843280/1213174317198614558/image.png?ex=65f483a0&is=65e20ea0&hm=7d3eebd6ea9e5b4c91dd53dd89d517683734069212f0b3440fc6a86e5c11dfaf&=&format=webp&quality=lossless" alt="" />
                        <img src="https://media.discordapp.net/attachments/979432429569843280/1213174480378003577/image.png?ex=65f483c7&is=65e20ec7&hm=f0cefd0a31ccfe4e2f692329da9927f3fe0b2d0fc6742a2de236cf1e0260a049&=&format=webp&quality=lossless" alt="" />
                    </div>

                </div>

                <div className="part-4 flex flex-col md:flex-row w-full bg-[#1C1C25] text-gray-200 justify-center items-center">
                    <div className="md:w-[1200px] flex flex-col md:flex-row justify-center md:justify-between">
                        <div className="gap-2">
                            <h1 className="font-bold text-xl">CNPJ 08.802.111/0001-23 - PODIUM SOM E ACESSORIOS AUTOMOTIVO LTDA ME</h1>
                            <h2 className="text-sm py-4 text-gray-500">2023 Podium Centro Automotivo. Todos os direitos reservados. A utilização e o acesso às informações neste site estão sujeitos a Termos e Condições estabelecidos em nosso acordo legal</h2>
                        </div>

                    </div>

                    <div className="flex flex-col md:flex-row text-gray-500 gap-x-2">
                        <h2>Desenvolvido por:</h2>
                        <img className="w-[82px]" src="https://media.discordapp.net/attachments/1075408036073582673/1213186968612110436/image.png?ex=65f48f69&is=65e21a69&hm=9f2eb52478c0211702f465d81d9da516815451780aeebbe69ca1ffa90101760d&=&format=webp&quality=lossless" alt="" />
                        <h2>Feito com MercadoShops</h2>
                    </div>

                </div>

            </div>
        </>
    )
}