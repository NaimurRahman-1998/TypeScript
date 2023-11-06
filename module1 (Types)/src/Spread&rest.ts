/*  spread operator */

{
  let friends1: string[] = ["rachel", "monica", "phebe"];
  let friends2: string[] = ["chandler", "ross", "joe"];

  // friends1.push(friends2) //wrong bcz it will look like -> ['rachel','monica','phebe' , ['chandler','ross','joe']]

  //correct way
  friends1.push(...friends2); // destructured every element and then push
  console.log(friends1);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "nahid",
  };

  const mentorsList = {...mentors1 , ...mentors2}

  /*---------- rest operator --------------*/

  const greetFriends = (friend1:string , friend2:string ,  friend3:string) =>{
    console.log(`Hi ${friend1 + friend2 + friend3}`);
  }



  greetFriends('abul','kabul','babul')
  //what if i have more than 3 arguments to pass

  greetFriends('abul','kabul','babul','dabul','mabul')

  //for that i want ther function body to accept array of arguments so that i can pass as many arguments as i like

  //so

  const newGreetFriends = (...friends : string[]) => {    // here we use rest operator which will take all the args and make an array
    friends.forEach(friend=> console.log(`Hi ${friend}`))
  }

  newGreetFriends('abul','kabul','babul','dabul','mabul') // now it doesn't give any error

  const friends : string[] = ['abul','kabul','babul','dabul','mabul' ]

  //  suppose that 3rd element of friends array is BestFriend.

  /* let bestFriend = friends[2]; */ 

  // or

  /* const [a,b,bestFriend] = friends; */

  // suppose the i want the remaining friends to be called normal friends

  const [a,b,bestFriend , ...normalFriends] = friends;
  
















}
