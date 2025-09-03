import React, { useEffect, useState } from 'react'
import { searchMeals, getCategories, filterByCategory } from '../api/mealsApi'
import MealCard from '../components/MealCard'
import Loading from '../components/Loading'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/cartSlice'
import toast from 'react-hot-toast'

export default function Menu(){
const [q, setQ] = useState('')
const [meals, setMeals] = useState([])
const [loading, setLoading] = useState(false)
const [categories, setCategories] = useState([])
const [cat, setCat] = useState('')
const dispatch = useDispatch()


useEffect(()=>{ loadCategories() },[])


async function loadCategories(){
try{
const c = await getCategories()
setCategories(c.slice(0,8).map(x=>x.strCategory))
}catch(e){ console.error(e) }
}


async function doSearch(searchTerm){
setLoading(true)
try{
const data = await searchMeals(searchTerm)
setMeals(data)
}catch(e){ console.error(e); setMeals([]) }
setLoading(false)
}


async function pickCategory(category){
setCat(category)
setLoading(true)
try{
const data = await filterByCategory(category)
setMeals(data)
}catch(e){ console.error(e); setMeals([]) }
setLoading(false)
}


useEffect(()=>{ // initial load
doSearch('')
},[])


function handleAdd(meal){
// add minimal product info
dispatch(addItem({ idMeal: meal.idMeal, strMeal: meal.strMeal, strMealThumb: meal.strMealThumb, qty:1 }))
toast.success(`${meal.strMeal} added to cart!`)
}


return (
<div className="container main">
<div style={{display:'flex', gap:12, marginBottom:16, flexWrap:'wrap'}}>
<input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search meals by name..." style={{flex:1,padding:8,borderRadius:6,border:'1px solid #e5e7eb'}}/>
<button className="btn btn-primary" onClick={()=>doSearch(q)}>Search</button>
<button className="btn btn-ghost" onClick={()=>{ setQ(''); doSearch('') }}>Clear</button>
</div>


<div style={{marginBottom:12}}>
<strong>Categories:</strong>
<div style={{display:'flex', gap:8, marginTop:8, flexWrap:'wrap'}}>
<button className="btn btn-ghost" onClick={()=>{ setCat(''); doSearch('') }}>All</button>
{categories.map(cn => (
<button key={cn} className="btn btn-ghost" onClick={()=>pickCategory(cn)} style={{fontWeight: cat===cn?700:400}}>{cn}</button>
))}
</div>
</div>


{loading ? <Loading /> : (
<div className="grid">
{meals && meals.length>0 ? meals.map(m => (
<MealCard key={m.idMeal} meal={m} onAdd={handleAdd} />
)) : <div>No meals found.</div>}
</div>
)}
</div>
)
}