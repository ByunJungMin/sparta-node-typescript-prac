// let someValue: any = "this is a string";

// let strLength: number = (<string>someValue).length;


// 위에 있는 코드와 똑같은 의미
// 보통 <string>someValue 보다 someValue as string 방식으로 많이 사용한다.
// 처음 someValue 타입을 any 로 지정했지만
// 밑에서 (someValue as string) 를 사용함으로써 someValue 의 타입을 string 로 바꿔주고
// .length 를 사용 할 수 있게 되는 것이다.
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;