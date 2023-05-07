import { resetData, logoutUser } from "./auth.js";
import { focusElement, idGenerate, randomNumber } from "./utils/index.js";

/* Autenticación */
const auth = [{
    authtenticated: false
}]

/* Array de usuarios */
const users = [
    { name: 'admin', password: 'admin', rol: 'admin', login: false },
];

if(JSON.parse(localStorage.getItem('auth')) === null && JSON.parse(localStorage.getItem('users')) === null) {
    resetData(auth, users);
}

const getAuth = JSON.parse(localStorage.getItem('auth'));
const getUsers = JSON.parse(localStorage.getItem('users'));
const urlHome = 'http://127.0.0.1:5500/';
const urlLogin = 'http://127.0.0.1:5500/auth/login.html';
const urlRegister = 'http://127.0.0.1:5500/auth/register.html';
const urlRegisterMedicine = 'http://127.0.0.1:5500/register/create.html';

// Revisa la autenticación
if(!getAuth[0].authtenticated) {
    if(window.location.href !== urlLogin) {
        window.location.href = urlLogin;
    }
} else {
    const userAutenticated = getUsers.filter(user => user.login === true );

    if(userAutenticated.length === 0) {
        const updateAuth = [{
            authtenticated: false
        }];

        localStorage.setItem('auth', JSON.stringify(updateAuth));
        window.location.reload();
    }

    if(userAutenticated.length > 1) {

        const updateUsers = [...getUsers];

        updateUsers.map(user => {
            user.login = false;
        })

        const updateAuth = [{
            authtenticated: false
        }];

        localStorage.setItem('auth', JSON.stringify(updateAuth));
        localStorage.setItem('users', JSON.stringify(updateUsers));
        window.location.reload();
    }

    // Muestra el usuario autenticado por consola
    console.log(userAutenticated)
}

// Logout
const btnLogout = document.querySelector("#logout");
if(btnLogout !== null) {
    btnLogout.addEventListener('click', function(e) {
        logoutUser(getUsers);
    });
}

// Login 
if(window.location.href === urlLogin) {
    const btnSubmit = document.querySelector("#submit");
    const inputName = document.querySelector("#name");
    const inputPassword = document.querySelector("#pass");
    const showError = document.querySelector("#error");
    let error = false;
    let errorMessage = '';

    // Retringir acceso a usuarios autenticados
    const userAutenticated = getUsers.filter(user => user.login === true );
    if(userAutenticated.length > 0) {
        window.location.href = urlHome;
    }

    // autenticar usuario
    btnSubmit.addEventListener('click', function(e) {
        e.preventDefault();

        // comprobando que los inputs no esten vacios
        if(inputName.value === '') {
            error = true;
            errorMessage = 'El nombre es obligatorio';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 2000);
            return;
        }

        if(inputPassword.value === '') {
            error = true;
            errorMessage = 'La contraseña es obligatoria';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 2000);
            return;
        }
        
        // consultando el valor del input con el de localstorage
        const user = getUsers.find(user => user.name === inputName.value);

        if( !user ) {
            localStorage.setItem('auth', JSON.stringify(auth));
            error = true;
            errorMessage = 'Este usuario no existe';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 2000);
            return;
        }

        // validando contraseña
        if(inputPassword.value !== user.password) {
            localStorage.setItem('auth', JSON.stringify(auth));
            error = true;
            errorMessage = 'La contraseña es incorrecta';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 2000);
            return;
        }

        // reseteando errores
        error = false;
        errorMessage = '';
        showError.classList.remove('active');

        // guardando usuario con login en true
        const updateUsers = [...getUsers];
        updateUsers.map(userUpdate => {
            if(userUpdate.name === user.name) {
                userUpdate.login = true;
            }
        })

        const updateAuth = [{
            authtenticated: true
        }];
        
        // actualizando localstorage
        localStorage.setItem('auth', JSON.stringify(updateAuth));
        localStorage.setItem('users', JSON.stringify(updateUsers));
        window.location.href = urlHome;
    })
}

