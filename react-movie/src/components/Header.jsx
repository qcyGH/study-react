import { ThemeSwitcher } from "./ThemeSwitcher"

export function Header(props) {
    return (
        <header className='sticky flex flex-row items-center justify-center bg-zinc-200/90 py-3 px-5 lg:px-10 backdrop-blur-xl backdrop-saturate-150'>
            <span className='text-zinc-700 hover:text-zinc-900 ease-in duration-150'>
                React Movies
            </span>
            <ThemeSwitcher />
        </header>
    )
}