export default function Card({img}) {
    return (
        <div className="rounded-2xl" id="card">
            <img src={img} className="rounded-lg"/>
        </div>
    )
}
