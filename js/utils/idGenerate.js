
export const idGenerate = () => {

    const getItems = JSON.parse(localStorage.getItem('items'));
    let idGenerated = randomNumber();

    if(getItems !== null) {

        for(let i = 0; i < getItems.length; i++ ) {
            if(getItems[i].id === idGenerated) {
                idGenerated = randomNumber();
                i = 0;
            }
        }

        return idGenerated;
    }

    return idGenerated;
}

export const randomNumber = (num1 = 2, num2 = 7) => {
    return Math.random(4).toString().substring(num1,num2);
}