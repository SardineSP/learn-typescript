type Heroes = 'Hulk' | 'Capt' | 'Thor'
type HeroAges = { [K in Heroes]: number }

// 위를 토대로 객체 생성
const ages: HeroAges = {
    Hulk: 33,
    Capt: 100,
    Thor: 23
}

// for in 반복문 코드
// var array = ['a', 'b', 'c'];
// for (var key in array) {
//     console.log(arr[key]);
// }