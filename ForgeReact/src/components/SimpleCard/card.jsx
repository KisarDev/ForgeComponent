export default function CardVeiculo({ dados, title}) {
    console.log(dados);
    return (
        <div>
            <div className="p-5 text-center text-4xl font-bold">{title}</div>
            <div className="flex justify-center">
                <div className="flex max-w-[1140px] lg:flex-wrap max-lg:overflow-scroll lg:justify-center">

                    <div className="p-2 flex md:flex-wrap gap-4">
                        {dados.map((dado, index) => {
                            return (
                            <div key={index} className="flex h-40 w-52 flex-col rounded-lg border border-gray-200 bg-white p-2 shadow-xl dark:border-gray-50">
                                <div className="flex grow items-center">
                                    <img src={dado.img} className="mx-auto max-h-full max-w-full" />
                                </div>
                                <p className="text-center font-serif uppercase">{dado.title}</p>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}