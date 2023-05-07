
// devuelve true si un elemento tiene focus
export const focusElement = (element, color) => {
    element.addEventListener("click", (event) => {
        element.style.border = `1px solid ${color}`;
    });
    element.addEventListener("focusout", (event) => {
        element.style.border = "1px solid #cbd5e1";
    });
}