import { Icon } from '../../utils/Icon';

export default function BoxSocialMidia({ dados, title }) {
    return (
        <div className="flex flex-col text-[#8A2A92] gap-2">
            <h1 className='font-bold'>{title}</h1>

            <div className="flex gap-x-6 gap-y-1 items-center">
                {dados.map((dado, index) => (
                    <a key={index} href={dado.link} target='_blank'><Icon svgString={dado.icon} /></a>
                ))}
            </div>

        </div>
    );
}
