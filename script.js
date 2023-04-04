// Initialize variables
let score = 0;
let cps = 0;
let pro = 0;
let cost = 10;
const button = document.getElementById('button');
const scoreDisplay = document.getElementById('counter');
const priceDisplay = document.getElementById('price');
const cookiePSDisplay = document.getElementById('cps');
const quantityDisplay = document.getElementById('number');
const container = document.getElementById('cookie_icon');

// Function to update the score based on the CPS
function updateScore() {
  score += cps;
  scoreDisplay.innerText = score;
}

// Event listener for clicking the cookie
container.addEventListener('click', function(clickCookie){
    score++;
    scoreDisplay.innerText = score;
});

// Event listener for clicking the buy button
button.addEventListener('click', function(){
    // Check if there are enough cookies to buy the producer
    if (score >= cost) {
        // Subtract the cost from the cookie count
        score -= cost;
        scoreDisplay.innerText = score;

        // Increment the quantity and update the DOM
        pro++;
        quantityDisplay.innerText = pro;

        // Calculate the new CPS and update the DOM
        cps += 2;
        cookiePSDisplay.innerText = cps;

        // Increase the cost of the next producer
        cost = Math.round(cost * 1.1);
        priceDisplay.innerText = cost;
    }
});

// Update the score every second based on the CPS
setInterval(updateScore, 1000);