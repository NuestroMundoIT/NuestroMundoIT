//declaro variables para traer a js elementos del html
let cursosAutoasistidos = document.getElementById("contenedorCursos");

//llamo al json
fetch("../document.json")
    .then((response) => response.json())
    .then((data) => {
        // Extraemos al array accediendo a su clave "cursos_virtuales", objeto JSON
        let cursos = data.cursos_virtuales;
        cursos.forEach((element) => {
            let dive = document.createElement('div');
            dive.className = "contenedor-cursos";
            dive.innerHTML = `
            <p>${element.plataforma}</p>`
            //el div escucha un evento de clic y redirije al usuario
            dive.addEventListener('click', () => {
                window.location.href = element.enlace
            });

            cursosAutoasistidos.append(dive);
        });

    }).catch((error) => console.error("Error al cargar el JSON:", error));