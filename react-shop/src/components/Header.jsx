import { ThemeSwitcher } from './ThemeSwitcher'
import { Cart } from './Cart'

export function Header(props) {
    return (
        <header className='sticky flex flex-row items-center justify-center bg-zinc-200/90 dark:bg-zinc-900/90 py-3 px-5 lg:px-10 backdrop-blur-xl transition-color duration-300 backdrop-saturate-150'>
            <span className='text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 ease-in duration-150'>
                React Shop
            </span>
            <Cart />
            <ThemeSwitcher />
        </header>
    )
}