Array.prototype.myEach=function(callback){
    for(let i=0;i<this.length;i++){
        callback(this[i]);
    }
}

Array.prototype.myWithout= function(...arg){
    const rFilter= this.filter((data)=>{
        const result=arg.find((element)=>{
            return data===element;
        })
        return !result;
    })
    return rFilter;
}

class myArray {
    constructor(array){
        this.size=array.length;
        this.data=array;
    };
//////////////////////////////////////7
    myPush(item){
        this.data[this.size]=item;
        this.size+=1;
    }
///////////////////////////////////////////////////
    myFilter(callback){
        const newArray=[];
        for(let i=0;i<this.size;i++){
            if(callback(this.data[i])===true){
                newArray.push(this.data[i]);
            }
        }
        return newArray;
    }
//////////////////////////////////////////////////////////////
    myMap(callback){
        const newArray=[];
        for(let i=0;i<this.size;i++){
            newArray.push(callback(this.data[i]));
        }
        return newArray;
    }
////////////////////////////////////////////////////////////////
    myFind(callback){
        for(let i=0;i<this.size;i++){
            if(callback(this.data[i])===true){
                return this.data[i];
            }
        }
    }
/////////////////////////////////////////////////////////////////////
    myFindIndex(callback){
        for(let i=0;i<this.size;i++){
            if(callback(this.data[i])===true){
                return i;
            }
        }
    }
///////////////////////////////////////////////////////////////////////////
    myContains(param){
        for(let i=0;i<this.size;i++){
            if(this.data[i]===param){
                return true;
            }
        }
    }
    ////////////////////////////////////////////////////////////////////////////
    myPluck(property){
        const propertysReturn=this.data.map((element)=>{
            return element[property];
        })
        return propertysReturn;
        ///////////////////////////2 way more to pluck using for each and for
        // const newArray=[];
        // this.data.forEach(element => {
        //     newArray.push(element[property]);
        // });
        // return  newArray;

        // const newArray=[];
        // for(let i=0;i<this.size;i++){
        //     newArray.push(this.data[i][property]);
        // }
        // return newArray;
    }
}
///////////////////////////////////////////////////////////////////////
const nums=new myArray([1,2,4,5,6]);///////// class myarray
const nums2=[7,8,9,10,11];
nums.myPush(9);

//////////////////////using each/////////////////
nums2.myEach(element=>console.log('retorno Each : '+element*2));
/////////////////////using without///////////////
console.log('retorno WithOut : '+nums2.myWithout(8,10));
/////////////////////using filter////////////////
console.log('Retorno filter : '+nums.myFilter(element=>element>=4));
//////////////////////using map///////////////////
const doubleData=nums.myMap(function(data){
                    return data*2;
                 });
console.log('Retorno map : '+doubleData);
//////////////////////using find//////////////////
const foundData=nums.myFind(function(data){
    return data>=4;
})
console.log('Retorno find : '+foundData);
///////////////////////using findindex///////////////////
console.log('Retorno index : '+nums.myFindIndex(function(data){
    return data>=4;
    }))
///////////////////////using contains//////////////////////
if(nums.myContains(200)){
    console.log('lo contiene');
}
///////////////////////using Pluck///////////////////////////////////////
const objectsList=new myArray([{name:'pepito',age:40},{name:'pepita',age:45}])
const names=objectsList.myPluck('name');
console.log('Retorno pluck : '+names); 
///////////////////////using without///////////////////////////////

