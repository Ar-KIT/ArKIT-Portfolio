//HAMBURGER - HEADER
const checkbox = document.getElementById('checkbox');
const menuContainer = document.querySelector('.menuContainer');
checkbox.addEventListener('click', function() {
    menuContainer.classList.toggle('active');
});

//TYPEWRITER - HOME
const typeElement = document.querySelector(".type");
let texts = ["AZIL ROTONI.", "FRONTEND DEVELOPER.", "WEB DESIGNER.","JAVA DEVELOPER.","VBA DEVELOPER.", "INNOVATOR.", "ArKIT."];
let typeSpeed = 100;
let eraseSpeed = 100;
let insertDelay = 100;
let eraseDelay = 3000;

function typeWriter(element, text){
    const txtLength = text.length;
    let txtIndex = 0;

    function nextChar(){
        if(txtIndex < txtLength){
            const txtChar = document.createElement("span");
            txtChar.textContent = text.charAt(txtIndex);
            element.appendChild(txtChar);
            txtIndex++;
            setTimeout (nextChar, typeSpeed);
        }else{
            setTimeout (eraseText, eraseDelay);
        }
    }

    function eraseText() {
        const txtChars = element.querySelectorAll("span");
        const lastCharIndex = txtChars.length - 1;

        if (lastCharIndex >= 0) {
        const lastChar = txtChars[lastCharIndex];
        lastChar.parentNode.removeChild(lastChar);
        setTimeout(eraseText, eraseSpeed);
        } else {
        const nextTextIndex = (texts.indexOf(text) + 1) % texts.length;
        const nextText = texts[nextTextIndex];
        setTimeout(() => {
            typeWriter(element, nextText);
        }, insertDelay);
        }
    }

    setTimeout(nextChar, insertDelay);
}
setTimeout(() => {
    typeWriter(typeElement, texts[0]);
}, 2000);