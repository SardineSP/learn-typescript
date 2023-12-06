enum Shoes {
    Nike = 'nike',
    Adidas = 'adidas'
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0

// 예제
enum Answer {
    Yes = 'Y',
    No = 'N',
}

function askQuestion(answer: string) {
    if (answer == Answer.Yes) {
        console.log('정답입니다.')
    }
    if (answer == Answer.No) {
        console.log('오답입니다.')
    }
}
askQuestion(Answer.Yes);
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');