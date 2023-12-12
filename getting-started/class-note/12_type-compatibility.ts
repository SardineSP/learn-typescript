// 인터페이스
interface Developer12 {
    name: string;
    skill: string;
}

// interface Person {
//     name: string;
// }

class Person12 {
    name: string;
}

var developer: Developer12;
var person: Person12;
developer = new Person12(); // 구조적으로 오른쪽이 더 커야 호환이 됨.
person = developer;

// 함수
var add1 = function (a: number) {
    // ...
}
var sum1 = function (a: number, b: number) {
    // ...
}

sum1 = add1;
// add1 = sum1;

// 네제릭
interface Empty<T> {
    //..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;

interface NotEmpty<T> {
    data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2;