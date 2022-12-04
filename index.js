const colors=["green", "red", "pink", "violet", "blue", "orange", "yellow", "brown","grey","magenta", "salmon"];
const button = document.getElementById('button');



button.addEventListener ('click', function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];

})
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
