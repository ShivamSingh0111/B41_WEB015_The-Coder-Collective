// Function to fetch and display data from localStorage
function displaySidebarData() {
    const sidebarContent = document.querySelector('.sidebar-content');
    const storedData = JSON.parse(localStorage.getItem('Data')) || []; // Fetch data from localStorage

    // Clear existing content
    sidebarContent.innerHTML = '';

    // Loop through the stored data and create dynamic HTML
    storedData.forEach((item, index) => {
        // Create the product container
        const productContainer = document.createElement('div');
        productContainer.style.display = 'flex';
        productContainer.style.justifyContent = 'space-between';
        productContainer.style.marginBottom = '10px';

        productContainer.innerHTML = `
            <div>
                <img src="${item.image}" alt="Product Image" width="50px">
            </div>
            <div>
                <h4>${item.brand}</h4>
                <p style="font-size:8px;">${item.description.slice(0,5)}</p>
                <button style="background-color:rgb(102, 224, 102); padding:3px; outline:none; border:none;">
                    ${item.rating} <i class="fa-solid fa-star"></i>
                </button>
                <p style="font-size: large;">${item.price}</p>
            </div>
        `;

        // Create action buttons container
        const actionButtons = document.createElement('div');
        actionButtons.style.display = 'flex';
        actionButtons.style.flexDirection = 'column';
        actionButtons.style.justifyContent = 'space-between';

        // Buy Now button
        const buyNowButton = document.createElement('button');
        buyNowButton.textContent = 'Buy Now';
        buyNowButton.style.cssText = `
            cursor: pointer;
            color: white;
            margin-top: 10px;
            background-color: rgb(118, 224, 118);
            width: 80px;
            height: 30px;
        `;

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.cssText = `
            cursor: pointer;
            color: white;
            margin-top: 10px;
            background-color: rgb(236, 80, 80);
            width: 80px;
            height: 30px;
        `;

        // Delete functionality
        deleteButton.addEventListener('click', () => {
            storedData.splice(index, 1); // Remove the item from the array
            localStorage.setItem('Data', JSON.stringify(storedData)); // Update localStorage
            displaySidebarData(); // Refresh the sidebar
        });

        // Append buttons to the action container
        actionButtons.appendChild(buyNowButton);
        actionButtons.appendChild(deleteButton);

        // Append action buttons to the product container
        productContainer.appendChild(actionButtons);

        // Append product container to the sidebar content
        sidebarContent.appendChild(productContainer);
    });
}

// Close button functionality
document.getElementById('closeBtn').addEventListener('click', () => {
    document.getElementById('sidebar').style.display = 'none';
});

// Initial call to display data
displaySidebarData();
