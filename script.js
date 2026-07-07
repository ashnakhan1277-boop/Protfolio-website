const topBtn = document.getElementById("topBtn");

topBtn.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}
const words = [
    "Full Stack Developer",
    "Frontend Developer",
    "PHP Developer",
    "Freelancer"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let currentChar = "";

const typing = document.querySelector(".typing");

function type(){

    if(wordIndex == words.length){
        wordIndex = 0;
    }

    currentWord = words[wordIndex];

    currentChar = currentWord.slice(0,++charIndex);

    typing.textContent = currentChar;

    if(currentChar.length == currentWord.length){

        wordIndex++;

        charIndex = 0;

        setTimeout(type,1000);

    }else{

        setTimeout(type,150);

    }

}

type();
 <form action="https://formsubmit.co/ashnakhan1277@gmail.com" method="POST">

    <input type="text" name="name" placeholder="Your Name" required>

    <input type="email" name="email" placeholder="Your Email" required>

    <textarea name="message" placeholder="Your Message" required></textarea>

    <input type="hidden" name="_captcha" value="false">

    <button type="submit">Send Message</button>

</form>