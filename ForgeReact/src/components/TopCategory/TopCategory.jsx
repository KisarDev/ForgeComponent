import Card from "./Card";

export default function TopCategoryComponent({ categories }) {
    return (
        <div className="flex flex-col items-center justify-center h-full" id="Centralizador de componentes">
            <div className="m-2 text-2xl font-bold text-center md:text-4xl" id="title">TOP CATEGORIAS MAIS BUSCADAS</div>

            <div className="flex flex-row md:flex-wrap max-w-[1200px] w-full overflow-auto">
                {categories.map(category => {

                    return (
                        <div className="p-2 min-w-[90%] max-w-[90%] md:min-w-[50%] md:max-w-[50%]">
                            <Card img={category.img} title={category.title} />
                        </div>
                    )

                })}
            </div>
        </div>
    )
}