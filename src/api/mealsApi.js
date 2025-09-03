import axios from 'axios'


// Using TheMealDB (free public API)
// API docs: https://www.themealdb.com/api.php


const api = axios.create({
baseURL: 'https://www.themealdb.com/api/json/v1/1',
timeout: 10000,
})


export async function searchMeals(query = '') {
// If query is empty, we will fetch a popular default list via search for 'a' which returns many items
const q = query?.trim() ?? ''
const url = q ? `/search.php?s=${encodeURIComponent(q)}` : `/search.php?s=a`
const res = await api.get(url)
return res.data.meals || []
}


export async function lookupMeal(id) {
const res = await api.get(`/lookup.php?i=${id}`)
return (res.data.meals && res.data.meals[0]) || null
}


export async function getCategories() {
const res = await api.get('/list.php?c=list')
return res.data.meals || []
}


export async function filterByCategory(category) {
const res = await api.get(`/filter.php?c=${encodeURIComponent(category)}`)
return res.data.meals || []
}


export default api