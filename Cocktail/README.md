
# 🍸 Wiki Drink

Un'applicazione **React** responsive e mobile-first che consente di cercare cocktail tramite l'API pubblica [TheCocktailDB](https://www.thecocktaildb.com), visualizzarne i dettagli e contattare lo staff per proporre nuove ricette tramite **Formspree**.

---

## 🚀 Funzionalità principali

- Ricerca di cocktail per nome
- Visualizzazione dettagliata della ricetta (ingredienti, istruzioni e immagine)
- Gestione degli stati globali tramite Context API
- Animazioni con **Lottie**
- Form di contatto gestito tramite **Formspree**
- Design **mobile-first** e completamente **responsive**

---

## 🧩 Struttura del progetto

```
src/
├── assets/
│   ├── animation/
│   └── image/
│
├── components/
│   ├── Card.jsx
│   ├── Cocktail.jsx
│   ├── Cocktails.jsx
│   ├── ErrorMessage.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── index.jsx
│   ├── Loading.jsx
│   ├── Navbar.jsx
│   └── Sidebar.jsx
│
├── context/
│   ├── context.jsx
│   └── useGlobalContext.js
│
├── hooks/
│   ├── useFetch.js
│   └── useTitle.js
│
├── screen/
│   ├── AboutScreen.jsx
│   ├── ContactScreen.jsx
│   ├── ErrorScreen.jsx
│   ├── HomeScreen.jsx
│   └── SingleCocktailScreen.jsx
│
├── utils/
│   ├── info.jsx
│   └── links.jsx
│
├── App.jsx
├── index.css
└── main.jsx
```

---

## ⚙️ API

L'applicazione utilizza i seguenti endpoint dell'API **TheCocktailDB**:

```
const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
const singleUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";
```

- `searchUrl` → Ricerca di cocktail per nome  
- `singleUrl` → Dettagli specifici di un cocktail tramite ID

---

## 📬 Gestione del form

Il modulo di contatto è gestito tramite **Formspree**, con il seguente endpoint:

```
<form action="https://formspree.io/f/xpwykjnp" method="POST">
```

L'utente può contattare lo staff per proporre un nuovo cocktail o inviare suggerimenti direttamente dall'app.

---

## 🧠 Tecnologie utilizzate

- React 19  
- React Router DOM 7  
- Axios  
- Styled Components  
- Lottie React  
- React Icons  
- Context API e custom hooks  

---

## 📦 Dipendenze

```
"dependencies": {
  "axios": "^1.12.2",
  "lottie-react": "^2.4.1",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-icons": "^5.5.0",
  "react-router-dom": "^7.9.4",
  "react-scripts": "^0.0.0",
  "styled-components": "^6.1.19"
}
```


## 📱 Responsive Design

L’interfaccia è **mobile-first**, ottimizzata per smartphone, tablet e desktop.  
Le sezioni principali includono:
- **Navbar** e **Sidebar** dinamiche  
- **Home** con ricerca integrata  
- **Schede cocktail** con immagini e dettagli ricetta  
- **Footer** 

---