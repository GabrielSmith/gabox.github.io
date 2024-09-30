let listaCompras = [];
function agregarArticulo() {
    let articulo = document.getElementById('articulo').value;
    if (articulo.trim() !== "") {
        listaCompras.push(articulo);
        document.getElementById('articulo').value = "";
        mostrarLista();
    } else {
        alert("Por favor, ingrese un artículo.");
    }
}
function mostrarLista() {
    let listaHTML = document.getElementById('lista');
    listaHTML.innerHTML = "";
    for (let i = 0; i < listaCompras.length; i++) {
        listaHTML.innerHTML += `
            <li>
                ${listaCompras[i]} 
                <button onclick="eliminarArticulo(${i})">Eliminar</button>
            </li>
        `;
    }
}
function eliminarArticulo(indice) {
    listaCompras.splice(indice, 1);
    mostrarLista();
}


                                                                        




