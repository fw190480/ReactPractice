
// debouncing
let debouncing;
function debounce(){
    debouncing && clearInterval(debouncing)
    debouncing = setTimeout(()=>{
        console.log('hi')
    },1000)
}
document.getElementById('debounce').addEventListener('click',debounce)