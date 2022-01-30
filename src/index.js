

//task 4
let hurry = setTimeout(() => {
    alert('hurry up!');
}, 15000);
//task 1
let typedString = '';
document.addEventListener("keydown", (event) => {
    refreshTimer();
    typedString += event.key;

    if (typedString == 'hello') {
        alert('ok');
    }
});
//task 2
let xy = document.querySelector('#XY');

document.addEventListener("dblclick", (event) => {
    console.log(event.clientX, event.clientY);
    xy.innerHTML = `X: ${event.clientX}, y: ${event.clientY} `;
    refreshTimer();
});
//task 3
document.querySelector('#cube').ontouchmove = (event) => {
    console.log(event);
};
//task 5
document.addEventListener("mousemove", (event) => {
    refreshTimer();
});
//task 5
const refreshTimer = () => {
    clearTimeout(hurry);
    hurry = setTimeout(() => {
        alert('hurry up!');
    }, 15000);
};
