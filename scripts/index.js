let bagItems;
onLoad()
function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems')
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    console.log(bagItems,+' '+bagItems.length)
    
    displayItemsOnHomePage()
    displayBagItemCount()
}


function addToBag(itemId) {
    bagItems.push(itemId)
    console.log(bagItems)
    localStorage.setItem('bagItems',JSON.stringify(bagItems))
    displayBagItemCount()

}

function displayBagItemCount() {
    let bagItemcountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagItemcountElement.style.visibility='visible'
        bagItemcountElement.innerText = bagItems.length
        console.log(bagItems.length)
    } else {
        bagItemcountElement.style.visibility='hidden'
    }
}



function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.items-container');
    if (!itemsContainerElement) {
        return
    }
let innerHTML=''
items.forEach(item => {
    innerHTML+=`<div class="item-container">
    <img class="img-item" src="${item.image}" alt="item image">
    <div class="rating">
        ${item.rating.stars} ⭐| ${item.rating.count}
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">
        ${item.item_name}
    </div>
    <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% off)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`
});
    
itemsContainerElement.innerHTML = innerHTML;
}

