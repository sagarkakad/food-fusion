import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateQty, removeItem, clearCart } from '../store/cartSlice'
import { Link } from 'react-router-dom'


export default function Cart(){
const items = useSelector(s => s.cart.items)
const dispatch = useDispatch()
const subtotal = items.reduce((a,b) => a + (b.qty * 150), 0) // demo fixed price ₹150 each


function inc(id, curr){ dispatch(updateQty({ id, qty: curr + 1 })) }
function dec(id, curr){ if(curr-1<=0) dispatch(removeItem(id)); else dispatch(updateQty({ id, qty: curr - 1 })) }


return (
<div className="container main">
<h2>Your Cart</h2>
{items.length===0 ? (
<div>
<p>Your cart is empty.</p>
<Link to="/menu" className="btn btn-primary">Browse Menu</Link>
</div>
) : (
<div className="cart-wrapper">
<div className="cart-items">
{items.map(it => (
<div key={it.idMeal} className="cart-item">
<img src={it.strMealThumb} alt={it.strMeal} className="cart-img" />
<div className="cart-info">
<strong>{it.strMeal}</strong>
<div className="cart-controls">
<button className="btn btn-ghost" onClick={()=>dec(it.idMeal, it.qty)}>-</button>
<span className="cart-qty">{it.qty}</span>
<button className="btn btn-ghost" onClick={()=>inc(it.idMeal, it.qty)}>+</button>
<button className="btn" onClick={()=>dispatch(removeItem(it.idMeal))}>Remove</button>
</div>
</div>
<div className="cart-price">₹{(it.qty * 150).toLocaleString()}</div>
</div>
))}
</div>
<div className="cart-summary">
<h3>Order Summary</h3>
<p>Items: {items.reduce((a,b)=>a+(b.qty||0),0)}</p>
<p>Subtotal: ₹{subtotal.toLocaleString()}</p>
<p className="cart-note">Note: This is a demo; prices are fixed for the example.</p>
<div className="cart-buttons">
<button className="btn btn-primary" onClick={()=>alert('Checkout demo — integrate payment gateway here')}>Checkout</button>
<button className="btn btn-ghost" onClick={()=>dispatch(clearCart())}>Clear</button>
</div>
</div>
</div>
)}
</div>
)
}