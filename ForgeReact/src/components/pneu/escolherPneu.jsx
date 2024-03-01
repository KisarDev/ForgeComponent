export default function EscolherPneu({ pneuData, aroData, image, title }) {
    return (
        <div className="flex flex-col md:flex-row md:w-[1200px] md:h-[240px] md:gap-[64px] rounded border items-center justify-center">
            <img className="max-w-[224px]" src={image} alt="" />
            <div className="flex flex-col md:w-[688] gap-[32px]">
                <h1 className="text-2xl font-bold">{title}</h1>
                <div className="flex flex-col md:flex-row md:justify-between gap-8 ">

                    <div className="w-[40%]">
                        <h1 className="font-bold">veiculo</h1>
                        <select className="border rounded-full w-full p-2">
                            {pneuData.map((dado, index) => (
                                <option key={index} value={dado.value}>{dado.label}</option>
                            )
                            )}
                        </select>


                    </div>
                    <div className="w-[40%]">
                        <h1 className="font-bold">aro</h1>
                        <select className="border rounded-full w-full p-2">
                            {aroData.map((dado, index) => (
                                <option key={index} value={dado.value}>{dado.label}</option>
                            )
                            )}


                        </select>

                    </div>

                    <div className="w-[20%] md:relative">
                        <button className="font-bold text-white bg-[#1BBA5B] rounded-full py-1 px-8 md:absolute md:top-[30px] md:left-[20px] text-center">Buscar</button>
                    </div>

                </div>

            </div>


        </div>
    )
}