// Constants
const scoreDisplay = document.getElementById('scoreDisplay');
const clickBtn = document.getElementById('fireClick')
const firePicture = document.querySelector('.firePic')
const smokePicture = document.querySelector('.smokePic')

// Functions
function displayOfScore ()
{
    scoreDisplay.innerHTML = score;
}

function changePicture (){
    firePicture.style.display = "none"
}

function changeToSmoke (){
    smokePicture.style.display = "block"
}

// Variables
var score = 0;
var clickBtnValue = 1;

// addEventListener
clickBtn.addEventListener('click', function (){
    score+=clickBtnValue
    displayOfScore()
    if (score > 10)
    {
        changePicture()
        changeToSmoke()
    }

})

