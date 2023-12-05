// interface People {
//     name: string;
//     age: number;
// }

type People = {
    name: string;
    age: number;
}

var jack: People = {
    name: '잭',
    age: 30
}

type MyString = string;
var str1: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {

}
