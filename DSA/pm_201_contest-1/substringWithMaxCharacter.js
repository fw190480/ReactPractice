
// return maximum substring in contingious 'K' character
//  I used two variable one is maximum and another is finding contingious "K" character;
function countBlack(str){
    let max =1,temp=1;
    for(let i=0;i<str.length;i++){
        if(str[i]==="B" && str[i+1]==="B"){
           //  console.log(i)
            temp++;
        }else{
            max = Math.max(temp,max);
           // console.log(temp)
            temp=1;
        }
    };
    return max;
   }