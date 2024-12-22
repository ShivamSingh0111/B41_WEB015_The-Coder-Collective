// JavaScript file to handle storing card data in localStorage

// Function to initialize the event listener for each product card
function initializeCardListeners() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card, index) => {
      
        card.addEventListener('click', () => {
           
            const productData = {
                image: card.querySelector('img').src,
                brand: card.querySelector('h4').textContent,
                description: card.querySelector('.description').textContent,
                price: card.querySelector('.price').textContent,
                badge: card.querySelector('.badge')?.textContent || '',
                sizes: card.querySelector('.sizes')?.textContent || ''
            };
            let storeData = JSON.parse(localStorage.getItem("Data")) || []
           storeData.push(productData)
           localStorage.setItem("Data", JSON.stringify(storeData));
           alert("Your Product is Successfully added!");
           window.location.reload();
            // Optional: Log the data to confirm
            // console.log(`Data stored for card ${index}:`, productData);
        });
       
    });

   

}

// Call the function once the DOM content is loaded
document.addEventListener('DOMContentLoaded', initializeCardListeners);

