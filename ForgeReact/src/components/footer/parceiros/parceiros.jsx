export default function Parceiros({ dados }) {
    return (
        <div className="flex flex-col md:flex-row gap-5 w-[1200px] items-center justify-center border-b border-black py-4 bg-[#F6F6F6]">
            {dados.map((dado, index) => (
                <div key={index} className="">
                    <a href={dado.link}>
                        <img src={dado.img} alt={`Imagem do parceiro ${index + 1}`} className={`${index === dados.length -1 ? "w-[70px]": "w-[100px]"} h-auto p-2`} />
                    </a>
                </div>

            ))}

        </div>
    );
}
