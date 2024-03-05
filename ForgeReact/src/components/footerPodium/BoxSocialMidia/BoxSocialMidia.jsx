import Icon from './icon/icon';

export default function BoxSocialMidia({ dados, title, direction = 'row' }) {
    return (
        <div className={`flex ${direction == "col" ? "flex-col" : "flex-row"} gap-2 text-white`} >
            <h1 className=''>{title}</h1>

            <div className="flex  gap-y-1 items-center ">
                {dados.map((dado, index) => (
                    <div className='border border-red-700 rounded-full w-[42px] h-[42px] flex flex-col items-center justify-center'>
                        <a className='' key={index} href={dado.link} target='_blank'><Icon svgString={dado.icon} className='' /></a>
                    </div>
                ))}
            </div>

        </div >
    );
}
