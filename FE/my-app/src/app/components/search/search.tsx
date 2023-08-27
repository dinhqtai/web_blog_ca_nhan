

export default function Search() {
    return (
        <div className="relative">
            <label className="sr-only"> Search </label>
            <input
                type="text"
                id="Search"
                placeholder="Search for..."
                className="w-[20%] rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
            />
            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button type="button" className="text-gray-600 hover:text-gray-700">
                    <span className="sr-only">Search</span>
                </button>
            </span>
        </div>
    );
}
