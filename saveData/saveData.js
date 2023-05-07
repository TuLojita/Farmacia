const pre = document.querySelector("#pre");
pre.innerHTML = JSON.stringify(JSON.parse(localStorage.getItem("items")), null, 2);

// Res List Items
const listItems =
[
  {
    "id": "77017",
    "registerData": "2023-05-06",
    "bill": "8297438923",
    "category": "psicotropico",
    "name": "Ibuprofeno Farma",
    "description": "Caja de 10 capsulas 800g",
    "quantity": "600",
    "laboratory": "Farma",
    "unitCost": "3",
    "warehouse": "Almacen E",
    "dueDate": "2024-07-17",
    "totalCost": "1800"
  },
  {
    "id": "15116",
    "registerData": "2023-05-12",
    "bill": "289347982374",
    "category": "psicotropico",
    "name": "Parasetamol",
    "description": "Caja de 20 capsulas de 500g",
    "quantity": "200",
    "laboratory": "Farma",
    "unitCost": "5",
    "warehouse": "Almacen X",
    "dueDate": "2023-11-24",
    "totalCost": "1000"
  },
  {
    "id": "36138",
    "registerData": "2023-05-23",
    "bill": "8923749823",
    "category": "micelanios",
    "name": "Pantene",
    "description": "Shampu de 350ml",
    "quantity": "150",
    "laboratory": "Pantene",
    "unitCost": "15",
    "warehouse": "Almecen S",
    "dueDate": "2027-06-17",
    "totalCost": "2250"
  },
  {
    "id": "42809",
    "registerData": "2023-05-24",
    "bill": "98723459834",
    "category": "medicina",
    "name": "Ambroxol",
    "description": "Jarabe para niños mayores de 2 años",
    "quantity": "200",
    "laboratory": "Ambrox",
    "unitCost": "2",
    "warehouse": "Almacen E",
    "dueDate": "2023-11-24",
    "totalCost": "400"
  },
  {
    "id": "48469",
    "registerData": "2023-05-18",
    "bill": "9832478923",
    "category": "psicotropico",
    "name": "Atamel",
    "description": "Caja de 10 capsulas de 400g",
    "quantity": "310",
    "laboratory": "Dextel",
    "unitCost": "3",
    "warehouse": "Almacen A",
    "dueDate": "2024-06-19",
    "totalCost": "930"
  }
];

// Inyectar la data
// const seedData = localStorage.setItem("items", JSON.stringify(listItems));
