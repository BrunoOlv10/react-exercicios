import {use} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ThemeButton = () => {

    const { theme, toggleTheme } = use(ThemeContext)

  return (
    <button onClick={toggleTheme} className={theme}>
        Alterar tema para {theme === 'claro' ? 'escuro' : 'claro'}
    </button>
  )
}

export default ThemeButton
