export default function Card({ className = "", img, title }) {
    return (
        <div className={"rounded-2xl h-[200px] overflow-hidden relative shadow-2xl " + className}>
            <img src={img} className="object-cover w-full h-full blur-[0.5px] opacity-95" />
            <div className="absolute inset-0 flex items-center justify-center text-center">
                <h1 className="text-2xl font-bold text-white">{title}</h1>
            </div>
        </div>
    )
}
