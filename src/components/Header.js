import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="nav">
      <Link to="/">
        <div>Cheese App</div>
      </Link>
    </nav>
  )
}

export default Header
