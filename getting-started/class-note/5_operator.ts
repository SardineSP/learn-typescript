// function logMessage(value: any){
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100);

var welcome: string | number | boolean;
function logMessage(value: string | number) {
    if (typeof value == 'number') {
        value.toLocaleString();
    }
    if (typeof value == 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// function askSomeone(someone: Developer | Person) {
//     // someone.age
//     // someone.name
// }
// askSomeone({ name: '디벨로퍼', skill: '웹개발'});
// askSomeone({ name: '잭스', age: 20});

function askSomeone(someone: Developer & Person) {
    someone.age
    someone.name
    someone.skill
}
askSomeone({ name: '디벨로퍼', skill: '웹개발', age: 34 });
// askSomeone({ name: '잭스', age: 20});

// var arena: string | number | boolean;
// var beta: string & number & boolean;