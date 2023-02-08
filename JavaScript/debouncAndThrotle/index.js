
// debouncing
let debouncing;
function debounce(){
    debouncing && clearInterval(debouncing)
    debouncing = setTimeout(()=>{
        console.log('hi')
    },1000)
}
document.getElementById('debounce').addEventListener('click',debounce);


// Throttle 
let canRun = true;
function throttleFun(){
    if(!canRun) return;

    canRun = false;
    setTimeout(()=>{
        canRun = true;
        console.log(Date.now())
    },1000)
};

// window.addEventListener('scroll',throttleFun)
document.getElementById('throttle').addEventListener('click',throttleFun)