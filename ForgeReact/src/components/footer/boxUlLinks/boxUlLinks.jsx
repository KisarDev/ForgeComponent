import { Icon } from "../../../utils/Icon";

export default function BoxUlLinks({ dados, title, have_icon = false }) {
    return (

        <div className=" flex flex-col bg-white  font gap-2">
            <h1 className="text-xl font-bold">{title}</h1>
            <ul  className="flex flex-col">
                {dados.map((dado, index) => (

                    <li key={index}>
                        <a href={dado.link}>
                            <div className="flex gap-3 p-1">
                            {have_icon == false ? dado.title : <Icon svgString={dado.icon} />}{dado.title}
                            </div>
                        </a>
                    </li>

                ))}
            </ul>
        </div>
    )
}