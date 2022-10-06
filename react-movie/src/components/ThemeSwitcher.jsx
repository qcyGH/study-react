import React, {useState, useEffect} from 'react'

export function ThemeSwitcher() {
    const [htmlBlock] = useState(document.documentElement)
    const [savedUserTheme] = useState(localStorage.getItem('user-theme'))

    const changeTheme = (saveTheme = false) => {
        let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark'
        let newTheme

        if (currentTheme === 'light') {
            newTheme = 'dark'
        } else if (currentTheme === 'dark') {
            newTheme = 'light'
        }
        htmlBlock.classList.remove(currentTheme)
        htmlBlock.classList.add(newTheme)
        if (saveTheme) {
            localStorage.setItem('user-theme', newTheme)
        }
    }

    useEffect(() => {
        setThemeClass()

        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change')
        }
    }, [])

    const setThemeClass = () => {
        let userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            if (!savedUserTheme) {
                changeTheme()
            }
        })

        if (savedUserTheme) {
            htmlBlock.classList.add(savedUserTheme)
        } else {
            htmlBlock.classList.add(userTheme)
        }
    }

    return (
        <button onClick={e => changeTheme(true)} className='switch-theme__button absolute right-5 lg:right-10 bg-zinc-50 py-1 px-2 rounded-lg shadow-sm active:shadow-none transition-shadow ease-in duration-200'>
            Change theme
        </button>
    )
}