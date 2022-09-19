export function Task (props) {
    return (
     <div className="flex items-between font-sans p-2 my-3 mx-5 text-2xl ease-in duration-200 hover:bg-stone-800 hover:shadow shadow-black rounded-lg">
        <h2 className="mr-3">{props.name}</h2>
        <button
            onClick={e => props.func(props.id)}
            className="font-mono text-xl bg-emerald-700 text-slate-100 ml-auto py-1 px-4 rounded-lg hover:rounded-xl shadow shadow-emerald-600/50 transition-all duration-150  ease-in hover:shadow-emerald-600/80 hover:bg-emerald-500 active:shadow-none focus-visible:outline focus-visible:outline-slate-50 outline-offset-0"
        >
            Done
        </button>
    </div>
    )
}