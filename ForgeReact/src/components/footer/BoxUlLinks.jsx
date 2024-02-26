export default function BoxUlLinks({ dados, title }) {
    return (
        
            <div className=" flex flex-col bg-black text-white font gap-2">
                <h1 className="text-xl font-bold">{title}</h1>
                <ul>
                    {dados.map((dado, index) => (
                        <li key={index}><a href={dado.link}>{dado.title}</a></li>
                    ))}
                </ul>
            </div>
    )
}