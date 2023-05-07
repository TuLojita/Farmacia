
export const resetData = (auth, users) => {
    // Datos de prueba
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('auth', JSON.stringify(auth));
}

export const logoutUser = (users) => {

    const updateUsers = [...users];
    updateUsers.map(user => {
        user.login = false;
    })
    localStorage.setItem('users', JSON.stringify(updateUsers));
    window.location.reload();
}