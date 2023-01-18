// object | null 의 의미는 교차타입으로 object와 null 둘다 가능하다.
// object 는 원시타입이 아닌 타입을 의미한다 ex) number, string, boolean, bigint, symbol, null undefined 가 아닌것들
function create(o: object | null): void {}

create({ prop: 0 }); // 성공
create(null); // 성공

// create(42); // 오류
// create("string"); // 오류
// create(false); // 오류
// create(undefined); // 오류