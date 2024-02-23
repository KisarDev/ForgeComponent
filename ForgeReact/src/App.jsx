import { useState } from 'react'
import TopCategoryComponent from './components/TopCategory/TopCategory'
import topCategoryDate, {title} from './components/TopCategory/dados'
import SearchByCategoryDate from './components/SearchByCategory/dados'
import SimpleCardDate from './components/SimpleCard/dados'
import CardVeiculo from './components/SimpleCard/card'
import SearchByCategory from './components/SearchByCategory/SearchByCategory'

function App() {
  return (
    <div>

      <CardVeiculo dados={SimpleCardDate} title={title}/>

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

    </div>
  );
}

export default App
