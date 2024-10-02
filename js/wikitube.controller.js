'use strict'

function onInit() {
    onGetTop5()
    // getTop5()
}

function onGetTop5() {
    getTop5(renderTop5) 
}

function renderTop5(data) {
    console.log(data)
    const elCardsList = document.querySelector('.cards') 

    const strHtmls = data.map(card =>
        `<div class="card" data-id="${card.id}">
            <div><img class="thumbnail" src="${card.img}" alt=""></div>
            <div><p class="description" >${card.description}</p>
            <p class="channel" >${card.channel}</p></div>
        </div> 
        `)
        elCardsList.innerHTML = strHtmls.join('')    
}