const form = document.getElementById('form-validador');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const primeiroNumero = document.getElementById('primeiro-numero');
    const segundoNumero = document.getElementById('segundo-numero');

    if (parseFloat(segundoNumero.value) > parseFloat(primeiroNumero.value)) {
        alert('O segundo número é maior que o primeiro.');
        form.submit();
    } else {
        alert('O segundo número não é maior que o primeiro');
    }
});
