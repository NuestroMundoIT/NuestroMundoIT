//declaro variables para traer a js elementos del html
let cursosAutoasistidos = document.getElementById("contenedorCursos");

fetch("../document.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((element) => {
            let div = document.createElement('div');
            div.innerHTML=`
            <p>${element.plataforma}</p>`;
            cursosAutoasistidos.append(div);
            

        });

    }).catch((error) => console.error("Error al cargar el JSON:", error));