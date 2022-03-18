import getData from "./getData.js";
import { showData } from './showData.js'

const endpoint = 'http://localhost:3000/products/';

const element = document.querySelector('.list-group');

document.addEventListener('DOMContentLoaded', () => {

    const data = getData(endpoint);
    showData(data, element);

})

element.addEventListener('click', async(e) => {

    const btnDetail = e.target.classList.contains('btn-outline-light');
    const id = e.target.id;

    if (btnDetail) {
        const lista = await getData(endpoint);
        const objeto = lista.find(list => list.id === Number(id))
        localStorage.setItem("Detail", JSON.stringify(objeto));
        window.location.href = "html/datail.html"
    }

})