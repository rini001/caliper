import React from 'react'
import "../styles/Home.css"
export const Home = () => {
  let data=[
    {
      id:1,
      img:"https://upload.wikimedia.org/wikipedia/commons/1/13/Hydroponic_onions%2C_NASA_--_17_June_2004.jpg"
    },
    {
      id:2,
      img:"https://www.gardeningknowhow.com/wp-content/uploads/2020/12/hydroponic-lettuce-on-plastic-shelf.jpg"
    },
    {
      id:3,
      img:"https://www.treehugger.com/thmb/lAPIz0MTnWvdbLRcNSoHsfQaIo0=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-936280168-390cc1e150334c6aafe6a275b058ba7a.jpg"
    }
  ]
  return (
    <div className='div0'>
      <h1 className='heading'>The Future of Farming : Hydrophonics</h1>
      <div className='div1'>
       {
        
        data.map((data)=>(
          <img className='image' src={data.img} alt="" />
        ))
        
       }
       </div>
    </div>
  )
}
