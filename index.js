function getPrecioTotal() {
    let total = 0;
    let modelo = document.querySelector('#modelo').value;
    total += parseInt(modelo);

    let combustible = document.querySelector('input[name="combustible"]:checked').value;
    total += parseInt(combustible);

    let extras = document.querySelectorAll('input[type="checkbox"]:checked');
    extras.forEach(extra => {
        total += parseInt(extra.value);
    });

    Swal.fire("El precio total es de "+ total + "€")
}