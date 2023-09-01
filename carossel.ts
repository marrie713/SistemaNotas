document.querySelector('#items')
.addEventListener('wheel', event => {
    if(event.deltaY > 0){
        console.log('sroll up');
        }
    
        else{
            console.log('scroll down')
    }

})