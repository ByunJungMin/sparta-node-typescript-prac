enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

console.log(c)


// 모든 값을 수동으로 설정하는 것도 가능하다.
// enum Color {
//     Red = 1,
//     Green = 2,
//     Blue = 4,
//   }
//   let c: Color = Color.Blue;
  
//   console.log(c)


// enum Color {Red = 1, Green, Blue}
// let colorName: string = Color[2];

// console.log(colorName); // 값이 2인 'Green'이 출력됩니다.