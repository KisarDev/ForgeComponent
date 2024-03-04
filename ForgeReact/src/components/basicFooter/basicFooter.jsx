import BoxSocialMidia from './BoxSocialMidia/BoxSocialMidia'
import boxSocialMidiaData from '../BoxSocialMidia/dados'
import BoxUlLinks from './boxUlLinks/boxUlLinks'
import boxUlData from './boxUlLinks/dados'
import Parceiros from './parceiros/parceiros'
import parceirosData from './parceiros/dados'

export default function BasicFooter() {
    return (
        <div id="basicFooter" className=" flex flex-col gap-4 w-full md:items-center md:justify-center">
            <div className='flex flex-col md:flex-row justify-center bg-[#1651B8] p-4 items-center w-full'>
                <BoxSocialMidia dados={boxSocialMidiaData} title="Siga-nos em:" />
            </div>
            <div className='flex flex-col md:flex-row justify-between px-4 md:w-[1200px] items-center'>
                <div className='flex flex-col md:flex-row md:border-r px-8 border-black'>
                <BoxUlLinks title={'CONTATO'} dados={boxUlData} have_icon={true}/>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:border-r px-8 border-black'>
                    <BoxUlLinks title={'CONTATO'} dados={boxUlData} />
                    <BoxUlLinks title={'CONTATO'} dados={boxUlData} />
                </div>


                <img src="https://cdn.discordapp.com/attachments/1077970565945622588/1212401361237450793/image.png?ex=65f1b3c1&is=65df3ec1&hm=69945291e54dd534ab645ab611d9c753ea627767deeb798182507d02f4f81f4f&" alt="" className='max-w-[186px] py-6 md:p-6' />
            </div>
            <div className='flex items-center justify-center '>
                <Parceiros dados={parceirosData} />
            </div>

        </div>

    )
}