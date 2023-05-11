import { resetData, logoutUser } from "./auth.js";
import { lote } from "./ui/lote.js";
import { focusElement, idGenerate, cleanNodeElement } from "./utils/index.js";

/* Autenticación */
const auth = [{
    authtenticated: false
}]

/* Array de usuarios */
const users = [
    { name: 'admin', password: 'admin', rol: 'admin', login: false },
];

if (JSON.parse(localStorage.getItem('auth')) === null && JSON.parse(localStorage.getItem('users')) === null) {
    resetData(auth, users);
}

const getAuth = JSON.parse(localStorage.getItem('auth'));
const getUsers = JSON.parse(localStorage.getItem('users'));
const urlHome = 'http://127.0.0.1:5500/';
const urlLogin = 'http://127.0.0.1:5500/auth/login.html';
const urlRegister = 'http://127.0.0.1:5500/auth/register.html';
const urlRegisterMedicine = 'http://127.0.0.1:5500/register/create.html';

// Revisa la autenticación
if (!getAuth[0].authtenticated) {
    if (window.location.href !== urlLogin) {
        window.location.href = urlLogin;
    }
} else {
    const userAutenticated = getUsers.filter(user => user.login === true);

    if (userAutenticated.length === 0) {
        const updateAuth = [{
            authtenticated: false
        }];

        localStorage.setItem('auth', JSON.stringify(updateAuth));
        window.location.reload();
    }

    if (userAutenticated.length > 1) {

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
if (btnLogout !== null) {
    btnLogout.addEventListener('click', function (e) {
        logoutUser(getUsers);
    });
}

// Login 
if (window.location.href === urlLogin) {
    const btnSubmit = document.querySelector("#submit");
    const inputName = document.querySelector("#name");
    const inputPassword = document.querySelector("#pass");
    const showError = document.querySelector("#error");
    let error = false;
    let errorMessage = '';

    // Retringir acceso a usuarios autenticados
    const userAutenticated = getUsers.filter(user => user.login === true);
    if (userAutenticated.length > 0) {
        window.location.href = urlHome;
    }

    // autenticar usuario
    btnSubmit.addEventListener('click', function (e) {
        e.preventDefault();

        // comprobando que los inputs no esten vacios
        if (inputName.value === '') {
            error = true;
            errorMessage = 'El nombre es obligatorio';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 2000);
            return;
        }

        if (inputPassword.value === '') {
            error = true;
            errorMessage = 'La contraseña es obligatoria';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 2000);
            return;
        }

        // consultando el valor del input con el de localstorage
        const user = getUsers.find(user => user.name === inputName.value);

        if (!user) {
            localStorage.setItem('auth', JSON.stringify(auth));
            error = true;
            errorMessage = 'Este usuario no existe';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 2000);
            return;
        }

        // validando contraseña
        if (inputPassword.value !== user.password) {
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
            if (userUpdate.name === user.name) {
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
if (window.location.href === urlHome || window.location.href === urlHome+"index.html") {

    // Columnas dinamiscas de la tabla
    const getItems = JSON.parse(localStorage.getItem('items'));
    const itemsList = document.querySelector("#items-list");
    const noItemsMessage = document.querySelector("#message");
    const findInput = document.querySelector("#find");

    if (getItems === null) {
        localStorage.setItem('items', JSON.stringify([]));
    }

    let listitems = [...getItems];

    // Buscador
    findInput.addEventListener('input', (e) => {

        cleanNodeElement(itemsList);

        if (findInput.value !== "") {
            listitems = getItems.filter(find => find.name.toLowerCase().includes(findInput.value.toLowerCase()));
        }

        if(findInput.value.length !== 0) {
            createListTable(listitems);
        } else {
            createListTable(getItems);
        }

    });

    const createListTable = (list) => {
        if (list.length !== 0) {
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

    createListTable(listitems);

}

// Register
if (window.location.href === urlRegister) {
    const btnSubmit = document.querySelector("#submit");
    const inputName = document.querySelector("#name");
    const inputPassword = document.querySelector("#pass");
    const selectRol = document.querySelector("#role");
    const showError = document.querySelector("#error");
    const showSuccess = document.querySelector("#success");
    let error = false;
    let errorMessage = '';

    // Retringir acceso a usuarios tipo user
    const userAutenticated = getUsers.filter(user => user.login === true);
    if (userAutenticated[0].rol === "user") {
        window.location.href = urlHome;
    }

    // Crear usuario
    btnSubmit.addEventListener('click', function (e) {
        e.preventDefault();

        // Validación de formularios
        if (inputName.value === '') {
            error = true;
            errorMessage = 'El nombre es obligatorio';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 2000);
            return;
        }

        if (inputPassword.value === '') {
            error = true;
            errorMessage = 'La contraseña es obligatoria';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 2000);
            return;
        }

        if (inputPassword.value.length < 8) {
            error = true;
            errorMessage = 'La contraseña debe tener al menos 8 caracteres';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 3000);
            return;
        }

        if (selectRol.value === '') {
            error = true;
            errorMessage = 'El tipo de usuario es obligatorio';
            showError.innerHTML = errorMessage;
            showError.classList.add('active');
            setTimeout(() => { showError.classList.remove('active'); }, 2000);
            return;
        }

        // validando si el usuario existe
        const registerUser = getUsers.find(user => user.name === inputName.value);

        if (inputName.value === registerUser?.name) {
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
        updateUsers.push({ name: inputName.value, password: inputPassword.value, rol: selectRol.value, login: false });
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

// Test
const search = document.querySelector("#search");
const colorFocus = "#F87171"
if (search !== null) focusElement(search, colorFocus);

//Test 2
const allLotes = document.querySelector(".all-lotes");
const loteContent = document.getElementsByClassName("lote-content");
const closeBtn = document.getElementsByClassName("close-btn");
const addLote = document.querySelector("#add-lote");

const updateLotes = () => {
    const saveData = [...loteContent];
    return saveData;
}

addLote.addEventListener("click", (e) => {
    const saveData = [...loteContent];
    cleanNodeElement(allLotes);
    saveData.map(element => {
        allLotes.appendChild(element);
    })
    lote(allLotes);
});

// Lote rendering test
lote(allLotes);

for (let i = 0; i < loteContent.length; i++) {
    closeBtn[i].addEventListener('click', (e) => {
        console.log(loteContent[i].id);
        console.log(loteContent)
    });
}
