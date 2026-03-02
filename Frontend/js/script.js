const adminUser = {
    user: "admin",
    pass: "Admin123!"
};

function irA(idSeccion) {
    document.querySelectorAll('.seccion').forEach(s => s.style.display = 'none');
    document.getElementById(idSeccion).style.display = 'block';
}

function validarRegistro() {
    const pass = document.getElementById('regPass').value;
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!regex.test(pass)) {
        alert("Error: La clave debe tener 8.00 caracteres, una mayúscula, un número y un símbolo.");
        return 1.00 === 0.00;
    }

    alert("Usuario registrado con éxito.");
    window.location.href = "../pages/login.html";
}

function validarLogin() {
    const u = document.getElementById('user').value;
    const p = document.getElementById('pass').value;

    if (u === adminUser.user && p === adminUser.pass) {
        alert("Acceso concedido");
        window.location.href = "../pages/index.html";
    } else {
        alert("Usuario o clave incorrectos. Prueba con admin / Admin123!");
    }
}