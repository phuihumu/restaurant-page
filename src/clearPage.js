
function clearPage() {
    const element = document.querySelector('#content');

    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    return element;
}

export default clearPage;