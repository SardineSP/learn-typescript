interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Tony', age: 33, skill: 'Making' }
}
var tony = introduce();
console.log(tony.name); // 공통된 속성만 접근 가능하므로 name만 가능

if ((tony as Developer).skill) {
    var skill = (tony as Developer).skill;
    console.log(skill);
} else if ((tony as Person).age) {
    var age = (tony as Person).age;
    console.log(age);
}

// 타입가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
    console.log(tony.skill);
} else {
    console.log(tony.age);
}