import { productsEndPoint } from '../api/products/products.js';


console.log("Pókolom!");
console.log("Termékek végpontja: ", productsEndPoint);


async function getProducts () {

    try {
        const response = await fetch(productsEndPoint, {
            method: 'GET', /*  POST/PUT/PATCH/DELETE */
            headers: { 'Content-Type': 'application/json'
             },
        });
        //const response = request.json();
        // Az API válaszát JSON formátumban visszaadjuk
        const adat = await response.json();
        //console.log("Sikeres lekérés: ", adat);
        return adat.products;
    } catch (error) {
        console.error("Hiba:", error);
        return [];
    }
}

function renderProducts(products) {
  // Kiválasztjuk azt az elemet (DOM elemet, Document Object Model), ahová a listát tesszük

  const container = document.querySelector('.welcome-container');
  
  // Létrehozzuk a <ul> elemet

  const ul = document.createElement('ul');
  
  // Végigmegyünk a termékeken és mindegyik nevét egy <li> elembe tesszük

  products.forEach(product => {
    const li = document.createElement('li');
    li.textContent = product.title; // A termék neve a title mezőben van
    ul.appendChild(li);
  });

  // Hozzáadjuk a <ul>-t a containerhez

  container.appendChild(ul);
}
// Amikor az oldal betöltött, lekérjük és megjelenítjük a termékeket
document.addEventListener('DOMContentLoaded', async () => {
  const products = await getProducts();
  renderProducts(products);
});