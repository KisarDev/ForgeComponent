export default function CardPecas({ img }) {
    return (
        <div className="flex items-center shadow-xl">
            <img src={img} className="mx-auto max-w-full rounded-xl" />
        </div>
    )

}