// Home 
if(window.location.href === urlHome) {

    // Columnas dinamiscas de la tabla
    const getItems = JSON.parse(localStorage.getItem('items'));
    const itemsList = document.querySelector("#items-list");
    const noItemsMessage = document.querySelector("#message");
    const findInput = document.querySelector("#find");

    let listitems = [...getItems];

    findInput.addEventListener('input', (e) => {
        
        while (itemsList.firstChild) {
            itemsList.removeChild(itemsList.lastChild);
        }

        if(findInput.value !== "") {
            listitems = getItems.filter(find => find.name.toLowerCase().includes(findInput.value.toLowerCase()));
        }

        createListItems(listitems);
    });

    function createListItems(list) {
    if(list !== null) {
        list.map(item => {
                const tr = document.createElement("tr");
                const tdId = document.createElement("td");
                const tdBill = document.createElement("td");
                const tdStartDate = document.createElement("td");
                const tdName = document.createElement("td");
                const tdCategory = document.createElement("td");
                const tdDescription = document.createElement("td");
                const tdLaboratory = document.createElement("td");
                const tdQuantity = document.createElement("td");
                const tdWarehouse = document.createElement("td");
                const tdUnitCost = document.createElement("td");
                const tdTotalCost = document.createElement("td");
                const tdEndDate = document.createElement("td");

                tdId.textContent = item.id;
                tdBill.textContent = item.bill;
                tdStartDate.textContent = item.registerData;
                tdName.textContent = item.name;
                tdCategory.textContent = item.category;
                tdDescription.textContent = item.description;
                tdLaboratory.textContent = item.laboratory;
                tdQuantity.textContent = item.quantity;
                tdWarehouse.textContent = item.warehouse;
                tdUnitCost.textContent = item.unitCost;
                tdTotalCost.textContent = item.totalCost;
                tdEndDate.textContent = item.dueDate;

                itemsList.appendChild(tr);
                tr.appendChild(tdId);
                tr.appendChild(tdBill);
                tr.appendChild(tdStartDate);
                tr.appendChild(tdName);
                tr.appendChild(tdCategory);
                tr.appendChild(tdDescription);
                tr.appendChild(tdLaboratory);
                tr.appendChild(tdQuantity);
                tr.appendChild(tdWarehouse);
                tr.appendChild(tdUnitCost);
                tr.appendChild(tdTotalCost);
                tr.appendChild(tdEndDate);
            });
        } else {
            noItemsMessage.innerHTML = "No hay nada que mostrar"
        }
    }
    createListItems(listitems);
}

// Register
if(window.location.href === urlRegister) {
    const btnSubmit = document.querySelector("#submit");
    const inputName = document.querySelector("#name");
    const inputPassword = document.querySelector("#pass");
    const selectRol = document.querySelector("#role");
    const showError = document.querySelector("#error");
    const showSuccess = document.querySelector("#success");
    let error = false;
    let errorMessage = '';

    // Retringir acceso a usuarios tipo user
    const userAutenticated = getUsers.filter(user => user.login === true );
    if(userAutenticated[0].rol === "user") {
        window.location.href = urlHome;
    }

    // Crear usuario
    btnSubmit.addEventListener('click', function(e) {
        e.preventDefault();

        // Validación de formularios
        if(inputName.value === '') {
            error = true;
            errorMessage = 'El nombre es obligatorio';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 2000);
            return;
        }

        if(inputPassword.value === '') {
            error = true;
            errorMessage = 'La contraseña es obligatoria';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 2000);
            return;
        }

        if(inputPassword.value.length < 8) {
            error = true;
            errorMessage = 'La contraseña debe tener al menos 8 caracteres';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 3000);
            return;
        }

        if(selectRol.value === '') {
            error = true;
            errorMessage = 'El tipo de usuario es obligatorio';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 2000);
            return;
        }

        // validando si el usuario existe
        const registerUser = getUsers.find(user => user.name === inputName.value);

        if(inputName.value === registerUser?.name) {
            error = true;
            errorMessage = 'Ya existe un usuario con este nombre';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 3000);
            return;
        }

        // reseteando errores
        error = false;
        errorMessage = '';
        showError.classList.remove('active');

        // Creando y guardando nuevo usuario
        const updateUsers = [...getUsers];
        updateUsers.push({name: inputName.value, password: inputPassword.value, rol: selectRol.value, login: false});
        localStorage.setItem('users', JSON.stringify(updateUsers));

        // Pasando mensage de que el usuario de creo
        errorMessage = `El usuario ${inputName.value} se creo correctamente`;
        showSuccess.innerHTML = errorMessage;
        showSuccess.classList.add('active');
        setTimeout(() => {
            errorMessage = '';
            showSuccess.classList.remove('active');
            window.location.reload();
        }, 3000);
    });
}

