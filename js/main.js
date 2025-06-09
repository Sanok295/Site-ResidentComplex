const apartments = document.querySelector('.apartments__grid');

apartments.addEventListener('click', (e) => {
    const clickedItem = e.target.closest('.apartments__grid-item');

    if(clickedItem){
        const bg = clickedItem.querySelector('div');
        bg.classList.toggle('vieAparts');
        clickedItem.classList.toggle('scaleAparts');
        
    }
})