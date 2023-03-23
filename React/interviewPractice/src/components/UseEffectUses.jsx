import React,{useEffect,useState} from 'react'

const UseEffectUses = () => {
    const [count,setCount] = useState(0);
    
  return (
    <div>
        <button onClick={()=>setCount(count+1)} >Clck me</button>
    </div>
  )
}

export default UseEffectUses