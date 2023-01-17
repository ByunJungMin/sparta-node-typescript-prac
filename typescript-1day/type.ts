// typescript 기본 타입

// String
let str: string = 'hello';

// Number
let num: number = 1;

// Boolean
let result: boolean = true;

// Array
let arr: number[] = [1,2,3];

let arr1: string[] = ['1','2','3'];

// Tuple
let arr4: [string, number] = ['hi', 9];

let arr5: [[number, string], string, number] = [[1,'hello'], 'bye', 1];

// Enum
enum Avengers {Capt, IronMan, Thor};
let hero: Avengers = Avengers.Capt;

enum Avengers {Capt, IronMan, Thor};
let hero1: Avengers = Avengers[0];

enum Avengers { Capt = 2, IronMan, Thor };
let hero: Avengers = Avengers[2]; // Capt
let hero: Avengers = Avengers[4]; // Thor

// Any
let str: any = 'hi';
let num: any = 10;
let arr: any = ['a', 2, true];

// Void
let unuseful: void = undefined;
function notuse(): void {
  console.log('sth');
};

// Never
function neverEnd(): never {
    while (true) {
  
    };
};

// Generic
function GenericFunc<T>(a: T): T {
    return a
};

GenericFunc<number>(123);
GenericFunc<string>('hello');