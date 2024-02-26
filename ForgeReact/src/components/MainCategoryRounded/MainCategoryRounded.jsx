import { Icon } from '../../utils/Icon'
export default function MainCategoryRounded({ dados, title }) {
    return (
        <div className='flex flex-col gap-8 w-full'>
            <h1 className='font-bold text-center text-2xl'>{title}</h1>
            <div className="flex gap-8 overflow-auto w-full md:justify-center">
                {dados.map((dado, index) => (
                    <div key={index} className='flex flex-col items-center justify-center rounded-full '>


                        <i className='rounded-full flex items-center justify-center'>
                            <Icon svgString={dado.icon} className='p-'></Icon>
                        </i>

                        <h1 className='text-center'>{dado.title}</h1>

                    </div>
                )
                )}

            </div>
        </div>
    )
}