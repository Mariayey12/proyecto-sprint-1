const listGroup = document.querySelector('.list-group');



const getLocalStorage = () => {
    const det = JSON.parse(localStorage.getItem("Detail"));
    const { img, name, description, price } = det;
    listGroup.innerHTML += `<img src=${img} class="card-img-right" alt="..." style="width:302px; position: static;  height: 350px; left: 0px;
    top: 0px> flex: none;border: 0;flex-grow: 0;margin: 0px 24px;" 
   <li class="card"  > 
   <div class="card-body">
     <h5 class="card-title">${name}</h5>
     <h5 class="card-title">USD$ ${price}</h5> 
     <p class="card-text"><small class="text-muted">Precio con iva incluido</small></p>
     <p class="card-text">${description}</p>
     <p class="card-text">Seleccione la madurez que desea.</p>
     <select class="form-select form-select-lg mb-0" style="margin-top:5%;"
     height:20px;
     padding: 0px; >
  <option selected>Por elegir</option>
  <option value="1">Maduro</option>
  <option value="2">Verde</option>
  <option value="3">Pinton</option>
</select>
<div class="form-check">
    Maduro (para hoy)
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
    Normal (3-5 dias)
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
Verde (7 dias)

</div>
     <a href="#" class="btn btn-dark" style="background-color:rgba(10, 199, 99, 1);width: 350px;left: 10px;top: 88px;
     border-radius: 10px;
     padding: 12px, 24px, 12px, 24px;">Añadir</a>
   </div>
 </li>
   `
}

document.addEventListener('DOMContentLoaded', getLocalStorage)

listGroup.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-dark')) {
        window.location.href = "Agregar.html";
    }

});