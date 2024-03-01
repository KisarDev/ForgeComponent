import TopCategoryComponent from '../components/TopCategory/TopCategory'
import topCategoryDate, { title } from '../components/TopCategory/dados'
import SearchByCategoryDate from '../components/SearchByCategory/dados'
import SimpleCardDate from '../components/SimpleCard/dados'
import CardVeiculo from '../components/SimpleCard/card'
import SearchByCategory from '../components/SearchByCategory/SearchByCategory'
import BoxUlLinks from '../components/footer/boxUlLinks/boxUlLinks'

import footerDate from '../components/footer/boxUlLinks/dados'
import Newslatter from '../components/newslatter/Newslatter'
import newslatterDate from '../components/newslatter/dados'
import PerksBox from '../components/PerksBox/PerksBox'
import perksBoxData from '../components/PerksBox/dados'
import BoxSocialMidia from '../components/BoxSocialMidia/BoxSocialMidia'
import boxSocialMidiaData from '../components/BoxSocialMidia/dados'
import BoxDestaque from '../components/BoxDestaque/BoxDestaque'
import BoxDestaqueData from '../components/BoxDestaque/dados'
import MainCategoryRounded from '../components/MainCategoryRounded/MainCategoryRounded'
import MainCategoryRoundedData from '../components/MainCategoryRounded/dados'
import SkeletonComponent from '../components/Skeleton/skeleton';
import ProductComponent from '../components/Product/product'
import productData from '../components/Product/dados'
import SimpleTable from '../components/simpleTable/simpleTable'
import simpleTableData from '../components/simpleTable/dados'
import ChangeMainImage from '../components/changeMainImage/changeMainImage'
import BasicFooter from '../components/basicFooter/basicFooter'

import EscolherPneu from '../components/pneu/escolherPneu'
import { pneuData, aroData } from '../components/pneu/dados'

export default function ComponentRender() {
    return (
        <div>
            <h1>OLá</h1>
            <div className='hidden'>
                <CardVeiculo dados={SimpleCardDate} title={title} />

                <div className="flex justify-center">
                    <div className="flex max-w-[1140px] lg:flex-wrap max-lg:overflow-scroll lg:justify-center">
                        {SearchByCategoryDate.map((categoria, index) => {
                            return (
                                <SearchByCategory key={index} title={categoria.title} img={categoria.img} />
                            )
                        })}

                    </div>
                </div>

                <TopCategoryComponent categories={topCategoryDate} />

                <div className="footer flex justify-center items-center">
                    <BoxUlLinks dados={footerDate} title={"Ajuda e suporte"} />
                </div>
                <div className="footer flex justify-center items-center">
                    <Newslatter title={newslatterDate.title} subtitle={newslatterDate.subtitle} placeholder={newslatterDate.placeholder} button={newslatterDate.button} />
                </div>



                <div className='flex justify-center items-center bg-[#F6F6F6] border'>
                    <PerksBox dados={perksBoxData} />

                </div>
                <div className='flex justify-center items-center bg-[#F6F6F6] border'>
                    <BoxSocialMidia dados={boxSocialMidiaData} title='siga-nos em:' />
                </div>

                <div className='flex justify-center items-center bg-[#F6F6F6] border'>
                    <BoxDestaque dados={BoxDestaqueData} />
                </div>

                <div className='flex justify-center items-center bg-[#F6F6F6] border'>
                    <MainCategoryRounded dados={MainCategoryRoundedData} title='PRINCIPAIS CATEGORIAS' />
                </div>




            </div>

            <div className='hidden'>
                <SkeletonComponent />
            </div>


            <div className='hidden'>

                <ProductComponent props={productData} />
            </div>

            <div className='hidden'>
                <SimpleTable dados={simpleTableData} />
            </div>

            <div className='hidden'>
                <ChangeMainImage images={images} />
            </div>


            <div className='hidden'>
                <BasicFooter />
            </div>

            <div className='flex items-center justify-center p-5'>
                <EscolherPneu title='Encontre o pneu ideal para voce' image="https://media.discordapp.net/attachments/1077970565945622588/1212456702499356704/image.png?ex=65f1e74c&is=65df724c&hm=adbfb23a057a0f80204bbdf0fb6b306fbd08184ed7e0ec801220ec86a4f398ae&=&format=webp&quality=lossless" aroData={aroData} pneuData={pneuData} />
            </div>
        </div>
    )
}