const urlUser = 'http://localhost:4001/users/';



const tbody = document.querySelector('tbody');
const form = document.querySelector('.form-group');

const getUsers = async() => {

    const resp = await fetch(urlUser);
    const users = await resp.json();
    users.forEach(element => {
        const { url, name, email, description, id } = element;
        tbody.innerHTML += `
          <tr>
            <td><img src=${url} width="50"><img/></td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${description}</td>
            <td><a id=${id} href="#" class="btn btn-outline-light" style="background-color: #db7093;">Delete</a></td>
          </tr>
        `
    });
}

document.addEventListener('DOMContentLoaded', getUsers)


tbody.addEventListener('click', async(e) => {
    const btnDelete = e.target.classList.contains('btn-outline-light');
    const id = e.target.id;
    if (btnDelete) {

        await fetch(urlUser + id, {
            method: 'DELETE'
        })


    }
})

form.addEventListener('submit', async(e) => {
    e.preventDefault();
    const url = document.getElementById('inputUrl').value;
    const name = document.getElementById('inputNombre').value;
    const email = document.getElementById('inputCorreo').value;
    const description = document.getElementById('inputDescripcion').value;

    const valid = await validEmail(email)

    if (valid) {
        alert(`Ya existe un usuario con el correo ${email}`)
    } else {
        const obj = {
            url,
            name,
            email,
            description
        }

        await fetch(urlUser, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
    }
})

const validEmail = async(email) => {

    const resp = await fetch(urlUser);
    const data = await resp.json();
    const result = data.find(dat => dat.email.toLocaleLowerCase() === email.toLocaleLowerCase())
    if (result === undefined) {
        return false
    } else {
        return true
    }
}