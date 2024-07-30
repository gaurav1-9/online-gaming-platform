let inputDir = { x: 0, y: 0 };
let speed = 4;
let lastPaintTime = 0;
let snakeArr = [{ x: 9, y: 9 }];
let score = 0;
let sc = document.querySelector("#scoreDisp");
food = { x: 13, y: 15 };

function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
    sc.textContent = score;

}

function isCollide(sArr) {
    for (let i = 1; i < snakeArr.length; i++) {
        if (sArr[i].x === sArr[0].x && sArr[i].y === sArr[0].y) {
            return true;
        }
    }
    if (sArr[0].x >= 18 || sArr[0].x <= 0) {
        return true;
    }
    if (sArr[0].y >= 18 || sArr[0].y <= 0) {
        return true;
    }
}

function gameEngine() {
    if (isCollide(snakeArr)) {
        inputDir = { x: 0, y: 0 };
        snakeArr = [{ x: 9, y: 9 }];
        score = 0;
        speed = 4;
        alert("GAME OVER!!");
    }

    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        let a = 2;
        let b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
        speed += 0.5
        console.log(speed);
        score += 1;
        sc.textContent = score;
    }

    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.style.margin = "0.7px";
        snakeElement.style.borderRadius = "5px";
        snakeElement.classList.add('head');
        board.appendChild(snakeElement);
    });

    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.borderRadius = "5px";
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}

//main function
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = { x: 0, y: 1 };
    switch (e.key) {
        case "ArrowUp":
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
})