/*  --------- Reference type/Non primitive --> Object Type */

/* implicit type */
// let user = {
//     firstName : 'jon',
//     middleName : 'adam',  
//     lastName : 'joe' 
// }



/** explicitly defining object properties */
let user : {
    company: 'Programming Hero';  /* literal Type */
    readonly country: string;     /* inserted access Modifier */
    firstName : string;
    middleName ?: string;  /* optional types --> " ? "   string | undefined */
    lastName : string;
} = {
    country : 'BD',
    company : 'Programming Hero',  
    firstName : 'jon',
    // middleName : 'adam',  
    lastName : 'joe' 
}

// here we can export the object and Ts compiler will give suggestions of the object properties

// user.company = "Programming Hero BD"  /** it will give error cannot override literal Type */