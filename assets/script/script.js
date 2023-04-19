// elements
let pScore = document.querySelector("#playerScore");
let cScore = document.querySelector("#computerScore");
let rockBtn = document.querySelector("#rockBtn");
let paperBtn = document.querySelector("#paperBtn");
let scissorsBtn = document.querySelector("#scissorsBtn");
let pEmoji = document.querySelector("#playerEmoji");
let cEmoji = document.querySelector("#computerEmoji");


// events
rockBtn.addEventListener("click", rockFunction);
paperBtn.addEventListener("click", paperFunction);
scissorsBtn.addEventListener("click", scissorsFunction);


// array
let playerScore = 1;
let computerScore = 1;
let rockEmoji = "✊";
let paperEmoji = "🖐";
let scissorsEmoji = "✌";

let randomEmoji = [rockEmoji, paperEmoji, scissorsEmoji];
let botPick = ["Rock", "Paper", "Scissors"];

let i = "";

function botSelect() {
    i = Math.floor(Math.random()* 3);
    return i;
    
   
}

function rockFunction() {
    let i = botSelect();
    pEmoji.innerHTML = rockEmoji;
    
    if (i == 0) {
        demo.style.fontSize = "4rem";
        demo.textContent = "😫";
        demo2.style.color = "orange";
        ddemo2.textContent = "It's a tie!";
        pScore.innerHTML = pScore.innerHTML;
        cScore.innerHTML = cScore.innerHTML;
        cEmoji.innerHTML = rockEmoji;
    } else if (i == 1) {
        demo.style.fontSize = "4rem";
        demo.textContent = "🤪";
        demo2.style.color = "red";
        demo2.textContent = "You loosed !";
        cScore.innerHTML = computerScore;
        computerScore++;
        cEmoji.innerHTML = paperEmoji;
    } else if (i == 2) {
        demo.style.fontSize = "4rem";
        demo.textContent = "🤬";
        demo2.style.color = "green";
        demo2.textContent = "It's a win !";
        pScore.innerHTML = playerScore;
        playerScore++;
        cEmoji.innerHTML = scissorsEmoji;
    } else {
        console.log("err");
    }
}

function paperFunction() {
    botSelect();
    pEmoji.innerHTML = paperEmoji;
 
    if (i == 1) {
        demo.style.fontSize = "4rem";
        demo.textContent = "😫";
        demo2.style.color = "orange";
        demo2.textContent = "It's a tie!";
        pScore.innerHTML = pScore.innerHTML;
        cScore.innerHTML = cScore.innerHTML;
        cEmoji.innerHTML = paperEmoji;
    } else if (i == 0) {
        demo.style.fontSize = "4rem";
        demo.textContent = "🤬";
        demo2.style.color = "green";
        demo2.textContent = "It's a win !";
        pScore.innerHTML = playerScore;
        playerScore++;
        cEmoji.innerHTML = rockEmoji;
    } else if (i == 2) {
        demo.style.fontSize = "4rem";
        demo.textContent = "🤪";
        demo2.style.color = "red";
        demo2.textContent = "You loosed !";
        cScore.innerHTML = computerScore;
        computerScore++;
        cEmoji.innerHTML = scissorsEmoji;
    } else {
        console.log("err");
    }
}

function scissorsFunction() {
    botSelect();
    pEmoji.innerHTML = scissorsEmoji;
    if (i == 2) {
        demo.style.fontSize = "4rem";
        demo.textContent = "😫";
        demo2.style.color = "orange";
        demo2.textContent = "It's a tie!";
        pScore.innerHTML = pScore.innerHTML;
        cScore.innerHTML = cScore.innerHTML;
        cEmoji.innerHTML = scissorsEmoji;
    } else if (i == 0) {
        demo.style.fontSize = "4rem";
        demo.textContent = "🤪";
        demo2.style.color = "red";
        demo2.textContent = "You loosed !";
        cScore.innerHTML = computerScore;
        computerScore++;
        cEmoji.innerHTML = rockEmoji;

    } else if (i == 1) {
        demo.style.fontSize = "4rem";
        demo.textContent = "🤬";
        demo2.style.color = "green";
        demo2.textContent = "It's a win !";
        pScore.innerHTML = playerScore;
        playerScore++;
        cEmoji.innerHTML = paperEmoji;
    } else {
        console.log("err");
    }
}

