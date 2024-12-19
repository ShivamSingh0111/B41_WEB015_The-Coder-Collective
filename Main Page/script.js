const ElectronicProduct = [
    {
        imgURL : "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/h/t/-original-imah2582fsyrjnue.jpeg?q=70",
        name : "Best Mobiles",
        price: 6999,
    },

    {
        imgURL : "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/y/2/e/xxl-tbh-ted-ol-the-bear-house-original-imagr8274d5wqkjw.jpeg?q=70",
        name : "Men's Wear",
        price: 899,
    },

    {
        imgURL : "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/n/f/4/l-wine0-subhla-art-original-imahyp66afh2djfz.jpeg?q=70",
        name : "Women's Wear",
        price: 999,
    },
     
    {
        imgURL :"https://rukminim2.flixcart.com/image/300/300/xif0q/sports-action-camera/x/r/b/-original-imaggehemn9ykvuv.jpeg?q=90",
        name : "Action Camera's",
        price: 35500,
    },

    {
        imgURL :"https://rukminim2.flixcart.com/image/612/612/kingqkw0-0/speaker/mobile-tablet-speaker/s/8/i/stone-350-boat-original-imafyebfuaumdezs.jpeg?q=70",
        name : "Speakers",
        price: 1499,
    }
]
let renderProduct="";
let cardproductcontainer= document.getElementById("card-product-container")


for(let i=0; i<ElectronicProduct.length; i++){
    // console.log(ElectronicProduct[i])
    renderProduct+=`
          <div class="cart-product">
            <img src="${ElectronicProduct[i].imgURL}">
            <h3 class="cart-product-name">${ElectronicProduct[i].name}</h3>
            <p class="cart-product-price"> From ₹ ${ElectronicProduct[i].price}</p>
          </div>

    `
}



cardproductcontainer.innerHTML = renderProduct
