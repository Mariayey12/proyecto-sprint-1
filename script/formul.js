const cards = document.getElementById('cards');
const item = document.getElementById('item');
const carrit = document.getElementById('table');
let carrito = {};

const tbody = document.querySelector('tbody').cotent
cards.addEventListener("click", e => {
    addcarrito(e)
});

const addcarrito = e => {

    if (e.target.classList.contains('btn-dark')) {

        setcarrito(e.target.parentElement)
    }
    e.stopPropagation()
}
const setcarrito = objeto => {
    const producto = {
        id: objeto.querySelector('btn-dark').dataset.id,
        title: objeto.queryselector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }
    if (carrito.hasOwnProperty(producto.id)) { producto.cantidad = carrito[producto.id].cantidad + 1 }
    carrito[producto.id] = {...producto }
        //console.log(producto)
    pintacarrito
}
const pintacarrito = () => {
    object.values(carrito).forEach(producto => {
        tabla.querySelector('th').textContent = producto.id
        tabla.querySelector('th').textContent = producto.title
        tabla.querySelector('th').textContent = producto.precio
        tabla.querySelector('th') textContent = producto.descripcion

    });
}