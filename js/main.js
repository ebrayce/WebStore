let prodIds = 1;
let sizeIds = 1;
let colsIds = 1;

let imageUrls = [
    'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw2dfb39fb/images/2020/3O001051_410_LD_F.jpg?sw=344&sh=529&sm=cut',
    'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwfcb9afa1/images/2020/3W001233_5418_LD_F.jpg?sw=344&sh=529&sm=cut',
    'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw6af841b5/images/2020/3W001117_5489_LD_F.jpg?sw=344&sh=529&sm=cut',
    'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw1bb6cb20/images/2020/3L001038_5732_LD_F.jpg?sw=344&sh=529&sm=cut',
    'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwca256b24/images/2020/3O001056_056_LD_F.jpg?sw=344&sh=529&sm=cut',
    'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwfa98ed65/images/2020/3K1138_410_LD_F.jpg?sw=344&sh=529&sm=cut',
    'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw6d575bac/images/2020/3P001038_250_LD_F.jpg?sw=344&sh=529&sm=cut',
    'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw8baf31e8/images/2020/3V011415_459_LD_B.jpg?sw=344&sh=529&sm=cut',
]

let products = []
let cart = []
let colour = {
    id: 0,
    hash: "",
    name: ""
}
let product = {
    name: "",
    price: "",
    description: "",
    colors: [],
    sizes: [],
    images: []
}

let cartCount = $("#cartCount")

function getItemFromStore(key) {
    return JSON.parse(localStorage.getItem(key));
}


function saveItemToStore(item, key) {
    localStorage.setItem(key, JSON.stringify(item));
}

function hasStoredData() {
    return !!localStorage.getItem('loaded')
}

