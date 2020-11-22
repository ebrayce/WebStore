let subTotal = $("#subTotalHolder")
let estimatedTotal = $("#estimatedTotalHolder")
let cartBody = $("#cartTableBody")
let totalItemsInCart = $("#totalItemsInCart")
let txtCoupon = $("#txtCoupon")
let couponAdded = false

function reloadOrderTotal() {
    let count = cart.length;
    let word = count > 1 ? "Items" : "item"
    let sentence = count + " " + word
    totalItemsInCart.html( sentence)
    subTotal.html(calculateSubTotal())
    estimatedTotal.html(calculateEstimatedTotal())
}

function calculateSubTotal() {
    let subTotal = 0;
    cart.forEach(item => {
        let prod = getProductById(products, item.productId);
        subTotal += parseInt(item.quantity) * parseFloat(prod.price);
    })
    return subTotal;
}

function calculateEstimatedTotal() {
    let subTotal = 0;
    cart.forEach(item => {
        let prod = getProductById(products, item.productId);
        subTotal += parseInt(item.quantity) * parseFloat(prod.price);
    })
    return couponAdded ? subTotal * 0.5 : subTotal;
}

function addCoupon(){

    couponAdded = validateCoupon(txtCoupon.val());
    if (couponAdded){
        txtCoupon.addClass('is-valid')
        txtCoupon.removeClass('is-invalid')

    }else {
        txtCoupon.removeClass('is-valid')
        txtCoupon.addClass('is-invalid')
    }

    reloadOrderTotal()
}

function validateCoupon(text = "sdfdsf"){
    if (text.length !== 5){
        return false;
    }
    let re = /[A-Za-z0-9][A-Za-z0-9][A-Za-z0-9][A-Za-z0-9][A-Za-z0-9]/
    return re.test(text);
}

function buildCartBody() {
    let str = '';
    let counter = 1;
    let index = 0;
    let url = './index.html';
    if (cart.length > 0) {
        cart.forEach(item => {
            let prod = getProductById(products, item.productId);
            let selectedColor = prod.colors.find(color => {
                return color.id === item.colorId
            })
            let selectedSize = prod.sizes.find(size => {
                return size.id === item.sizeId
            })

            let totalPrice = parseInt(item.quantity) * parseFloat(prod.price)
            str += `
        
                <tr>
                    <th scope="row">${counter}</th>
                    <td>
                        <img width="60px" class="img-thumbnail" src="${prod.images[0]}" alt="">
                    </td>
                    <td>
                        <p class="font-weight-bold"><a href="${generateProductUrl(prod)}">${prod.name}</a></p>
                        <p >
                        <span class="font-weight-bold">Color:</span> 
                        <span>${selectedColor.name}</span> | 
                        <span class="font-weight-bold">Size: </span>
                        <span>${selectedSize.name}</span> | <button onclick="removeItemFromCart(${index})" type="button" class="btn btn-link">remove</button></p>
                    </td>
                    <td class="">
                        <div class="form-inline">
                            <button class="btn btn-sm" onclick="changeParticularCartQuantity(${index},${item.quantity - 1})">&dArr;</button>
                        
                            <input onchange="changeParticularCartQuantity(${index}, this.value)" min="0" type="number" class="form-control-sm form-control" style="width: 50px" value="${item.quantity}">
                       
                            <button class="btn btn-sm" onclick="changeParticularCartQuantity(${index},${item.quantity + 1})">&uArr;</button>
                        </div>
                        
                        <p class="font-weight-bold">@ GH&#x20B5; ${prod.price}</p>
                    </td>

                    <td><span class="font-weight-bold">GH&#x20B5; ${totalPrice}</span></td>
                </tr>
       
        `
            counter++;
            index++
        })
    } else {
        str += `
        
            <tr>
                <td colspan="5">
                    <h4>Your Cart is empty <a href="${url}">Find product here</a></h4>
                </td>
            </tr>
        
        `
    }


    cartBody.html(str);
}

function changeParticularCartQuantity(index, quantity) {

    cart[index].quantity = parseInt(quantity) < 0 ? 0 : parseInt(quantity);
    saveCart();
    buildCartBody()
    reloadOrderTotal()

}


$(function () {
    reloadOrderTotal();
    buildCartBody()
})