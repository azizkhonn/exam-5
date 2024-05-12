

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





document.getElementById('showTicketsBtn').addEventListener('click', function () {
    let table = document.getElementById('ticketsTable');
    if (table.style.display === 'none') {
        table.style.display = 'table';
        document.getElementById('showTicketsBtn').innerText = 'Bilet Tanlashni Yopish';
    } else {
        table.style.display = 'none';
        document.getElementById('showTicketsBtn').innerText = 'Bilet Tanlash';
    }
});


let tickets = [
    { type: 'Ekonom', price: 100 },
    { type: 'Biznes', price: 200 },
    { type: 'Birinchi klass', price: 300 }
];

let tbody = document.querySelector('#ticketsTable tbody');

tickets.forEach(function (ticket) {
    let row = document.createElement('tr');
    let typeCell = document.createElement('td');
    typeCell.textContent = ticket.type;
    let priceCell = document.createElement('td');
    priceCell.textContent = ticket.price + ' USD';
    let selectCell = document.createElement('td');
    let selectBtn = document.createElement('button');
    selectBtn.textContent = 'Tanlash';
    selectBtn.addEventListener('click', function () {
        alert('Siz ' + ticket.type + ' klassdagi bilet tanladingiz. Narxi: ' + ticket.price + ' USD');
    });
    selectCell.appendChild(selectBtn);
    row.appendChild(typeCell);
    row.appendChild(priceCell);
    row.appendChild(selectCell);
    tbody.appendChild(row);
});




