const hole = document.getElementById("hole");
const bird = document.getElementById("bird");
const obstacle = document.getElementById("obstacle");
let score = 0;
// set random hole every animation loop 
hole.addEventListener("animationiteration", () => {
    let rand = Math.floor(Math.random() * (500 - 150));
    hole.style.top = rand + "px";
    score++;
});
setInterval(function() {
    // apply gravity to bird
    let birdTop = parseInt(getComputedStyle(bird).getPropertyValue("top"));
    if(!isJumping) {
        bird.style.top = birdTop + 3 + "px";
    }
    // Game Over 
    let holeTop = parseInt(getComputedStyle(hole).getPropertyValue("top"));
    let obstacleLeft = parseInt(getComputedStyle(obstacle).getPropertyValue("left"));
    if (birdTop > 480 || (obstacleLeft < 20 && (birdTop > holeTop + 130 || birdTop < holeTop))) {
        alert(`game Over, your score: ${score}`);
    }
}, 10);
// Jumping
let isJumping = false;
document.addEventListener("click", () => {
    isJumping = true;
    let jumpTimer = 0;
    let jumpSetInterval = setInterval(function() {
        jumpTimer++;
        let birdTop = parseInt(getComputedStyle(bird).getPropertyValue("top")); 
        if(birdTop > 0 && jumpTimer < 15) {
            bird.style.top = birdTop - 5 + "px";
        }
        if(jumpTimer > 20) {
            clearInterval(jumpSetInterval);
            jumpTimer = 0;
            isJumping = false;
        }
    }, 10)
})