// JS 문자열 선언
//var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
// let arr: Array<number> = [1,2,3];
let heroes: Array<string> = ['Capt', 'Thor']
let items: number[] = [1, 2, 3];
let names: string[] = ['adgar', 'beacon']

// TS 튜플 : 모든 인덱스의 타입이 정의되어있는 배열
let address: [string, number] = ['gangnam', 100];

// TS 객체
// let obj: object = {};
// let person: object = {
//     name: 'adgar',
//     age: 100
// }

let person: { name: string, age: number } = {
  name: 'beacon',
  age: 120
}

// TS 진위값
let show: boolean = true;