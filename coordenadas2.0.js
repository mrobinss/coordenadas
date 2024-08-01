// Función para mostrar la pestaña seleccionada
function showTab(tabId) {
    // Ocultar todas las pestañas
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));

    // Desactivar todos los botones
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Mostrar la pestaña seleccionada
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`).classList.add('active');
}

// Función principal de conversión de coordenadas polares a rectangulares
function convertPolarToRectangular() {
    const r = parseFloat(document.getElementById('polar-r').value);
    const theta = parseFloat(document.getElementById('polar-theta').value);

    if (isNaN(r) || isNaN(theta)) {
        document.getElementById('polar-result').innerText = 'Por favor, ingrese valores válidos.';
        return;
    }

    const { x, y } = calculatePolarToRectangular(r, theta);
    document.getElementById('polar-result').innerText = `Coordenadas Rectangulares: X = ${x.toFixed(2)}, Y = ${y.toFixed(2)}`;
}

// Función principal de conversión de coordenadas rectangulares a polares
function convertRectangularToPolar() {
    const x = parseFloat(document.getElementById('rect-x').value);
    const y = parseFloat(document.getElementById('rect-y').value);

    if (isNaN(x) || isNaN(y)) {
        document.getElementById('rect-result').innerText = 'Por favor, ingrese valores válidos.';
        return;
    }

    const { r, theta } = calculateRectangularToPolar(x, y);
    document.getElementById('rect-result').innerText = `Coordenadas Polares: R = ${r.toFixed(2)}, θ = ${theta.toFixed(2)} grados`;
}

// Función para calcular coordenadas rectangulares desde polares
function calculatePolarToRectangular(r, theta) {
    // Convertir ángulo de grados a radianes
    const thetaRad = theta * (Math.PI / 180);

    // Conversión
    const x = r * Math.cos(thetaRad);
    const y = r * Math.sin(thetaRad);

    return { x, y };
}

// Función para calcular coordenadas polares desde rectangulares
function calculateRectangularToPolar(x, y) {
    // Conversión
    const r = Math.sqrt(x * x + y * y);
    const thetaRad = Math.atan2(y, x);
    const theta = thetaRad * (180 / Math.PI);

    return { r, theta };
}

// Funciones para reiniciar los campos

function resetPolarToRectangular() {
    document.getElementById('polar-r').value = '';
    document.getElementById('polar-theta').value = '';
    document.getElementById('polar-result').innerText = '';
}

function resetRectangularToPolar() {
    document.getElementById('rect-x').value = '';
    document.getElementById('rect-y').value = '';
    document.getElementById('rect-result').innerText = '';
}
