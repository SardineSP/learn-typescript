const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 밝기 버튼 코드 */
// // 내가 짜본 코드 - class명등 딱히 활용하지 않아서..
// btn.onclick = function (e) {
//     var btnText = e.target.innerText;
//     if (btnText == "Darken") {
//         e.target.innerText = "Lighten";
//         overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
//     } else {
//         e.target.innerText = "Darken";
//         overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
//     }
// }

btn.onclick = function () {
    var btnClass = btn.getAttribute("class");
    if (btnClass == "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";

    }
}

// 이미지 생성 코드
var fileNo = [1, 2, 3, 4, 5];

for (i = 0; i < fileNo.length; i++) {
    let thumbNail = document.createElement('img');
    thumbNail.className = 'img' + fileNo[i];
    thumbNail.src = 'images/pic' + fileNo[i] + '.jpg';
    thumbNail.onclick = function () {
        displayedImage.setAttribute('src', thumbNail.src);
    };
    thumbBar.appendChild(thumbNail);
}

// 예제 내 예문인데 참고만 함
// thumbBar.onclick = function () {
//     var imgNum = 1;
//     const newImage = document.createElement('img');
//     newImage.setAttribute('src', 'images/pic' + imgNum);
//     newImage.setAttribute('alt', xxx);
//     thumbBar.appendChild(newImage);

// }





