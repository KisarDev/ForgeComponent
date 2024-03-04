import  Icon  from '../icon/icon';

export default function BoxSocialMidia({ dados, title, direction = 'row' }) {
    return (
        <div className={`flex ${direction == "col" ? "flex-col" : "flex-row"} gap-2 text-white`} >
            <h1 className='font-bold'>{title}</h1>

            <div className="flex gap-x-6 gap-y-1 items-center">
                {dados.map((dado, index) => (
                    <a key={index} href={dado.link} target='_blank'><Icon svgString={dado.icon} /></a>
                ))}
            </div>

        </div >
    );
}
