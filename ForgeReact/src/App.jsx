import { useState } from 'react'
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

function App() {
  function Test() {
    return (
      <div className="debug flex justify-center items-center">
        <div className="p-1">Filho 1</div>
        <div className="p-1">
          <div className="p-1">Filho 2</div>
          <div className="p-1">
            <div className="flex p-1">
              <div className="p-1">Filho 3</div>
              <div className="p-1">Filho 4</div>
            </div>
            <div className="p-1">Filho 4</div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      <Test />
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
    </div>


  );
}

export default App
