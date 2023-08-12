let playOnce = true;

window.addEventListener("scroll", () =>{
    //navbar effect
    if (window.scrollY > 50){
        navbar.style.height = "45px";
    } else{
        navbar.style.height = "90px";
    }

    // ici on met le pourcentage de la page dans une variable en faisant ceci
    //window.innerHeight cest la taille de la barre de défilement
    //document.body.offsetHeight c'est la taille totale de la page (body)
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;

    //image 
    if(scrollValue > 0.45){
        imgImprovise.style.opacity = 1;
        imgImprovise.style.transform = "none";
    }

    //popup
    // && pour que la popup ne reaparaisse pas apres sa premiere apparition

    if(scrollValue > 0.85 && playOnce){
        popup.style.opacity = 1;
        popup.style.transform = "none";
        playOnce = false;
    }
})

// fermer la popup
closeBtn.addEventListener("click", () => {
    popup.style.opacity = 0;
    popup.style.transform = "translateX(500px)";
})

