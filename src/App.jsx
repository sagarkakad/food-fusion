import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'


const Home = lazy(() => import('./pages/Home'))
const Menu = lazy(() => import('./pages/Menu'))
const MealDetail = lazy(() => import('./pages/MealDetail'))
const Cart = lazy(() => import('./pages/Cart'))


export default function App(){
return (
<div style={{minHeight:'100vh', display:'flex', flexDirection:'column'}}>
<Header />
<div style={{flex:1}}>
<Suspense fallback={<Loading/>}>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/menu" element={<Menu/>} />
<Route path="/meal/:id" element={<MealDetail/>} />
<Route path="/cart" element={<Cart/>} />
<Route path="*" element={<div className="container main">Page Not Found</div>} />
</Routes>
</Suspense>
</div>
<Footer />
</div>
)
}