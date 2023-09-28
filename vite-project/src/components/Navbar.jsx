import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
  
    return (
      <div className='nav-bar'>
        <div className='Links'>
            <Link to={'/Home'}>Home</Link>
            <Link to={'/Post'}>Post</Link>
            <Link to={'/Profile'}>Profile</Link>
            <Link to={'/'}>Logout</Link>
        </div>
      </div>
    )
  }
  
  export default NavBar