interface Point {
    // readonly 는 읽기만 가능하고 값의 변경이 불가능하다.
    readonly x: number;
    readonly y: number;
}


let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // 오류!
console.log(p1.x)