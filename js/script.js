
if(window.SimpleSlide){
    new SimpleSlide({
        slide: "quote", //nome do atributo data-slide="quote"
        nav: false, //se deve ou não mostrar a navegação
        auto: true, //se o slide deve passar automaticamente
        time: 5000 //tempo de transição dos slides
    });

    new SimpleSlide({
        slide: "portfolio", //nome do atributo data-slide="quote"
        nav: true, //se deve ou não mostrar a navegação
        auto: true, //se o slide deve passar automaticamente
        time: 5000 //tempo de transição dos slides
    });
}

if(window.SimpleAnime){
    new SimpleAnime();
}