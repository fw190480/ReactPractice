import React,{useState,useEffect} from 'react'
import "./styles/styles.css"
const api = `https://dummyjson.com/products?limit=100`
const Pagenation = () => {
    const [products,setProducts] = useState([])
    const [page,setPage] = useState(1);
    // console.log(products.length/10)

    useEffect(()=>{
       fetchData(api) 
    },[])

    const fetchData = async(api)=>{
        let res = await fetch(api);
        let data = await res.json();
        console.log(data)
        setProducts(data.products)
    };
    const handlePage = (num)=>{
        setPage(num)
    }
  return (
    <div>
        <div className='product__list'>
            {products.length && products.slice(page*10-10,products.length/10*page).map(item=>(
                <div className='product__single'  key={item.id}>
                    <img height={"120"} width={"165"} className='product_image' src={item.thumbnail} alt={item.title} />
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
        {/* pages */}
        <div id='page_list' style={{backgroundColor:"lightblue",padding:"0.7rem",cursor:"pointer",display:'flex',gap:"0.2rem"}}>
            <span style={{display:page<=1?"none":"inline-block"}} onClick={()=>setPage(page+1)}>◀</span>
            {[...Array(products.length/10).fill(0).map((_,i)=>(
                <span onClick={()=>handlePage(i+1)} key={i}>{i+1}</span>
            ))]}
            <span onClick={()=>setPage(page-1)}>▶</span>
        </div>
    </div>
  )
}

export default Pagenation