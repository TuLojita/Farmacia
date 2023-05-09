
export const reOrderList = (type, list, toggle) => {

    let listOrder = [];

    if(type === "text") {
        if(!toggle) {
            console.log("De la A a la Z");
        } else {
            console.log("De la Z a la A");
        }
    }

    if(type === "number") {
        if(!toggle) {
            listOrder = list.sort(( x, y ) => {
                return x.id - y.id;
            });
        } else {
            listOrder = list.sort(( x, y ) => {
                return y.id - x.id;
            });
        }
    }

    console.log(listOrder)

    return listOrder;
}