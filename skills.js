let list = document.querySelectorAll('.skillList');
let cloudItem = document.querySelectorAll('.cloudItem');


for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
            console.log('i');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k<cloudItem.length; k++){
            cloudItem[k].classList.remove('active');
            cloudItem[k].classList.add('hide');
        
        if(cloudItem[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
            cloudItem[k].classList.remove('hide');
            cloudItem[k].classList.add('active');
        }
    }
    })
}