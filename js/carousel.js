/* 반지름 공식 : 원의 둘레 /2 / 3.14 */

const center = document.querySelector('.list-item');

const items = document.querySelectorAll('.list-item li');

const radius = (items[0].offsetWidth * items.length) / 3.14 / 2.2;

items.forEach((item, index) => {
  item.style.transform = `rotateY(${
    (360 / items.length) * index
  }deg) translateZ(${radius}px)`;
});

const angle = 360 / items.length;
let currAngle = 0;

document.addEventListener('click', function (event) {
  // 화면 오른쪽을 눌렀을 경우
  if (window.innerWidth / 2 < event.clientX) {
    currAngle += angle;

    // 화면 왼쪽을 눌렀을 경우
  } else {
    currAngle -= angle;
  }
  center.style.transform = `translate(-50%, -50%) rotateY(${currAngle}deg)`;
});
