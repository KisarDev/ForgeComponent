import BoxSocialMidia from "./BoxSocialMidia/BoxSocialMidia";
import boxSocialMidiaData from "./BoxSocialMidia/dados";
import MetodosDePagamento from "./boxMtdsPagamento/boxMtdsPagamento"
import boxMtdsPagamentosData from "./boxMtdsPagamento/dados";
import BoxUlLinks from "./boxUlLinks/boxUlLinks";
import boxUlData from "./boxUlLinks/dados";
import Icon from "./icon/icon"
import podiumData from "./podiumData";
export default function FooterPodium() {
    return (
        <div id="PODIUM-FOOTER" className="flex flex-col items-center justify-center bg-black text-white gap-4">

            <div className="part-1 flex flex-col md:justify-center md:items-center bg-[#1C1C25] w-full md:h-[120px]">
                <div className="md:w-[1200px] justify-center md:flex md:justify-between">
                    <div className="">
                        <h3 className="font-bold">{podiumData.props.newsLetter.value.title}</h3>
                        <h3>{podiumData.props.newsLetter.value.subtitle}</h3>
                    </div>
                    <div className="flex justify-between md:gap-4 md:w-[600px]">
                        <input className="rounded-full md:grow p-2 placeholder:px-2" type="text" placeholder={podiumData.props.newsLetter.value.placeholder} />
                        <button className="px-12 rounded-full bg-[#E40028] font-bold text-lg">Enviar</button>
                    </div>
                </div>
            </div>

            <div className="part-2 md:w-[1200px] flex flex-col justify-center items-center pb-2">
                <div className="md:w-[662px] flex flex-col justify-center items-center gap-4">
                    <div className="md:w-[270px] flex flex-col text-center pt-6">
                        <h3 className="font-bold">{podiumData.props.atendimento.value.title}</h3>
                        <h3>{podiumData.props.atendimento.value.subtitle}</h3>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-4 text-white">
                        {podiumData.props.atendimento.value.contacts.map((prop, index) => (

                            <div className="flex bg-[#E40028] rounded-full p-2 gap-2 gap-x-4"><Icon svgString={prop.icon} className="p-1 px-4"></Icon>{prop.title}</div>
                        )

                        )}

                    </div>
                </div>
            </div>

            <div className="part-3 max-md:justify-center max-md:items-center md:w-[1200px] flex flex-col md:flex-row md:justify-between text-gray-200 gap-10 border-t  border-gray-700 pt-6">

                <div className="flex flex-col bg-black max-md:items-center md:justify-between md:h-[142px]">
                    <img className="w-[179px]" src={podiumData.props.logo.value} alt="" />
                    <BoxSocialMidia dados={boxSocialMidiaData} title="siga-nos em:" direction="col" />
                </div>

                <div className="flex flex-col">
                    <BoxUlLinks dados={boxUlData} title="Ajude e suporte" className="" />
                </div>

                <div className="flex flex-col">
                    <BoxUlLinks dados={boxUlData} title="Ajude e suporte" />
                </div>

                <div className="flex flex-col items-center">
                    <MetodosDePagamento dados={boxMtdsPagamentosData} title="Métodos de pagamento" />
                </div>

                <div className="flex flex-col w-[188px] gap-4">
                    {podiumData.props.banner.value.map((prop, index) => (

                        <img key={index} src={prop} alt="" />
                    )

                    )}

                </div>

            </div>

            <div className="part-4 flex flex-col md:flex-row w-full bg-[#1C1C25] text-gray-200 justify-center max-md:items-center md:h-[85px] max-md:px-4">
                <div className="md:w-[1200px] flex flex-col md:flex-row justify-center md:justify-between pt-4 text-[7pt]">
                    <div className="gap-2">
                        <h3 className="font-bold text-[8pt]">{podiumData.props.rodape.values.cnpj}</h3>
                        <h3 className="text-[7pt] py-4 text-gray-500">{podiumData.props.rodape.values.license}</h3>
                    </div>
                    <div className="flex flex-col md:flex-row text-gray-500 gap-x-2">
                        <h3>Desenvolvido por:</h3>
                        <img className="w-[82px] h-[24px] pb-2" src="https://media.discordapp.net/attachments/393069909124317185/1214190303133831191/image.png?ex=65f835d6&is=65e5c0d6&hm=49b3867de2131a0a795ab121ed976479b20ba0af38e3aec3b01480b438ba2780&=&format=webp&quality=lossless" alt="" />
                        <h3>Feito com MercadoShops</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}