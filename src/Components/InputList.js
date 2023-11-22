import ItemMenu from './ItemMenu'
import styles from './InputList.module.css'
function InputList({ menu, deleteElement }) {
  return (
    <div className={styles.inputListContainer}>
      {menu.map((text, index) => {
        return (
          <ItemMenu
            index={index}
            text={text}
            key={index}
            deleteElement={deleteElement}
            menu={menu}
          />
        )
      })}
    </div>
  )
}

export default InputList
