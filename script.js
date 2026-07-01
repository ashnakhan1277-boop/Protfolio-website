const topBtn = document.getElementById("topBtn");

topBtn.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}