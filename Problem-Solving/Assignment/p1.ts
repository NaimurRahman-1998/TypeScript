{
    const sumNumbers = (parameter: unknown): void => {
        if (Array.isArray(parameter)) {
          if (parameter.every((item) => typeof item === "number")) {
            const sum = parameter.reduce((total, currentItem) => total + currentItem, 0);
            console.log(`the sum is ${sum}`);
          } else {
            console.log("error : parameter is not of type number[] ");
          }
        } else {
          console.log("error : parameter is not an array");
        }
      };
      sumNumbers([45,'5'])
}