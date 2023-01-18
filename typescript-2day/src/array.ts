let list: number[] = [1, 2, 3];

let list1: string[] = ["안", "녕", "하", "세", "요"];

// 제네릭 타입으로 지정해준 경우 / number[] 와 Array<number> 는 같은 의미
let list2: Array<number> = [1, 2, 3];

let list3: Array<string> = ["안", "녕"];

console.log(list2)
console.log(list3)