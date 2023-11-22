import { RiDeleteBack2Line, RiBookmarkLine } from 'react-icons/ri'
import styles from './ItemMenu.module.css'
import Button from './Button'

function ItemMenu({ text, deleteElement, index }) {
  if (!!text)
    return (
      <div className={styles.item}>
        <RiBookmarkLine className={styles.mark} />
        <h1 className={styles.itemText}>{text}</h1>
        <Button
          className={styles.button}
          onClick={() => deleteElement(index)}
          title="Сбросить"
        >
          <RiDeleteBack2Line />
        </Button>
      </div>
    )
  else return null
}

export default ItemMenu
