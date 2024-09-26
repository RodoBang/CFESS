// Manejo del clic en el menú y cambio de contenido
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
btn.onclick = function() {
    sidebar.classList.toggle("active");
};

// Obtener los elementos del menú
let menuPrincipal = document.getElementById('menuPrincipal');
let directoriosMenu = document.getElementById('directoriosMenu');
let mainContent = document.getElementById('mainContent');

// Datos iniciales de los directorios
let directoriosData = [
    {nombre: 'Ing. Julio Cardona', puesto: 'Superintendente', extension: '1234'},
    {nombre: 'Ing. María López', puesto: 'Jefe de Operaciones', extension: '5678'},
    {nombre: 'Lic. Carlos Pérez', puesto: 'Recursos Humanos', extension: '9101'},
    {nombre: 'Ing. Ana Ramírez', puesto: 'Ingeniera de Proyecto', extension: '1123'}
];

// Variable para controlar si estamos editando un directorio
let currentEditIndex = null;

// Función para mostrar la tabla de directorios
function renderDirectorios() {
    let tableContent = `
        <h1 class="title-centered">Directorios</h1>
        <div class="content-container">
            <div class="form-container">
                <h2>Agregar nuevo directorio</h2>
                <form id="addDirectorForm">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required>
                    <label for="puesto">Puesto:</label>
                    <input type="text" id="puesto" name="puesto" required>
                    <label for="extension">Extensión:</label>
                    <input type="text" id="extension" name="extension" required>
                    <button type="submit" id="submitButton">Agregar</button>
                </form>
            </div>
            <div class="table-container">
                <table class="directorios-table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Puesto</th>
                            <th>Extensión</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
    `;

    directoriosData.forEach((director, index) => {
        tableContent += `
            <tr>
                <td>${director.nombre}</td>
                <td>${director.puesto}</td>
                <td>${director.extension}</td>
                <td>
                    <button onclick="editDirector(${index})">Editar</button>
                    <button onclick="deleteDirector(${index})">Eliminar</button>
                </td>
            </tr>
        `;
    });

    tableContent += `
                    </tbody>
                </table>
            </div>
        </div>
    `;

    mainContent.innerHTML = tableContent;

    // Añadir funcionalidad al formulario de agregar o editar
    document.getElementById('addDirectorForm').onsubmit = function(event) {
        event.preventDefault();
        if (currentEditIndex !== null) {
            saveEditedDirector(); // Guardar cambios si estamos editando
        } else {
            addDirector(); // Agregar nuevo si no estamos editando
        }
    };
}

// Mostrar los directorios cuando se haga clic en el menú "Directorios"
directoriosMenu.onclick = function() {
    renderDirectorios();
};

// Función para agregar un nuevo directorio
function addDirector() {
    let nombre = document.getElementById('nombre').value;
    let puesto = document.getElementById('puesto').value;
    let extension = document.getElementById('extension').value;

    // Asegurarse de que todos los campos están completos antes de agregar
    if (nombre && puesto && extension) {
        directoriosData.push({nombre, puesto, extension});
        renderDirectorios(); // Volver a mostrar la tabla con el nuevo dato
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

// Función para eliminar un directorio
function deleteDirector(index) {
    if (confirm("¿Está seguro de que desea eliminar este directorio?")) {
        directoriosData.splice(index, 1); // Eliminar el directorio del array
        renderDirectorios(); // Volver a mostrar la tabla actualizada
    }
}

// Función para editar un directorio
function editDirector(index) {
    // Guardamos el índice del directorio que se está editando
    currentEditIndex = index;

    // Obtener los datos actuales
    let director = directoriosData[index];

    // Llenar los campos del formulario con los datos del directorio
    document.getElementById('nombre').value = director.nombre;
    document.getElementById('puesto').value = director.puesto;
    document.getElementById('extension').value = director.extension;

    // Cambiar el texto del botón de "Agregar" a "Guardar"
    document.getElementById('submitButton').textContent = "Guardar";
}

// Función para guardar los cambios después de la edición
function saveEditedDirector() {
    let nombre = document.getElementById('nombre').value;
    let puesto = document.getElementById('puesto').value;
    let extension = document.getElementById('extension').value;

    // Asegurarse de que todos los campos están completos antes de guardar
    if (nombre && puesto && extension) {
        // Actualizar el directorio en el array
        directoriosData[currentEditIndex] = {nombre, puesto, extension};

        // Restablecer el índice de edición
        currentEditIndex = null;

        // Restablecer el botón a "Agregar"
        document.getElementById('submitButton').textContent = "Agregar";

        // Limpiar los campos del formulario
        document.getElementById('addDirectorForm').reset();

        renderDirectorios(); // Volver a mostrar la tabla actualizada
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

// Cambiar el contenido cuando se hace clic en "Menu Principal"
menuPrincipal.onclick = function() {
    mainContent.innerHTML = `
        <h1>Pagina Principal</h1>
        <p>Bienvenido a la página principal.</p>
    `;
};
