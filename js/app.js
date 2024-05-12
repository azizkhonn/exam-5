

function fetchData() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            renderProducts(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function renderProducts(products) {
    const tableBody = document.querySelector('#productTable tbody');

    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>$${product.price}</td>
            <td>${product.description}</td>
            <td>${product.category}</td>
            <td><img src="${product.image}" alt="${product.title}"></td>
            <td class="rating">
                <img src="./img/star-img.png" alt="Star" title="Rating">
                <span>${product.rating.rate} (${product.rating.count} reviews)</span>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

document.getElementById('showProductsButton').addEventListener('click', function () {
    fetchData();
});

let productsTable = document.getElementById("products-table");
let showButton = document.getElementById("show-products");
let hideButton = document.getElementById("hide-products");

showButton.addEventListener("click", function () {
    productsTable.style.display = "table";
});

hideButton.addEventListener("click", function () {
    productsTable.style.display = "none";
});




async function purchasePlaneTicket(passengerInfo, flightInfo) {
    try {
        const response = await fetch('https://airline-api.com/tickets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_TOKEN'
            },
            body: JSON.stringify({
                passengerInfo,
                flightInfo
            })
        });

        if (response.ok) {
            const ticketData = await response.json();
            console.log('Ticket purchased successfully:', ticketData);
            return ticketData;
        } else {
            const errorData = await response.json();
            console.error('Failed to purchase ticket:', errorData);
            throw new Error('Failed to purchase ticket');
        }
    } catch (error) {
        console.error('Error purchasing ticket:', error);
        throw error;
    }
}

const passengerInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',

};

const flightInfo = {
    flightNumber: 'ABC123',
    departureDate: '2024-05-15',

};

purchasePlaneTicket(passengerInfo, flightInfo)
    .then(ticketData => {
    })
    .catch(error => {
    });




