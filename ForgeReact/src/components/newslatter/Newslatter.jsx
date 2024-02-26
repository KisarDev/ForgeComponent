export default function Newslatter({ title, subtitle, placeholder, button }) {
    return (
        <div className=" flex flex-col text-purple-600 gap-2">

            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h2 className="text-xl text-black">{subtitle}</h2>
                <div className="flex justify-between gap-2 pt-3">

                    <input className=" p-2 placeholder-purple-600 grow border-purple-600 border rounded" type="text" placeholder={placeholder} />

                    <button className=" border p-3 rounded bg-purple-600 text-white px-10 font-bold">{button}</button>
                </div>
            </div>

        </div>
    );
}
