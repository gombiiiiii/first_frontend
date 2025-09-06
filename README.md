# Számalk Frontend Feladat 2025. szeptember 6

## Leírás

Ez a repo a Számalk Szalézis frontend másod éves Frontend első órájának feladatait tartalmazza. 
A cél korábbi ismeretek felelevenítése, gyakorása, valamint egy egyszerű bejelentkezési felület és egy terméklista oldal elkészítése, ahol a felhasználó sikeres bejelentkezés után megtekintheti a termékeket egy külső API -ból.

---

## Feladatok és megoldások

### 1. Bejelentkezési oldal (`index.html`, `index.js`)

- **Feladat:** Hozz létre egy bejelentkezési űrlapot, ahol a felhasználónevet és jelszót lehet megadni, majd egy gombbal beküldeni.
- **Megoldás:**  
  - Az űrlap középre van igazítva, két input mezővel és egy beküld gombbal.
  - A beküldés JavaScript eseménykezelővel történik (`index.js`), amely kiolvassa az input mezők értékét, elküldi azokat egy API végpontra, és a válasz alapján továbbirányítja a felhasználót a `welcome.html` oldalra.
  - Hibás bejelentkezés esetén hibaüzenet jelenik meg.

### 2. API végpontok (`api/auth/login.js`, `api/products/products.js`)

- **Feladat:** Hozz létre külön fájlokat az API végpontokhoz, hogy könnyen importálhatók legyenek.
- **Megoldás:**  
  - Az `api/auth/login.js` tartalmazza a bejelentkezéshez szükséges végpontot.
  - Az `api/products/products.js` tartalmazza a termékek lekérdezéséhez szükséges végpontot.

### 3. Terméklista oldal (`pages/welcome.html`, `pages/welcome.js`)

- **Feladat:** Sikeres bejelentkezés után jelenítsd meg a termékek nevét egy listában, az API-ból lekérve.
- **Megoldás:**  
  - A `welcome.html` egy üres konténert tartalmaz, ahová a termékek listája kerül.
  - A `welcome.js` importálja a termékek API végpontját, majd két függvényt valósít meg:
    - `getProducts()`: Lekéri a termékeket az API-ból.
    - `renderProducts()`: Megjeleníti a termékek nevét egy `<ul>` listában, a kapott tömbön `forEach`-et használva.
  - Az oldal betöltésekor automatikusan lekéri és megjeleníti a termékeket.

---

## Fájlstruktúra

```
api/
  auth/
    login.js
  products/
    products.js
index.html
index.js
index.css
pages/
  welcome.html
  welcome.js
```

---

## Használt technológiák

- **HTML** - az oldalak szerkezete
- **CSS** - az oldalak stílusa
- **JavaScript (ES6 modulok)** - az interaktivitás és API kommunikáció
- **Fetch API** - adatok lekérése külső végpontokról

---

## Tanulási célok

- Modern JavaScript modulok használata
- Űrlapkezelés és eseménykezelés
- Külső API -k használata
- Dinamikus DOM (HTML elem) manipuláció
- Hibakezelés frontend oldalon

---