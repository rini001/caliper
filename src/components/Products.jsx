import React from 'react'
import {products} from "../data/products"
import { Link } from "react-router-dom";

import "../styles/Products.css"
export const Products = () => {

  return (
    <div className='div01'>
{
  products.map((data)=>(
    <div className='div02'>
      <img className='imgg' src={data.img} alt="" />
      <p>{data.detail}</p>
      <Link to="/products/contact"><button className='btn'>BYE NOW</button></Link>
    </div>
  ))
}
    </div>
  )
}
