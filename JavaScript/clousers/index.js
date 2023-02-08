window.addEventListener('load',function (){
    console.log('start working');
    this.document.getElementById('btn').addEventListener('click',debounce)
    
});

function debounce(){
    let timer;
    return function test(delay,fun){
        timer && clearTimeout(timer)
        timer=setTimeout(fun,delay)
    }

}

