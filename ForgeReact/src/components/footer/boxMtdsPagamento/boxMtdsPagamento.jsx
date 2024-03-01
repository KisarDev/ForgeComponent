export default function MetodosDePagamento({ dados, title }) {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">{title}</h1>
            <div className="flex w-[200px] flex-wrap gap-1">
                {dados.map((dado, index) => (
                    <img key={index} className="w-[62px] h-[32px]" src={dado.url} alt="" />
                )
                )}
            </div>
            <div className="pb-12">

            </div>

        </div>
    )
}