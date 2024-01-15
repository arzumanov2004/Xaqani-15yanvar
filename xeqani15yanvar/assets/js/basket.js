const prodacts = document.getElementById('prodacts')

function getBasket() {
    prodacts.innerHTML = ''
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map((item,index) =>{
        const box = document.createElement('div')
        box.className = 'myBox col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'
        box.innerHTML = `
            <img src="${item.image}" alt="">
            <h5>${item.title}</h5>
            <p>$${item.description}</p>
            <button onclick="deleteFromBasket(${index})">Delete</button>
        `;
        prodacts.appendChild(box);
    })
}

function deleteFromBasket(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(cart))
    getBasket()
}
window.onload = ()=>{
    getBasket()
}


