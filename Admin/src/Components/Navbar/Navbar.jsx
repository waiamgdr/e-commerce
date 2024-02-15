import './Navbar.css'
import navprofile from '../../assets/nav-profile.svg'
import navlogo from '../../assets/nav-logo.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='nav-log' src={navlogo}/>
        <img  className="nav-profile"  src={navprofile}/>
    </div>
  )
}

export default Navbar