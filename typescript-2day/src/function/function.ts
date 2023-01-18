// "noImplicitAny": true 를 tsconfig.json 에서 사용함으로써
// 암시적 any타입 허용하지 않음
// function sum(a, b) {
//     return a + b;
//   }

////////////////////////////

function sum(a: number, b: number): number {
    return a + b;
  }


export {sum}

