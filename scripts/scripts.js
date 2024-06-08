console.log("JavaScript is linked correctly!");

const brands = [
    { name: "Brand 1", products: ["Product 1A", "Product 1B"] },
    { name: "Brand 2", products: ["Product 2A", "Product 2B"] },
    // Add more brands and products here
];

function displayBrands() {
    const brandsListContainer = document.querySelector(".brands-list");
    if (!brandsListContainer) return;

    brands.forEach(brand => {
        const brandCard = document.createElement("div");
        brandCard.classList.add("brand-card");
        brandCard.innerHTML = `
            <h3>${brand.name}</h3>
            <p>Products: ${brand.products.join(", ")}</p>
        `;
        brandsListContainer.appendChild(brandCard);
    });
}

function compareProducts(product1, product2) {
    const comparisonSection = document.getElementById("comparison-section");
    if (!comparisonSection) return;

    const comparisonDiv = document.createElement("div");
    comparisonDiv.innerHTML = `
        <h3>Comparison</h3>
        <p><strong>${product1}</strong> vs <strong>${product2}</strong></p>
        <p>Price: $XX vs $YY</p>
        <p>Reviews: X stars vs Y stars</p>
        <p>Size Availability: A, B, C vs X, Y, Z</p>
    `;
    comparisonSection.appendChild(comparisonDiv);


    // scripts/scripts.js

    function filterProducts(category) {
        const productList = document.getElementById('product-list');
        const productCards = productList.getElementsByClassName('product-card');

        for (let i = 0; i < productCards.length; i++) {
            const productCard = productCards[i];
            if (productCard.classList.contains(category)) {
                productCard.style.display = 'inline-block';
            } else {
                productCard.style.display = 'none';
            }
        }
    }

}

// Example function to call when the document is ready
document.addEventListener("DOMContentLoaded", () => {
    displayBrands();
});
