import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>


<Routes>
  <Route path='/' element={<App />} />
  <Route path='/About' element={<h1>this is about page</h1>} />
  <Route path='/Contact' element={<h1>this is contact page</h1>} />
  <Route path='/Blog' element={<h1>this is blog page</h1>} />

</Routes>

 </BrowserRouter>,
)