function loadProducts() {

    if (hasStoredData()) {

        //Load all the products from the local storage
        products = getItemFromStore('products')
    } else {
        let pds = [
            {
                id: ++prodIds,
                name: "Boys' Glow In The Dark Whale Long-Sleeve Pocket Tee",
                description: "Style that will light you up! As comfortable as an old friend, our glow-in-the-dark classic cotton whale tees are every kids favorite.",
                price:450,
                sizes: [
                    {
                        id: ++sizeIds,
                        name: 'S'
                    },
                    {
                        id: ++sizeIds,
                        name: 'L'
                    },
                    {
                        id: ++sizeIds,
                        name: 'XL'
                    },
                    {
                        id: ++sizeIds,
                        name: 'XXL'
                    },
                ],
                colors: [
                    {
                        id: ++colsIds,
                        hash: "#D50000",
                        name: "Red",
                    },
                    {
                        id: ++colsIds,
                        hash: "#F50057",
                        name: "Pink",
                    },
                ],
                images: imageUrls

            },
            {
                id: ++prodIds,
                name: "Boys' Glow In The Dark Whale Long-Sleeve Pocket Tee",
                description: "Style that will light you up! As comfortable as an old friend, our glow-in-the-dark classic cotton whale tees are every kids favorite.",
                price:450,
                sizes: [
                    {
                        id: ++sizeIds,
                        name: 'S'
                    },
                    {
                        id: ++sizeIds,
                        name: 'L'
                    },
                    {
                        id: ++sizeIds,
                        name: 'XL'
                    },
                    {
                        id: ++sizeIds,
                        name: 'XXL'
                    },
                ],
                colors: [
                    {
                        id: ++colsIds,
                        hash: "#D50000",
                        name: "Red",
                    },
                    {
                        id: ++colsIds,
                        hash: "#F50057",
                        name: "Pink",
                    },
                ],
                images: imageUrls

            },
            {
                id: ++prodIds,
                name: "Boys' Glow In The Dark Whale Long-Sleeve Pocket Tee",
                description: "Style that will light you up! As comfortable as an old friend, our glow-in-the-dark classic cotton whale tees are every kids favorite.",
                price:450,
                sizes: [
                    {
                        id: ++sizeIds,
                        name: 'S'
                    },
                    {
                        id: ++sizeIds,
                        name: 'L'
                    },
                    {
                        id: ++sizeIds,
                        name: 'XL'
                    },
                    {
                        id: ++sizeIds,
                        name: 'XXL'
                    },
                ],
                colors: [
                    {
                        id: ++colsIds,
                        hash: "#D50000",
                        name: "Red",
                    },
                    {
                        id: ++colsIds,
                        hash: "#F50057",
                        name: "Pink",
                    },
                ],
                images: imageUrls

            },
            {
                id: ++prodIds,
                name: "Boys' Glow In The Dark Whale Long-Sleeve Pocket Tee",
                description: "Style that will light you up! As comfortable as an old friend, our glow-in-the-dark classic cotton whale tees are every kids favorite.",
                price:450,
                sizes: [
                    {
                        id: ++sizeIds,
                        name: 'S'
                    },
                    {
                        id: ++sizeIds,
                        name: 'L'
                    },
                    {
                        id: ++sizeIds,
                        name: 'XL'
                    },
                    {
                        id: ++sizeIds,
                        name: 'XXL'
                    },
                ],
                colors: [
                    {
                        id: ++colsIds,
                        hash: "#D50000",
                        name: "Red",
                    },
                    {
                        id: ++colsIds,
                        hash: "#F50057",
                        name: "Pink",
                    },
                ],
                images: imageUrls

            },

            {
                id: ++prodIds,
                name: "Boys' Glow In The Dark Whale Long-Sleeve Pocket Tee",
                description: "Style that will light you up! As comfortable as an old friend, our glow-in-the-dark classic cotton whale tees are every kids favorite.",
                price:450,
                sizes: [
                    {
                        id: ++sizeIds,
                        name: 'S'
                    },
                    {
                        id: ++sizeIds,
                        name: 'L'
                    },
                    {
                        id: ++sizeIds,
                        name: 'XL'
                    },
                    {
                        id: ++sizeIds,
                        name: 'XXL'
                    },
                ],
                colors: [
                    {
                        id: ++colsIds,
                        hash: "#D50000",
                        name: "Red",
                    },
                    {
                        id: ++colsIds,
                        hash: "#F50057",
                        name: "Pink",
                    },
                ],
                images: imageUrls

            },

            /*{
                name:"",
                description: "",
                sizes: [
                    {
                        id:++sizeIds,
                        name:''
                    }
                ],
                colors:[
                    {
                        id:++colsIds,
                        hash:"",
                        name:"",
                    }
                ]

            },*/
        ]
        saveItemToStore(pds, "products")
    }
}

function loadCart() {
    if (hasStoredData()) {
        //Load all the carts from the local storage
        cart = getItemFromStore('cart')
    } else {
        saveItemToStore(cart, 'cart')
    }
}

function init() {
    loadProducts();
    loadCart();
    saveItemToStore(true, "loaded")
}

function generateProductUrl(product) {
    let append = `?name=${product.name.replaceAll(' ', '-')}&id=${product.id}`
    return "product.html" + append;
}

function getDataFromUrl(name) {
    let params = (new URL(document.location)).searchParams;
    return params.get(name);
}

function getProductById(pdsG, id) {
    return pdsG.find(prod => {
        return prod.id === parseInt(id);
    })
}
function updateCartCount(){
    cartCount.html(cart.length)
}

function saveCart(){
    saveItemToStore(cart, 'cart')
}

function pushItemToCart(item){

    // check if there is item with the same product, size and color increase the quantity instead
    let cItem = cart.find(cItem=>{
        return item.productId === cItem.productId && item.colorId === cItem.colorId && item.sizeId === cItem.sizeId
    });
    if(!!cItem){
        let index = cart.indexOf(cItem)
        cart[index].quantity += item.quantity
    }else {
        cart.push(item)
    }
    saveCart();
    updateCartCount()
}

function removeItemFromCart(index) {
    cart.splice(index, 1)
    saveCart();
    buildCartBody()
    reloadOrderTotal()
    updateCartCount()
}

$(() => {
    // localStorage.clear()
    init();
    updateCartCount()
})

// saveItemToStore(products, 'products')

// console.log(getItemFromStore("products"))
// localStorage.clear();