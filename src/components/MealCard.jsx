import React from 'react'
import { Link } from 'react-router-dom'


export default function MealCard({ meal, onAdd }){
return (
<div className="card">
<img src={meal.strMealThumb} alt={meal.strMeal} />
<div className="body">
<h4 style={{margin:'0 0 8px 0'}}>{meal.strMeal}</h4>
<div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
<Link className="btn btn-ghost" to={`/meal/${meal.idMeal}`}>View</Link>
<button className="btn btn-primary" onClick={() => onAdd(meal)}>Add to cart</button>
</div>
</div>
</div>
)
}