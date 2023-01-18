// 타입스크립트 에서는 함수의 인자를 모두 필수값으로 간주한다.
// 따라서 null값이나 undefined 값이라도 인자로 넘겨야 한다.
function sum2(a: number, b: number): number {
    return a + b;
}

sum2(10, 20); // 30
// sum(10, 20, 30); // error, too many parameters
// sum2(10); // error, too few parameters
