{
    interface Vehicle {
        bike : string;
        car : string;
        bus : string;
    }

    type Owner = "bike" | "car" | "bus";
    type Owner2 = keyof Vehicle
    /*  both are same */
    const user : Owner = "bike"
    const user2 : Owner2 = "bike"
}
{

    // now we want to make a function where we pass an object as argument 
    // and that functio will return all the key values of the object

    const getKeyValuesOfObject = <X , Y>(obj : X , key : Y) => {
        // return obj[key]       // ----->it is giving error
    } ;

    const user = {
        name:'jon',
        id:4569,
    }

    const result1 = getKeyValuesOfObject<object , string>(user, 'name')
    // because in the second argument we can pass garbage vlaues but it will not give error
    const result2 = getKeyValuesOfObject<object , string>(user, 'habijabi')
}
// so to fix this
{
    const getKeyValuesOfObject = <X , Y extends keyof X>(obj : X , key : Y) => {
        return obj[key]       /*           |                                             */
    } ;                       /*           |--->> meaning Y Must have the keys of X type */

    const user = {
        name:'jon',
        id:4569,
    }
    const result1 = getKeyValuesOfObject(user, 'name')
    // const result2 = getKeyValuesOfObject(user, 'habijabi') // ->> now it will give error
}