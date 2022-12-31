const red = document.querySelector('#circle-red');
const green = document.querySelector('#circle-green');
const blue = document.querySelector('#circle-blue');

const interval = [1000, 2000, 1800, 1200, 1500];
const radius = [100, 50, 40, 30, 20];
const colors = ['red', 'green', 'blue'];

setInterval(() => {
    for (let i = 0; i < 1; i++) {
        red.style.borderRadius = `${radius[Math.floor(Math.random() * radius.length)]}%`;
        green.style.borderRadius = `${radius[Math.floor(Math.random() * radius.length)]}%`;
        blue.style.borderRadius = `${radius[Math.floor(Math.random() * radius.length)]}%`;

        red.style.left = `${Math.ceil(Math.random() * 100)}vh`;
        green.style.left = `${Math.ceil(Math.random() * 100)}vh`;
        blue.style.left = `${Math.ceil(Math.random() * 100)}vh`;

        red.style.top = `${Math.ceil(Math.random() * 100)}vh`;
        green.style.top = `${Math.ceil(Math.random() * 100)}vh`;
        blue.style.top = `${Math.ceil(Math.random() * 100)}vh`;

        red.style.height = `${Math.ceil(Math.random() * 100)}vh`;
        green.style.height = `${Math.ceil(Math.random() * 100)}vh`;
        blue.style.height = `${Math.ceil(Math.random() * 100)}vh`;

        red.style.width = `${Math.ceil(Math.random() * 100)}vh`;
        green.style.width = `${Math.ceil(Math.random() * 100)}vh`;
        blue.style.width = `${Math.ceil(Math.random() * 100)}vh`;
    }
}, interval[Math.floor(Math.random() * interval.length)]);