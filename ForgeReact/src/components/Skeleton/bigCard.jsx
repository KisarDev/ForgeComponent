export default function BigCardComponent() {
    return (

        <div role="status" className="max-md:min-w-[80%] p-4 border border-gray-100 rounded shadow animate-pulse md:p-6 ">
            <div className="flex items-center justify-center h-48 mb-4 bg-gray-200 rounded">

            </div>
            <div className="h-3.0 rounded-full w-48 mb-4"></div>
                <div className="h-5 bg-gray-200 rounded-full mb-2.5 w-16"></div>
            <div className="flex flex-col gap-4">
                <div className="h-2  rounded-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full"></div>
                <div className="h-2 bg-gray-200 rounded-full"></div>
                <div className="h-2 bg-gray-200 w-36 rounded-full"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>

    )
}