import { Link } from 'react-router-dom'

import './style.scss'

export const Menu = () => {
    return (
        <nav className='menu'>
            <ul>
                <li>
                    <Link to="/" className='link'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className='link' state={'State from ABOUT'}>
                        Sobre
                    </Link>
                </li>
                <li>
                    <Link to="/posts" className='link'>
                        Posts
                    </Link>
                </li>
                <li>
                    <Link to="/posts/10" className='link'>
                        Post 10
                    </Link>
                </li>
                <li>
                    <Link to="/redirect" className='link'>
                        Redirect
                    </Link>
                </li>
            </ul>
        </nav>
    )
}