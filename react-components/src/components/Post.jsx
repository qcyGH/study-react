export function Post (props) {
    return <h2 className="font-sans my-3 mx-5 text-lg">
        {props.name}
        <button
            onClick={e => props.func(props.id)}
            className="font-mono text-lg bg-rose-800 text-slate-100 mx-3 py-1 px-4 rounded-lg hover:rounded-xl shadow shadow-rose-800/50 transition-all duration-150  ease-in hover:shadow-rose-800/80 hover:bg-rose-700 active:shadow-none"
        >
            Delete
        </button>
    </h2>
}