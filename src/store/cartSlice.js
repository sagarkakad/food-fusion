import { createSlice } from '@reduxjs/toolkit'


const initial = {
items: JSON.parse(localStorage.getItem('ff_cart') || '[]'),
}


const cartSlice = createSlice({
name: 'cart',
initialState: initial,
reducers: {
addItem(state, action) {
const item = action.payload
const found = state.items.find(i => i.idMeal === item.idMeal)
if (found) {
found.qty += item.qty || 1
} else {
state.items.push({ ...item, qty: item.qty || 1 })
}
localStorage.setItem('ff_cart', JSON.stringify(state.items))
},
removeItem(state, action) {
const id = action.payload
state.items = state.items.filter(i => i.idMeal !== id)
localStorage.setItem('ff_cart', JSON.stringify(state.items))
},
updateQty(state, action) {
const { id, qty } = action.payload
const found = state.items.find(i => i.idMeal === id)
if (found) found.qty = qty
state.items = state.items.filter(i => i.qty > 0)
localStorage.setItem('ff_cart', JSON.stringify(state.items))
},
clearCart(state) {
state.items = []
localStorage.setItem('ff_cart', JSON.stringify(state.items))
}
}
})


export const { addItem, removeItem, updateQty, clearCart } = cartSlice.actions
export default cartSlice.reducer