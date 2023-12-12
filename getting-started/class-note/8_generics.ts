// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10);
// logText('hi');

// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }
// logText<string>('하이');

// function logText(text: string) {
//     console.log(text);
//     // text.split('').reverse().join('');
//     return text;
// }

// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }
// 위와 같이 하나하나 선언하면 문제는 없지만 이 경우 너무 양이 방대해지고 비효율적임

// function logText(text: string | number) {
//     console.log(text);
//     // 이 경우 교집합이기 때문에 둘 다 공통으로 접근가능한 속성에만 접근 가능.
//     // 예를 들어 split은 제공되지 않음 => number가 들어갈 수도 있기 때문
//     return text;
// }

// logText('a');
// logText(10);
// const numb = logNumber(10);
// logText(true);

function logText<T>(text: T): T {
    console.log(text);
    return text;
}

const strg = logText<string>('abc');
strg.split('');
const login = logText<boolean>(true);

// logText('a');
// logText(10);

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

// const obj: Dropdown = { value: 'abc', selected: false };


// interface Dropdown<T> {
//     value: T;
//     selected: boolean;
// }

// const obj: Dropdown<string> = { value: 'abc', selected: false };

// 제네릭의 타입제한
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length);
//     text.forEach(function (text) {
//         console.log(text);
//     });
//     return text;
// }
// logTextLength<string>(['hi', 'abc']);

// 제네릭의 타입제한 2
interface LengthType {
    length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
logTextLength('a');

// 정의된 타입을 이용해서 제네릭을 사용한다고 선언하면 타입 제한이 생김.
// 예를 들어 일반 number값은 length를 쓸 수 없어서 못씀

// 제네릭의 타입제한 3 - keyof
// 이미 정의된 인터페이스의 'key' 값만 (name, price, stock) 들어갈 수 있게 제한됨
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}
// getShoppingItemOption(100);
// getShoppingItemOption('a');
getShoppingItemOption("name");



