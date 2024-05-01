const test = "test";

const array  = [1,10,20,2, 2,3,3,4,5,];

const sumFunction = (arr) => {
    let countSum = 0;
for(let i = 0 ; i <arr.length ; i++ ){
countSum += arr[i];
}
return countSum;
}

console.log(sumFunction(array));

const sum  = array.reduce((arr , acc) => arr + acc, 45)
console.log(sum);

const sortArray  = array.sort((a , b ) => b - a)
console.log(sortArray);

const uniqueNumbers = Array.from(new Set(array));

console.log(uniqueNumbers);

const newUniqueNumbers  = array.filter((value , i, self) => self.indexOf(value) === i)

const str = "andRey";


console.log(Array.from(str.toUpperCase()));