const numeros=[1,3,4,5,6]
//const numeros = [1, 3, 4, 5, 6];

const people = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

function myWithout(array, ...n) {
    
    let newArray=array.slice();
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < n.length; j++){
            if(array[i]===n[j]){
                newArray.splice(i,1,0);
            }
            
        }
    }
    console.log(newArray)
    const new2=newArray.filter(element=>element!=0)
    return new2;
}
const result = myWithout(numeros,1,4,6);
console.log(result);




// function myWithout(array,...n){
//     const retornoFilter= array.filter((elementoarray)=>{
//         const result=n.find((elementoN)=>{
//             return elementoarray===elementoN;
//         })
//         return !result;
//     })
//     return retornoFilter;
// }
// const result = myWithout(numeros,1,4,6);
// console.log(result);


// function(array,parametro){
//     const newaarray
//     for(let i=0;i<array.length;i++){
//     nuevoarray.push(array[i][parametro])
//     }

// }
// // arreglo.forEach((elemnto)=>console.log(elemnto*2));

// function myEach(arreglo,lafuncion){//arreglo=hola
//     for(let i=0;i<arreglo.length;i++){
//         console.log("valor  a aentrar : "+arreglo[i])
//         lafuncion(arreglo[i]);
//     }

// myEach(numeros,(elemnto)=>console.log(elemnto*3))
// myEach(numeros,(elemento)=>console.log(elemento*2));




































// const numeros=[1,2,3,4,5,6];

// // numeros.forEach((numero) => {
// //     console.log(numero*2);
// // });

// function myEach(array,lafuncion){
//     for(let x=0;x<array.length;x++){
//         lafuncion(array[x]);
//     }
// }
// // function multiplica2(element){
// //     console.log(element*2)
// // }


// myEach(numeros,(elemento)=>{
//     console.log(elemento*2)
// })