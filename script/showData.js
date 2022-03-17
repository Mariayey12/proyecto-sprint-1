export const showData = async(list, element) => {
    const products = await list;
    products.forEach(prod => {
        const { id, name, img, price, descuento } = prod;
        element.innerHTML += `
        <li class="card" style="width:15rem;">
        <div class="card-body">
    
        <h5 class="card-title">${descuento}</h5>
        <img src=${img} class="card-img-top" alt="...">
        <h2 class="card-title">${price}</h2>
          <h6 class="card-title">${name}</h6>
          <a href="#" id=${id}  class="btn btn-outline-light" height: 30px;
           style="background-color:rgba(10, 199, 99, 1);width: 190px;
           left: 0px;top:358px;border-radius: 09px;
           padding: 12px, 24px, 12px, 24px; margin:03px; ">Agregar</a>
        </div>
      </li>
        `
    })
}