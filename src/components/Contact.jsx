import React from 'react'
import "../styles/Contact.css"
export const Contact = () => {
  return (
    <div className='contact'>
      <h1 className='heading'>CONTACT US TO BUY OR SELL PRODUCT WITH US</h1>
<div className='form01'>
<div>
      <div>First Name</div>
      <input type="text"/>
      </div>
      <div>
      <div>Last Name</div>
      <input type="text"  />
      </div>
      <div>
      <div>Address</div>
      <input type="text" />
      </div>
      <div>
      <div>Subject</div>
      <input type="text" />
      </div>
      <div>
      <button className='btn'>SUBMIT</button>
      </div>
      </div>
    </div>
  )
}
