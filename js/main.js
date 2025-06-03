const apartments = document.querySelectorAll('.apartments__grid-item');

apartments.forEach(item =>{
    item.addEventListener('click', function(){
        const bg = this.querySelector('.apartments__grid-item__bg');

        if (bg) {
            item.classList.toggle('scaleAparts');
            bg.classList.toggle('vieAparts');
        }
    })
})