import { Icon } from '../../utils/Icon'
export default function PerksBox({ dados }) {
    return (
        <div className="md:flex gap-x-10 bg-[#F6F6F6] p-4">
            {dados.map((dado, index) => (
                <div key={index} className="flex flex-col justify-center items-center gap-2 md:border-r px-5">
                    <Icon svgString={dado.icon} />
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="font-bold">{dado.title}</h1>
                        <p className="text-sm">{dado.subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
