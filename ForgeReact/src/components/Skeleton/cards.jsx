export default function CardSkeleton() {
    return (
        <div className="flex max-md:min-w-[80%] rounded-lg shadow-lg animate-pulse bg-zinc-100">
            <div className="w-1/3 bg-neutral-200 "></div>

            <div className="w-2/3 p-4 md:p-4 ">
                <h1 className="w-full h-2 bg-neutral-200 rounded-lg "></h1>

                <p className="w-full h-2 mt-4 bg-neutral-200 rounded-lg"></p>

                <div className="flex mt-4 item-center gap-x-2">
                    <p className="w-5 h-2 bg-neutral-200 rounded-lg "></p>
                    <p className="w-5 h-2 bg-neutral-200 rounded-lg "></p>
                    <p className="w-5 h-2 bg-neutral-200 rounded-lg "></p>
                    <p className="w-5 h-2 bg-neutral-200 rounded-lg "></p>
                    <p className="w-5 h-2 bg-neutral-200 rounded-lg "></p>
                </div>

                <div className="flex justify-between mt-6 item-center">
                    <h1 className="w-10 h-2 bg-neutral-200 rounded-lg "></h1>

                    <div className="h-4 bg-neutral-200 rounded-lg w-28 "></div>
                </div>
            </div>
        </div>
    )
}