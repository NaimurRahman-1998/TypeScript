//Develop a TypeScript function to retrieve specific details from an array of objects. Your task is to extract 'id' and 'name' properties, unveiling their concealed values.
interface User {
  name: string;
  id: number;
}
type ArrayofObj = Array<User> | User[];

const arrObj: Array<User> = [
  {
    name: "jon",
    id: 1,
  },
  {
    name: "sam",
    id: 2,
  },
];

const getPropertiesOfArrayofObj = <T, K extends keyof T>(
  array: T[],
  key: K
): T[K][] => {
  return array.map((obj) => obj[key]);
};

const result = getPropertiesOfArrayofObj(arrObj,"id");
console.log(result);
