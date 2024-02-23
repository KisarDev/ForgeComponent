import Card from "./Card";

export default function TopCategoryComponent({img}) {
    return (
        <div className="flex flex-col justify-center items-center h-full" id="Centralizador de componentes">

            <div className="font-bold text-4xl m-2" id="title">TOP CATEGORIAS MAIS BUSCADAS</div>
            <div className="flex gap-1 flex-col md:flex-row" id="box">
                <div className="flex flex-col md:gap-1 gap-3" id="coluna-1">
                    <Card img={img}/>
                    <Card img={img}/>
                    <Card img={img}/>
                </div>

                <div className="flex flex-col md:gap-1 gap-3" id="coluna-2">
                    <Card img={img}/>
                    <Card img={img}/>
                    <Card img={img}/>
                </div>

            </div>
        </div>
    )
}