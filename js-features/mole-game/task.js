const hittingTarget = document.getElementById("dead");
const missedTarget = document.getElementById("lost");
const holes = document.querySelectorAll(".hole");
let playerWins = 0;
let moleWins = 0;

holes.forEach( hole => {
    hole.addEventListener('click', () => {
        if (hole.classList.contains("hole_has-mole")) {
            hittingTarget.textContent = parseInt(hittingTarget.textContent) + 1
            playerWins++;
        }
        else {
          missedTarget.textContent = parseInt(missedTarget.textContent) + 1  
          moleWins++;
        }

        if (playerWins >= 10) {
            alert('Вы победили!');
            resetStatus()
             
        } else if (moleWins >= 5) {
            alert('Крот победил!');
            resetStatus()
            
        }
        
})
});

function resetStatus() {
    playerWins = 0;
    moleWins = 0;
    hittingTarget.textContent = 0;
    missedTarget.textContent = 0;
}