import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store/store'
import './index.css'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
<React.StrictMode>
<Provider store={store}>
<BrowserRouter>
<App />
<Toaster position="top-right" reverseOrder={false} />
</BrowserRouter>
</Provider>
</React.StrictMode>
)