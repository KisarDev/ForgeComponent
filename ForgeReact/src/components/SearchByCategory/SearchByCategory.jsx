import CardPecas from "./CardPecas";

export default function BusquePorCategoriasComponente({ img }) {
    return (

        <div>
            <div className="p-5 text-4xl font-bold">BUSCA POR CATEGORIA</div>

            <div className="gap-2 flex p-2">
                <div className="w-[40%] flex shadow-xl ">
                    <img src={img} className="mx-auto rounded-xl w-full h-full object-cover" />
                </div>
                <div className="w-[60%] grid grid-cols-3 gap-2">
                    <CardPecas img={img} />
                    <CardPecas img={img} />
                    <CardPecas img={img} />
                    <CardPecas img={img} />
                    <CardPecas img={img} />
                    <CardPecas img={img} />

                </div>

            </div>
        </div>

    )
}