// Items register
if(window.location.href === urlRegisterMedicine) {
    const registerData = document.querySelector("#registerData");
    const bill = document.querySelector("#bill");
    const category = document.querySelector("#category");
    const name = document.querySelector("#name");
    const description = document.querySelector("#description");
    const quantity = document.querySelector("#quantity");
    const laboratory = document.querySelector("#laboratory");
    const unitCost = document.querySelector("#unitCost");
    const warehouse = document.querySelector("#warehouse");
    const dueDate = document.querySelector("#dueDate");
    const totalCost = document.querySelector("#totalCost");
    const addMedicine = document.querySelector("#add-medicine");
    const showError = document.querySelector("#error");
    const showSuccess = document.querySelector("#success");
    const getItems = JSON.parse(localStorage.getItem('items'));
    let error = false;
    let errorMessage = '';

    console.log(getItems);

    if(getItems === null) {
        localStorage.setItem('items', JSON.stringify([]));
    }

    // Retringir acceso a usuarios tipo user
    const userAutenticated = getUsers.filter(user => user.login === true );
    if(userAutenticated[0].rol === "user") {
        window.location.href = urlHome;
    }

    // detectando cambios en costo unitario
    quantity.addEventListener("input", (event) => {
        if(quantity !== '' && unitCost !== "") {
            totalCost.value = quantity.value * unitCost.value;
        }
    });
    unitCost.addEventListener("input", (event) => {
        if(quantity !== '' && unitCost !== "") {
            totalCost.value = quantity.value * unitCost.value;
        }
    });

    // Crear medicamento
    addMedicine.addEventListener('click', function(e) {
        e.preventDefault();

        console.log(getItems)

        // Validación de formularios
        if(registerData.value === '') {
            error = true;
            errorMessage = 'La fecha de entrada es obligatoria';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 2000);
            return;
        }

        if(bill.value === '') {
            error = true;
            errorMessage = 'El número de factura es obligatorio';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 2000);
            return;
        }

        if(category.value.length < 8) {
            error = true;
            errorMessage = 'La categoría es obligatoria';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 3000);
            return;
        }

        if(name.value === '') {
            error = true;
            errorMessage = 'El nombre de medicamento es obligatorio';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 2000);
            return;
        }

        if(description.value === '') {
            error = true;
            errorMessage = 'La descripción es obligatoria';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 2000);
            return;
        }

        if(quantity.value === '') {
            error = true;
            errorMessage = 'La cantidad es obligatoria';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 2000);
            return;
        }

        if(laboratory.value === '') {
            error = true;
            errorMessage = 'El laboratorio es obligatorio';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 2000);
            return;
        }

        if(unitCost.value === '') {
            error = true;
            errorMessage = 'El costo unitario es obligatorio';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 2000);
            return;
        }

        if(warehouse.value === '') {
            error = true;
            errorMessage = 'El almacen es obligatorio';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 2000);
            return;
        }

        if(dueDate.value === '') {
            error = true;
            errorMessage = 'La fecha de vencimiento es obligatoria';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 2000);
            return;
        }

        if(totalCost.value === '') {
            error = true;
            errorMessage = 'El costo total es obligatorio';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 2000);
            return;
        }

        // reseteando errores
        error = false;
        errorMessage = '';
        showError.classList.remove('active');

        // Creando y guardando nuevo articulo
        
        let updateItems = [...getItems];
        updateItems.push(
            {
                id: idGenerate(),
                registerData: registerData.value,
                bill: bill.value,
                category: category.value,
                name: name.value,
                description: description.value,
                quantity: quantity.value,
                laboratory: laboratory.value,
                unitCost: unitCost.value,
                warehouse: warehouse.value,
                dueDate: dueDate.value,
                totalCost: totalCost.value,
            }
        );
        localStorage.setItem('items', JSON.stringify(updateItems));

        // Pasando mensage de que el usuario de creo
        errorMessage = `El articulo ${name.value} se creo correctamente`;
        showSuccess.innerHTML = errorMessage;
        showSuccess.classList.add('active');
        setTimeout(() => {
            errorMessage = '';
            showSuccess.classList.remove('active');
            window.location.reload();
        }, 3000);

    });
}

// Test
const search = document.querySelector("#search");
const colorFocus = "#F87171"
if(search !== null) focusElement(search, colorFocus);

//Test 2

