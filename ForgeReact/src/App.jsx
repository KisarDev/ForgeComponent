import { Component, useEffect, useState } from 'react'
import TopCategoryComponent from './components/TopCategory/TopCategory'
import topCategoryDate, { title } from './components/TopCategory/dados'
import SearchByCategoryDate from './components/SearchByCategory/dados'
import SimpleCardDate from './components/SimpleCard/dados'
import CardVeiculo from './components/SimpleCard/card'
import SearchByCategory from './components/SearchByCategory/SearchByCategory'
import BoxUlLinks from './components/footer/BoxUlLinks'

import footerDate from './components/footer/dados'
import Newslatter from './components/newslatter/Newslatter'
import newslatterDate from './components/newslatter/dados'
import PerksBox from './components/PerksBox/PerksBox'
import perksBoxData from './components/PerksBox/dados'
import BoxSocialMidia from './components/BoxSocialMidia/BoxSocialMidia'
import boxSocialMidiaData from './components/BoxSocialMidia/dados'
import BoxDestaque from './components/BoxDestaque/BoxDestaque'
import BoxDestaqueData from './components/BoxDestaque/dados'
import MainCategoryRounded from './components/MainCategoryRounded/MainCategoryRounded'
import MainCategoryRoundedData from './components/MainCategoryRounded/dados'
function App() {
  return (
    <div>
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



  );
}

export default App
