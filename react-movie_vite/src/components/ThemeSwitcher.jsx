import React, {useState, useEffect} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon} from '@chakra-ui/icons'
import useSound from 'use-sound'
import clickSfx from '.././sounds/sine-click.mp3'

export function ThemeSwitcher() {
    const htmlBlock = document.documentElement
    const [savedUserTheme] = useState(localStorage.getItem('user-theme'))
    const [Theme, setTheme] = useState(localStorage.getItem('user-theme'))

    const changeTheme = () => {
        // play sound click
        playActive()

        // отримуємо поточну тему
        let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark'
        let newTheme
        console.log(currentTheme)
        if (currentTheme === 'light') {
            newTheme = 'dark'
        } else if (currentTheme === 'dark') {
            newTheme = 'light'
        }
        // змінюємо тему
        console.log(htmlBlock)
        document.documentElement.classList.remove(currentTheme)
        htmlBlock.classList.add(newTheme)
        setTheme(newTheme)

        // зберігаємо в localStorage
        localStorage.setItem('user-theme', newTheme)
    }

    // встановлюємо тему:
    // 1 випадок: якщо користувач вручну вже обирав тему
    // 2 випадок: якщо користувач нічого вручну не змінював, то буде використана тема його пристрою
    const setThemeClass = () => {
        let userTheme
        if (window.matchMedia) {
            userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        }

        // якщо користувач під час перебування на сайті змінить тему пристрою, то сайт автоматично перейде
        // на таку ж тему, що і на пристрої
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

    // коли сторінка завантажиться, викликаємо функцію setThemeClass()
    useEffect(() => {
        setThemeClass()

    })

    const [playActive] = useSound(
        clickSfx,
        { volume: 0.5 }
    )

    return (
        <span className='absolute right-5 top-[50%] translate-y-[-50%] lg:right-10'>
            <AnimatePresence exitBeforeEnter initial={ false }>
                <motion.div
                    style={{ display: 'inline-block'}}
                    key={Theme}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <IconButton
                        aria-label="Change theme"
                        onClick={changeTheme}
                        p='8'
                        icon={
                        Theme === 'light'
                            ? <SunIcon w={18} h={18}/>
                            : <MoonIcon w={18} h={18}/>
                        }
                        className='bg-transparent text-zinc-900 dark:text-zinc-100'>
                    </IconButton>
                </motion.div>
            </AnimatePresence>
        </span>
    )
}