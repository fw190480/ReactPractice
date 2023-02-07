import { useState } from 'react';
import Card from './Card';
const init = {
    name:"",
    height:0,
    weight:0,
    power:0
}

const InputTags=()=>{
    const [store,setStore] = useState(init)
    const [data,setData] = useState([])
    const [rootStore,setRootState] = useState([])
    
   const handleChange = (e)=>{
    setStore({...store,[e.target.name]:e.target.value})
   }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setData([...data,store])
        setRootState([...data,store])
        
    }
    const handleMostPowerFull =()=>{
        let mostP = [...rootStore];
        mostP.sort((a,b)=>b.power-a.power);
        console.log(mostP)
        setData([mostP[0]]);
        setRootState([...data])

    }
    const handleShowAll = ()=>{
        setData([...rootStore])
    }
    return(
        <>
        <form>
            <input value={store.name} onChange={handleChange} name="name" data-testid="input-name" type="text"/>
            <input value={store.height} onChange={handleChange} name="height" data-testid="input-height" type="number"/>
            <input value={store.weight} onChange={handleChange} name="weight" data-testid="input-weight" type="number"/>
            <input value={store.power} onChange={handleChange} name="power" data-testid="input-power" type="number"/> 
            <button disabled={!store.name || !store.height || !store.weight || !store.power} onClick={handleSubmit} data-testid="add-button">Add SuperHero</button>
        </form>
        {data.length>1 &&<button onClick={handleMostPowerFull} data-testid="most-powerfull">Most Powerful Superhero</button>}
        {rootStore.length>1 && <button onClick={handleShowAll} data-testid="all-superheroes">Show All</button>}
        {data.length!=0 && <Card data={data}/>}
        
        </>
    )
}

export default InputTags;
