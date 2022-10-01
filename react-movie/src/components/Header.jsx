export function Header(props) {
    return (
        <header className='sticky flex flex-row items-center justify-center bg-zinc-200/90 py-3 px-5 lg:px-10 backdrop-blur-xl backdrop-saturate-150'>
            <span className='text-zinc-700 hover:text-zinc-900 ease-in duration-150'>
                React Movies
            </span>
            <button className='switch-theme__button absolute right-5 lg:right-10 bg-zinc-50 py-1 px-2 rounded-lg shadow-sm active:shadow-none transition-shadow ease-in duration-200'>Change theme</button>
        </header>
    )
}