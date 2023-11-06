{
    const add = (n1 : string | number , n2 : string | number) : string | number =>{
        if(typeof n1 === 'number' && typeof n2 === 'number'){  // checking type of gaurd 
            return n1+n2
        } else {
            return n1.toString() + n2.toString()
        }
    }

    interface NormalUser {
        name : string;
    }
    interface AdminUser {
        name: string;
        role:string;
    }

    const checkuser = (user : NormalUser | AdminUser) =>{
        if('role' in  user){
            return `This is ${user.name} and he is ${user.role}`
        } else {
            return `This is ${user.name} and he is normal user`
        }
    }

    console.log(checkuser({name:"normal" }))
}