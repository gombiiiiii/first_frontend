import { loginEndPoint } from "./api/auth/login.js";

console.log("hi, app start!!");
console.log("Login endpoint: ", loginEndPoint);

document
  .querySelector('.login-container')
  .addEventListener('submit', function (e) {
    e.preventDefault();
    const felhasznalo = document.querySelector('input[type="text"]').value;
    const jelszo = document.querySelector('input[type="password"]').value;
    const errorMessageElement = document.getElementById("errorMessage");
    console.log("Kattitntottál");
    console.log('Felhasználó: ', felhasznalo, ', Jelszó:', jelszo);
    login(felhasznalo, jelszo);
  });

async function login(username, password) {
  try {
    const request = await fetch(loginEndPoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const response = await request.json();
    if (response.message) {
      errorMessageElement.innerHTML = response.message;
      return;
    } else {
      console.log("Sikeres login:", response);
      if (response.firstName) {
        window.location.href = './pages/welcome.html';
        }
    }
  } catch (error) {
    console.error("Hiba:", error);
  }

  
}