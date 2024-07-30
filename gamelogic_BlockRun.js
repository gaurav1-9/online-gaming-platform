let block = document.getElementById('character');
let obstacles = document.getElementById('obstacles');
let page = document.getElementById("body");
page.addEventListener('click', jump);

function jump() {
    obstacles.classList.add("obstacleAnimation")
    block.classList.add("jumpAnimation");
    setTimeout(function () {
        block.classList.remove("jumpAnimation");
    }, 500)
}

let gameConditions = setInterval(function () {
    let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue('left'));
    if ((obstacleLeft < 62 && obstacleLeft >= 0) && blockTop >= 98) {
        obstacles.style.animation = "none";
        obstacles.style.display = "none";
        block.style.animation = "none";
        block.style.display = "none";
        alert("GAME OVER!!");
        location.reload();
    }
}, 10)