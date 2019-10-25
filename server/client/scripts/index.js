import App from './app';

function ready() {
    let container = document.getElementById('root');
    new App(container);
}

document.addEventListener("DOMContentLoaded", ready);
