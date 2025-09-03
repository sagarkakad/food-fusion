import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Header(){
const count = useSelector(s => s.cart.items.reduce((a,b)=>a + (b.qty||0),0))
return (
<header>
<div className="container header-inner">
<div className="logo">
<span className="mark" aria-hidden></span>
<Link to="/" style={{color:'white', textDecoration:'none'}}>Food-Fusion</Link>
</div>
<nav>
<NavLink to="/" end>Home</NavLink>
<NavLink to="/menu" style={{marginLeft:12}}>Menu</NavLink>
<NavLink to="/cart" style={{marginLeft:12}}>Cart {count>0 && <span className="cart-badge">{count}</span>}</NavLink>
</nav>
</div>
</header>
)
}