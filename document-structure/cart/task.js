
const cartProducts = document.querySelector('.cart__products');
const products = document.querySelectorAll('.product')
console.log(cartProducts)
products.forEach(product => {
    const controlDec = product.querySelector('.product__quantity-control_dec');
    const controlValue = product.querySelector('.product__quantity-value');
    controlDec.addEventListener('click', event => {
        let dec = parseInt(controlValue.textContent, 10);
        if (dec > 0) {
        dec --;
        controlValue.textContent = dec;
    }
    })  
})
products.forEach(product => {
    const controlInc = product.querySelector('.product__quantity-control_inc');
    const controlValue = product.querySelector('.product__quantity-value');
    controlInc.addEventListener('click', event => {
        let inc = parseInt(controlValue.textContent, 10);
        inc ++;
        controlValue.textContent = inc;
    })

    })

products.forEach(product => {
    const productAdd = product.querySelector('.product__add')
    productAdd.addEventListener('click', event => {
        const productId = product.dataset.id;
        const imgProduct = product.querySelector('.product__image').src;
        const controlValue = product.querySelector('.product__quantity-value');

        const existingItem = document.querySelector(`.cart__product[data-id="${productId}"]`);

        if (existingItem) {
            const countElement = existingItem.querySelector('.cart__product-count');
                  countElement.textContent = parseInt(countElement.textContent) + parseInt(controlValue.textContent);
        }else {
        const cartItem = document.createElement('div');
              cartItem.classList.add('cart__product');
              cartItem.dataset.id = productId;

        const image = document.createElement('img');
              image.classList.add('cart__product-image');
              image.src = imgProduct;
              cartItem.appendChild(image);

        const count = document.createElement('div');
              count.className = 'cart__product-count';
              count.textContent = controlValue.textContent
              cartItem.appendChild(count);

        cartProducts.appendChild(cartItem);}      

    })
})



