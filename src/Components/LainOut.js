import { Outlet } from 'react-router-dom'
import Menu from './Menu'

function LainOut() {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  )
}

export default LainOut
