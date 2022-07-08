let primo=document.getElementById('primo');
let secondo=document.getElementById('secondo');
let submit=document.getElementById('finale');

const ciao=function(){
    primo.placeholder='idiota clicca'
    
}
function reset(){
    primo.placeholder='un numero'
}
primo.addEventListener('mouseover',ciao)
primo.addEventListener('mouseout',reset)

// const cao=(idiota)=>{

//     return idiota.length

// }
// console.log(cao('come va state bene'))

// const soma=(numbers)=>{
//     let result=0;
//     for(const num of numbers)
    
// {  
//     console.log(num)
     
//     result=result+ num
// }
// return{ result }

    
// }
// const ca=[1,30,3,4]

// console.log(soma(ca))