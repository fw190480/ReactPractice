import React,{useRef} from 'react'

const ScrollByUseRef = () => {
    const topRef  = useRef(null)
    const bottomRef  = useRef(null)
    const fotterRef  = useRef(null)

    const handleNavigate = (ref)=>{
        // console.log('hellow')
        // console.log(topRef)
        ref.current.scrollIntoView({behavior:"smooth"})
    }


  return (
    <div className='scroll__container--byRef'>
        <section ref={topRef}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium enim fuga aspernatur est vitae, quibusdam necessitatibus dolorum error sequi dolore. Nostrum, quam architecto! Vitae dignissimos ipsa voluptas iusto culpa quod id adipisci fuga reiciendis deserunt modi ab eos autem dolorum quidem optio eum, aspernatur quia cupiditate illum reprehenderit beatae. Consectetur?
            <button onClick={()=>handleNavigate(bottomRef)}>Click Me</button>
        </section>
        <section>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium enim fuga aspernatur est vitae, quibusdam necessitatibus dolorum error sequi dolore. Nostrum, quam architecto! Vitae dignissimos ipsa voluptas iusto culpa quod id adipisci fuga reiciendis deserunt modi ab eos autem dolorum quidem optio eum, aspernatur quia cupiditate illum reprehenderit beatae. Consectetur?
            <button onClick={()=>handleNavigate(topRef)}>Click Me</button>
        </section>
        <section ref={bottomRef}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium enim fuga aspernatur est vitae, quibusdam necessitatibus dolorum error sequi dolore. Nostrum, quam architecto! Vitae dignissimos ipsa voluptas iusto culpa quod id adipisci fuga reiciendis deserunt modi ab eos autem dolorum quidem optio eum, aspernatur quia cupiditate illum reprehenderit beatae. Consectetur?
            <button onClick={()=>handleNavigate(fotterRef)}>Click Me</button>
        </section>
        <section>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium enim fuga aspernatur est vitae, quibusdam necessitatibus dolorum error sequi dolore. Nostrum, quam architecto! Vitae dignissimos ipsa voluptas iusto culpa quod id adipisci fuga reiciendis deserunt modi ab eos autem dolorum quidem optio eum, aspernatur quia cupiditate illum reprehenderit beatae. Consectetur?
            <button onClick={()=>handleNavigate(topRef)}>Click Me</button>
        </section>
        <section ref={fotterRef}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium enim fuga aspernatur est vitae, quibusdam necessitatibus dolorum error sequi dolore. Nostrum, quam architecto! Vitae dignissimos ipsa voluptas iusto culpa quod id adipisci fuga reiciendis deserunt modi ab eos autem dolorum quidem optio eum, aspernatur quia cupiditate illum reprehenderit beatae. Consectetur?
            <button onClick={()=>handleNavigate(bottomRef)}>Click Me</button>
        </section>
    </div>
  )
}

export default ScrollByUseRef