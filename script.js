const mainDiv = document.querySelector(".mainDiv");
const attemptCount = document.querySelector("#attemptCount");
let number = Math.floor((Math.random() * 40)+1);
let count = 0;
let maxAttempts = 6;
let stopper = false;
console.log(number);

alert("WELCOME!!!!\n1. Red - The guessed number is lower.\n2. Yellow - The guessed number is Higher.\n3. Total number of attempts is 6.")
for (let i = 1; i <= 40; i++) {
    const circleDiv = document.createElement("div");
    circleDiv.classList.add("circle");
    circleDiv.innerHTML = i;
    mainDiv.appendChild(circleDiv);
    circleDiv.addEventListener("click", () => colorChanger(circleDiv));
}

const colorChanger = (circleDiv) => {
    console.log(circleDiv.innerHTML);
    if (stopper) {
        alert("Game Over!! Restart to Play again")
        return;
    }
    count++;
    setTimeout(updateCount(count),100);

    if (circleDiv.innerHTML > number) {
        circleDiv.setAttribute("style", "background-color: yellow;color:black");
    }
    else if (circleDiv.innerHTML < number) {
        circleDiv.setAttribute("style", "background-color: red");
    }
    else if (circleDiv.innerHTML == number) {
        circleDiv.setAttribute("style", "background-color: green");
        stopper = true;
        setTimeout(() => {
            alert(`Congratulations! You found the correct number, Number of turns:${count}`);
        }, 100);
        return;
    }
    if (count >= 6) {
        stopper = true;
        setTimeout(()=>{
            alert('Game over! You have reached the maximum number of clicks.');
        },100)
    }
}


const updateCount = (count)=>{
    attemptCount.innerHTML = ''; 
    const countText = document.createElement("h3");
    countText.textContent = `Number of Attempt Left: ${maxAttempts - count}`;
    attemptCount.appendChild(countText);
}
const restartFunc = ()=>{
    location.reload();
}