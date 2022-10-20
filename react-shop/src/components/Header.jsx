import { ThemeSwitcher } from './ThemeSwitcher'
import { Cart } from './Cart'

export function Header(props) {
    return (
        <header className='sticky flex flex-row items-center justify-center bg-zinc-200/90 dark:bg-zinc-900/90 py-3 px-5 lg:px-10 backdrop-blur-xl transition-color duration-300 backdrop-saturate-150'>
            <span className='text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 ease-in duration-150'>
                React Shop
            </span>
            <ul className='flex absolute top-[50%] right-5 lg:right-10 translate-y-[-50%]'>
                <li className='mr-2'>
                    <Cart />
                </li>
                <li>
                    <ThemeSwitcher />
                </li>
            </ul>
        </header>
    )
}