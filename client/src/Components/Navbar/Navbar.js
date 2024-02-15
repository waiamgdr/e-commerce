import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/Userslice'
import { ShopContext } from '../../Context/shopContext'
const Navbar = () => {
  const[menu,setMenu]=useState("shop")
  const dispatch=useDispatch()
    const {isAuth}=useSelector(state=>state.user)
    const menuRef=useRef()
    const {getTotalCartItems}=useContext(ShopContext)
  
  return (
    <div className='navbar'>
 <div className=' nav-logo'>
  <img src={logo} alt=""/>
  <p>E-commerce</p>
 </div>
 
 <ul className='nav-menu'>
  <li onClick={()=>{setMenu("shop")}} > <Link  style={{textDecoration:'none'}}   to='/'> shop </Link> {menu==="shop"? <hr/>:<></>} </li>
  <li onClick={()=>{setMenu("mens")}}> <Link  style={{textDecoration:'none'}}  to='/mens'> men  </Link> {menu==="mens"? <hr/>:<></>} </li>
  <li onClick={()=>{setMenu("womens")} }> <Link  style={{textDecoration:'none'}}  to='/womens'>women</Link> {menu==="womens"? <hr/>:<></>}</li>
  <li onClick={()=>{setMenu("kids")}} > <Link style={{textDecoration:'none'}}  to='/kids'>  kids</Link> {menu==="kids"? <hr/>:<></>} </li>
  </ul>
  <div className='nav-login-cart'> 
  {isAuth ?
            <>
             <Link to='/login'><button  onClick={()=>{dispatch(logout())}} >login out  </button> </Link>
            
  <Link to='/cart'><img src={cart_icon} alt=''/> </Link> 
  
  <div className='nav-cart-count'>{getTotalCartItems()}</div>
   </>
  : <>
 <Link to='/login'><button>login </button> </Link>
  </>}
  </div>
    </div>
  )
}

export default Navbar