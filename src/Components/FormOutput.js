import { RiLoopRightLine } from 'react-icons/ri'
import { useState } from 'react'
import styles from './FormOutput.module.css'
import Button from './Button'

function FormOutput({ randomNum, length, menu }) {
  const [itog, setItog] = useState('')

  if (!menu.length)
    return <h2 className={styles.item}>Введите список вариантов</h2>

  return (
    <>
      <div className={styles.items}>
        <h1 className={styles.itemText}>
          {`Будем кушать: ${!!menu[itog] ? menu[itog] : ''}`}
        </h1>
      </div>
      <Button
        className={styles.button}
        onClick={() => setItog(randomNum(length))}
        title="Сгенерировать"
      >
        <RiLoopRightLine />
      </Button>
    </>
  )
}

export default FormOutput
