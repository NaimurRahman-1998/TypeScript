{
    interface Sheikh {
        bike: string;
        car: string;
        boat: string
    }

    type Vehicle<T> = T extends keyof Sheikh ? true : false;

    type HasTractor = Vehicle<"tractor"> 
    type HasBike = Vehicle<"bike"> 
}