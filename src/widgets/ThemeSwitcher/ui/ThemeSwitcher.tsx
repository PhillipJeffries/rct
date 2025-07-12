import { useTheme } from 'App/providers/ThemeProvider'
import * as s from './ThemeSwitcher.module.scss'

import eye from 'shared/assets/eye.svg'
import redEye from 'shared/assets/redEye.svg'
import { Theme } from 'App/providers/ThemeProvider/lib/ThemeContext'


const ThemeSwitcher = () => {

    const { theme, toggleTheme } = useTheme()

    return (
        <button className={s.themeSwitcher} onClick={toggleTheme}>
            <img src={theme === Theme.LIGHT ? eye : redEye} alt="" />
        </button>
    )
}

export default ThemeSwitcher