// 일반 상속 
// interface Person {
//     name: string;
//   }
  
// interface Developer extends Person {
//     skill: string;
// }

// let fe = {} as Developer;

// fe.name = 'josh';
// fe.skill = 'TypeScript';



//////////////////////////////

// 다중 상속
interface Person {
    name: string;
}
  
interface Drinker {
    drink: string;
}

// 상속을 두가지를 받았기 때문에 name 과 drink를 사용할 수 있다.
interface Developer extends Person, Drinker {
    skill: string;
}
  
let fe = {} as Developer;
fe.name = 'josh';
fe.skill = 'TypeScript';
fe.drink = 'Beer';