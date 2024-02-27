export default function ProductComponent({ props }) {
    return (
        <div className="flex flex-wrap gap-5">
        {props.map((product, index) => (
                <div key={index} className="flex flex-col justify-center items-center rounded-lg shadow overflow-hidden w-[250px] h-[250px]">
                    <img className="p-4 max-w-[150px] min-w-[150px]" src={product.img} />
                    <div className="shadow min-w-full rounded border text-start">
                        <div className="text-[#113B85] font-bold text-center flex flex-col">
                            <h1>R$<span className="text-2xl">{product.price}</span>,90</h1>
                        </div>
                        <div className="text-[8pt] h-[100px]">
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
