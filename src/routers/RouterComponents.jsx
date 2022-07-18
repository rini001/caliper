import React from 'react'
import { Home } from '../components/Home'
import { Navbar } from './Navbar'
import {Route,Routes} from "react-router-dom"
import { Products } from '../components/Products'
import { Contact } from '../components/Contact'
export const RouterComponents = () => {
  return (
    <div>
         <Navbar />
        <Routes>
                <Route path="/" element={<Home />}></Route>
				<Route path="/products" element={<Products />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="/products/contact" element={<Contact />}></Route>

            </Routes>
    </div>
  )
}
