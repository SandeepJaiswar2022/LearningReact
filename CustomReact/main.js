
function customRender(customElement, mainContainer) {
    const newElement = document.createElement(customElement.type);
    newElement.innerHTML = customElement.children;
    for (const key in customElement.props) {
        newElement.setAttribute(key, customElement.props[key]);
    }
    mainContainer.appendChild(newElement);
}


const customElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Click To Vist Google"
}

const mainContainer = document.querySelector('#root');
// console.log("Script Loaded");

customRender(customElement, mainContainer)
