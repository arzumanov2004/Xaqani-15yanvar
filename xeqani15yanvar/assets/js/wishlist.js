const prodacts = document.getElementById('prodacts')

function getWishlist() {
    prodacts.innerHTML = ''
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.map((item,index) =>{
        const box = document.createElement('div')
        box.className = 'myBox col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'
        box.innerHTML = `
            <img src="${item.image}" alt="">
            <h5>${item.title}</h5>
            <p>$${item.description}</p>
            <button onclick="deleteFromWishlist(${index})">Delete</button>
        `;
        prodacts.appendChild(box);
    })
}

function deleteFromWishlist(index) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.splice(index,1)
    localStorage.setItem('wishlist',JSON.stringify(wishlist))
    getWishlist()
}
window.onload = ()=>{
    getWishlist()
}