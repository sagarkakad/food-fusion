import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { lookupMeal } from '../api/mealsApi'
import Loading from '../components/Loading'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/cartSlice'
import toast from 'react-hot-toast'

export default function MealDetail(){
const { id } = useParams()
const [meal, setMeal] = useState(null)
const [loading, setLoading] = useState(true)
const dispatch = useDispatch()


useEffect(()=>{
async function load(){
setLoading(true)
const m = await lookupMeal(id)
setMeal(m)
setLoading(false)
}
load()
},[id])


if(loading) return <Loading />
if(!meal) return <div className="container main">Meal not found</div>


const ingredients = []
for(let i=1;i<=20;i++){
const ing = meal[`strIngredient${i}`]
const measure = meal[`strMeasure${i}`]
if(ing && ing.trim()) ingredients.push(`${ing} — ${measure || ''}`)
}


function handleAdd(){
dispatch(addItem({ idMeal: meal.idMeal, strMeal: meal.strMeal, strMealThumb: meal.strMealThumb, qty:1 }))
toast.success(`${meal.strMeal} added to cart!`)
}


return (
<div className="container main">
<div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:20}}>
<img src={meal.strMealThumb} alt={meal.strMeal} style={{width:'100%', borderRadius:8}}/>
<div>
<h2>{meal.strMeal}</h2>
<p><strong>Category:</strong> {meal.strCategory} • <strong>Area:</strong> {meal.strArea}</p>
<p>{meal.strInstructions?.slice(0,400)}...</p>
<button className="btn btn-primary" onClick={handleAdd}>Add to cart</button>
<h4 style={{marginTop:16}}>Ingredients</h4>
<ul>
{ingredients.map((it,idx)=> <li key={idx}>{it}</li>)}
</ul>
</div>
</div>
</div>
)
}