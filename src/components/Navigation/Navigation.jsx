import { NavLink } from "react-router-dom";


export function Navigation() {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/products'>Products</NavLink>
            </li>
        </ul>
    </nav>
  )
}
