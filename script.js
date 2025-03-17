let listaNombres = [];

function agregarNombre() {
    const input = document.getElementById("nombreInput");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    listaNombres.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    const listaElement = document.getElementById("listaNombres");
    listaElement.innerHTML = "";

    listaNombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        li.classList.add("list-item");
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaNombres.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    const resultado = document.getElementById("resultado");
    resultado.classList.add("shake");

    setTimeout(() => {
        const indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
        resultado.textContent = `✨ El amigo secreto es: ${listaNombres[indiceAleatorio]} ✨`;
        resultado.classList.remove("shake");
    }, 2000);
}
