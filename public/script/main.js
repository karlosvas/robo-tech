"use strict"
import { login } from './login.js'
login();

const imagenes = document.querySelectorAll('.card');
imagenes.forEach((imagen) => {
    imagen.addEventListener('click', () => {
        const id = imagen.getAttribute('id');
        console.log(id)
        document.cookie = `robot=${id}`;

    });
});

const btnSearch = document.getElementById('search-btn');
const inputSearch = document.getElementById('searchInp');

btnSearch.addEventListener('click', validateData);
inputSearch.addEventListener('keyup', () => {
    if (event.keyCode === 13) {
        event.preventDefault();
        validateData()
    }
});

function validateData() {
    // La información se lleva a la ruta /post
    fetch('/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ searchInp: inputSearch.value })
    }).then((res) => {
        if (res.ok) location.reload();
        else console.log("Fail with response")
    }).catch((err) => {
        console.error(err)
    })
    // Se borra la información del input.
    inputSearch.value = '';
}
