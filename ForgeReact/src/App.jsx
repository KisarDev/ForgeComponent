import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopCategoryComponent from './components/TopCategory/TopCategory'

const dados =
  [
    {
      img: "https://media.discordapp.net/attachments/1077970565945622588/1210621394786975764/image.png?ex=65eb3a08&is=65d8c508&hm=8559438d9782cac5376120099ae0753d6e99fab1e8376728fa36412a177f685d&=&format=webp&quality=lossless"
    }
  ]

  function App() {
    return (
      <div>
        {/* Usando a função map para renderizar cada item em dados */}
        {dados.map((dado, index) => (
          <TopCategoryComponent key={index} img={dado.img} />
        ))}
      </div>
    );
  }

export default App
