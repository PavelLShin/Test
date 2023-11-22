import { NavLink } from 'react-router-dom'
import styles from './Menu.module.css'

function Menu() {
  return (
    <nav className={styles.nav}>
      <NavLink to="." end>
        Список вариантов
      </NavLink>
      <NavLink to="output">Рандомный выбор</NavLink>
    </nav>
  )
}

export default Menu
