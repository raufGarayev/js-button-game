const myBtn = document.querySelectorAll('button')
const myDivs = document.querySelectorAll('div')
const mike = document.getElementById('wazowski')
const audio = new Audio("squeak.wav");
let clicks = 0;

myBtn.forEach(btn => {
    btn.addEventListener('click', startGame);
 });

function startGame(e) {
    clicks++
    audio.play()
    let rNum = Math.floor(Math.random() * 4);

    const clickedButton = e.target

    if(clickedButton.classList.contains('btn')) {

        if(rNum == 1) {
            clickedButton.style.background = 'blue'
        }
        else if(rNum == 2) {
            clickedButton.style.background = 'red'
        }
        else {
            clickedButton.style.background = 'green'
        }
    }

    if(clicks == 5)
    {
        confirmAction()
    }
    else if(clicks == 10)
    {
        alert("Bezmədin?")
    }
    else if(clicks == 15)
    {
        alert("Bekarsan?")
    }
    else if(clicks == 17)
    {
        mike.style.display = 'block'
    }
    
}

function confirmAction() {
    let confirmAction = confirm("Davam etmək istəyirsiniz?");
    if (confirmAction) {
      alert("Buyurun");
    } else {
      alert("-.-");
    }
  }