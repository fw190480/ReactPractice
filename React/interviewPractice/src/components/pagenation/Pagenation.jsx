import React,{useState,useEffect} from 'react'
import "./pagenation.css"
const api = `https://dummyjson.com/products`
const Pagenation = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
       fetchData(api) 
    },[])

    const fetchData = async(api)=>{
        let res = await fetch(api);
        let data = await res.json();
        console.log(data)
    }
  return (
    <div>

    </div>
  )
}

export default Pagenation