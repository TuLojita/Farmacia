const pre = document.querySelector("#pre");
pre.innerHTML = JSON.stringify(JSON.parse(localStorage.getItem("items")), null, 2);

// Res List Items
const listItems =
[
  { id: '51456', name: 'ibuprofeno Farma', category: 'psicotropico', description: 'caja de 10 capsulas de 800g', laboratory: 'farma', quantity: '0', warehouse: 'Almacen A', }
]

// Inyectar la data
const seedData = localStorage.setItem("items", JSON.stringify(listItems));
