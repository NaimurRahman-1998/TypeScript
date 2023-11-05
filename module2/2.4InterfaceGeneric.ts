{
    //for object we declare interface to be passed as argument
    //first we declare object type

    
    type GenericObject<T> = Array<T>
    
    interface User {
        name:string;
        age:number
    }

    const user : GenericObject<User> = [
        {
            name: "jon",
            age:25
        }
    ]

    // now lets make for interface

    interface Developer<T , X = null> {  /* Here X = null means */
        name:string;                     /* X Argument if not available it will be null */
        laptop : {
            model: string;
            ram: number;
        }
        smartWatch : T;
        bike ? : X
    }

    interface TWSWatch {
        brand: string;
        model:string
    }

    const poorDeveloper : Developer<TWSWatch> = {
        name: 'jon',
        laptop: {
            model: "lenovo",
            ram: 8
        },
        smartWatch :{
            brand : "TWS",
            model: "ts458"
        }
    }

    interface AppleWatch {
        brand:string;
        model:string;
        heartRate: boolean;
        sleepTrack:boolean
    }

    interface YamahaBike {
        brand: string;
        CC : number;
    }

    const richDeveloper : Developer<AppleWatch , YamahaBike> = {
        name: 'Sam',
        laptop : {
            model: 'Apple',
            ram : 32
        },
        smartWatch : {
            brand: "Apple Watch",
            model : 'version-5',
            heartRate : true,
            sleepTrack : true
        },
        bike : {
            brand :" Yamaha",
            CC : 150
        }
    }


}