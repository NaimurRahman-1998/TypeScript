// {
//   const getPromise = async () => {
//     const promise = new Promise((resolve, reject) => {
//       const condition = false;
//       if (condition) {
//         resolve("Hello");
//       } else {
//         reject("Error occured");
//       }
//     });
//     return promise;
//   };

//   interface Error {
//     message: string;
//   }

//   const showData = async () => {
//     const data = await getPromise();
//     console.log(data);
//   };

//   showData();
// }
// // now we will try typeScript
// {
//     interface Response {
//         greet : string
//     }
//     const getPromise = async ():Promise<Response> => {
//         const promise = new Promise<Response>((resolve, reject) => {
//           const condition = false;
//           if (condition) {
//             resolve({greet : "string"});
//           } else {
//             reject("Error occured");
//           }
//         });
//         return promise;
//       };
    
//       interface Error {
//         message: string;
//       }
    
//       const showData = async () => {
//         const data : Response = await getPromise();
//         return data
//       };
    
//     //   showData();
// }
// fetch api
{
    interface Todo {
        userId: number;
        id: number;
        title:string;
        completed: boolean;
    }
    const getTodos = async() : Promise<Todo>=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

        const data = await response.json();

        return data
    }

    getTodos();
}