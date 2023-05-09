
export const cleanNodeElement = (nodeElement) => {
    while (nodeElement.firstChild) {
        nodeElement.removeChild(nodeElement.lastChild);
    }
    return nodeElement;
}