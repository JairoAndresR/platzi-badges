// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

//Import bootstrap styles
import "bootstrap/dist/css/bootstrap.css";
// Importar el componente
import Badge from "./components/Badge";

// ReactDOM.render(__qué__, __dónde__);

// const nombre = "Jairo Romero";
// const element2 = <h2>Hola, soy {nombre}</h2>;
// const container2 = document.getElementById("person");
// ReactDOM.render(element2, container2);

const container = document.getElementById("app");
// Mostrar el componente creado
// Fundamental el autocerrado
ReactDOM.render(<Badge />, container);
