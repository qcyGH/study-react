export function Task (props) {
    return <h2 className="font-sans my-3 mx-5 text-3xl">
        {props.name}
        <button
            onClick={e => props.func(props.id)}
            className="font-mono text-2xl bg-green-800 text-slate-100 mx-3 py-1 px-4 rounded-lg hover:rounded-xl shadow shadow-green-800/50 transition-all duration-150  ease-in hover:shadow-green-800/80 hover:bg-green-700 active:shadow-none"
        >
            Done
        </button>
    </h2>
}