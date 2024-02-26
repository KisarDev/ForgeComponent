import { Icon } from '../../utils/Icon'
export default function BoxDestaque({ dados }) {
    return (
        <div className="flex-col flex md:flex-row gap-x-3 gap-y-2  ">
            {dados.map((dado, index) => (
                <div key={index} className="p-2  px-8 flex items-center justify-center border rounded-xl even:border-[#C92B89] gap-2 odd:bg-[#F0E5EC] even:bg-white">
                    <Icon svgString={dado.icon} />
                    <h1>{dado.title}</h1>
                </div>
            )
            )}


        </div>
    )
}