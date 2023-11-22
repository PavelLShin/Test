import { useState } from 'react'
import { RiAddBoxLine, RiDeleteBin2Line } from 'react-icons/ri'
import styles from './FormInput.module.css'
import Button from './Button'

function FormInput({ getOneMenu, cleanMenu, length }) {
  const [text, setText] = useState('')

  const cleanForm = (event) => {
    event.preventDefault()
    getOneMenu(text)
    setText('')
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={cleanForm}>
        <input
          value={text}
          placeholder="Введите вариант"
          onChange={(event) => setText(event.target.value)}
        />
        <Button type="submit" title="Добавить в меню">
          <RiAddBoxLine />
        </Button>
      </form>
      <Button
        onClick={cleanMenu}
        title="Сбросить всё"
        className={`${!!length ? styles.btn : styles.disabled}`}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default FormInput
