let hamburguer = document.querySelector('.hamburguer');

hamburguer.addEventListener('click', function(){
    document.querySelector('.container').classList.toggle('show-menu');
})

var scrollTop = document.getElementById('link-topo').innerHTML

scrollTop = function scrll() {
    window.scrollTo(0, 0);
};


