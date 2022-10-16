import { Link } from 'react-router-dom'

import './style.scss'

export const Menu = () => {
    return (
        <nav className='menu'>
            <ul>
                <li>
                    <Link to="/" className='link'>Home</Link>
                </li>

                <li>
                    <Link to="/about" className='link'>Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}