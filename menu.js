var iconToggle = document.getElementById("iconToggle"),
    isVisible = false,
    menuToggle = document.getElementById("menuToggle");

iconToggle.addEventListener("click", function(e){
    e.preventDefault();

    if(!isVisible){        
        menuToggle.style.width = "408px";
        isVisible = !isVisible;
    }else{
        menuToggle.style.width = "calc(0% + 22px)";
        isVisible = !isVisible;
    }
});