// make a button and img
// afer 5 sec button is disable
// after click the text and image should be changed

import React from 'react'
import { useState } from 'react';
let image1 = 'https://cdn.pixabay.com/photo/2023/02/14/18/55/flowers-7790227_640.jpg'
let image2 = "https://cdn.pixabay.com/photo/2023/02/08/07/32/vietnamese-woman-7775904__340.jpg"
const Practice = () => {
    let [toggle,setToggle] = useState(false);
    let [disable,setDisable] = useState(false)

    const handleClick = ()=>{
        setToggle(!toggle);
        setInterval(()=>{
            setDisable(true)
        },5000)
    }
  return (
    // <div>Practice</div>
    <>
    <img src={toggle?image1:image2} alt='dummy image'  />
    <button disabled={disable?true:false} onClick={handleClick} >
        {toggle?'show':"changed"}
    </button>
    </>
  )
}

export default Practice