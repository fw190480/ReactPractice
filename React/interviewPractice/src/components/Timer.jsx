import React, { useEffect,useState } from 'react'

const Timer = () => {
    const [timer,setTimer] = useState(10);
    useEffect(()=>{
        counterFun()
    },[])

    const counterFun = ()=>{
        setInterval(()=>{
            setTimer(prep=>{
                if(timer<=0){
                    return 10;
                }else{
                    return prep-1
                }
            })
        },1000)
    }

  return (
    <div>
       
       {timer}
    </div>
  )
}

export default Timer