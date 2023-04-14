function getHole(index) {
    let id = 'hole' + index;
    return document.getElementById(id);
}

let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

let holes = document.querySelectorAll('.hole');
for (let hole of holes) {
    hole.addEventListener('click', function(event) {
        if (event.target.className.includes('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1;
        } else {
            lost.textContent = Number(lost.textContent) + 1;
        }    
        checkGameOver();
    });
}

function checkGameOver() {
    let gameOver = false;
    let alertText;
    if (Number(dead.textContent) >= 10) {
        gameOver = true;
        alertText = 'Вы победили!';
    } else if (Number(lost.textContent) >= 5) {
        gameOver = true;
        alertText = 'Вы проиграли!';
    }

    if (gameOver) {
        alert(alertText);
        lost.textContent = '0';
        dead.textContent = '0';
    }
}