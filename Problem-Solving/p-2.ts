const keyValueArray : [string , any][] = [
    ['id' , 1],
    ['name' , 'shahin'],
    ['isMarried' , true]
]

const getObject = <T extends string , A> (array : [T,A][]) : Record<string,any> =>{
    const restructeredObj = array.reduce((finalObj , [key , value])=>{
        finalObj[key] = value;
        return finalObj;
    }, {} as Record<T,A>)
    return restructeredObj
}

console.log(getObject(keyValueArray))
{
const array : number[] = [1,2,651,66,6,61];

const result = array.reduce((total , currentValue)=>{
    total = total + currentValue;
    return total
},0)

console.log(result);

}