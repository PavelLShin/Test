import FotmInput from './FormInput'
import InputList from './InputList'

function InputAndList({ menu, getOneMenu, cleanMenu, length, deleteElement }) {
  return (
    <div>
      <FotmInput
        menu={menu}
        getOneMenu={getOneMenu}
        cleanMenu={cleanMenu}
        length={length}
      />
      <InputList menu={menu} deleteElement={deleteElement} />
    </div>
  )
}

export default InputAndList
