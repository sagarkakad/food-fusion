import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
return (
<div className="container main">
<div style={{display:'flex', gap:20, alignItems:'center', flexWrap:'wrap'}}>
<div style={{flex:1}}>
<h1>Welcome to Food-Fusion</h1>
<p>Create an account-free quick shopping experience for meals powered by TheMealDB. Browse, add to cart, and checkout (demo).</p>
<Link to="/menu" className="btn btn-primary">Browse Menu</Link>
</div>
<div style={{flex:1}}>
<img src="https://images.unsplash.com/photo-1546069901-eacef0df6022?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=0a" alt="food" style={{width:'100%', borderRadius:8}}/>
</div>
</div>
</div>
)
}