function contattaWhatsApp(posterNumero){

    let numero = "393792288557"; // seu número

    let messaggio = `Ciao, ho visto i poster HALOS e vorrei avere maggiori informazioni del poster ${posterNumero}.`;

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(messaggio)}`;

    window.open(url, "_blank");
}

/* Animazione al scroll */
window.addEventListener("scroll", function(){

    let reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++){

        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }
    }
});


