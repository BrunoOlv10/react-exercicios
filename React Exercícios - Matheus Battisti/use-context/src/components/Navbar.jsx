import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/contact'>Contato</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
