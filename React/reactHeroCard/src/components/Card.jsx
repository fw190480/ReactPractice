
const Card=({data=[]})=>{
    // console.log(data)
    return (
        <div data-testid="data-list">
            {data.map((item,i)=>{
                return(
                    <div key={i} data-testid="superhero-list">
                        <p>Hero Name{item.name}</p>
                        <p>Height {item.height}</p>
                        <p>weight{item.weight}</p>
                        <p>Power Level {item.power}</p>
                        {/*All the content of the card has to be added over here*/}
                    </div>
                )
            })}
        </div>
    )
}

export default Card;
