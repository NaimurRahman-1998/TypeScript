// ternary operator
{
const age : number = 15;

    if(age>=18){console.log('adult')}
    else{console.log('not adult');}

//or

    const isAdult =( age>= 18 ? 'adult' : 'not Adult')
    // console.log({isAdult});

// nullish coalescing works for only null or undefined values


const isAuthenticated2 = null;

const login2 = isAuthenticated2 ? 'user' : 'guest'
console.log({login2});

// or

const isAuthenticated = null;

const login = isAuthenticated ?? 'guest'

console.log({login});





















}