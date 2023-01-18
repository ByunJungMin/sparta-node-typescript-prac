// 타입을 any로 주게 되면 어떠한 타입도 다 가능하므로
// 다음과 같은 데이터를 할당하였을 경우 에러가 나지 않는다.
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // 성공, 분명히 부울입니다.

console.log(notSure)