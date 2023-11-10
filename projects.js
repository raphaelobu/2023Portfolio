let list = document.querySelectorAll('.list');
let gridItem = document.querySelectorAll('.gridItem');

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k<gridItem.length; k++){
            gridItem[k].classList.remove('active');
            gridItem[k].classList.add('hide');
        
        if(gridItem[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
            gridItem[k].classList.remove('hide');
            gridItem[k].classList.add('active');
        }
    }
    })
}