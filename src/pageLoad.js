
function combineElements(elements){
    const container = elements[0];
    for (let i = 1; i < elements.length; i++){
        container.appendChild(elements[i]);
    }
    return container;
}

function pageLoad(container){
    const content = document.getElementById("content");
    content.removeChild(content.childNodes[0]);
    content.appendChild(container);
}

export {combineElements, pageLoad};