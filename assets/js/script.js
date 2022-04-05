function meuEscopo() {
    let form = document.querySelector('.form')

    function calcularIMC(evento) {
        evento.preventDefault();

        let res = document.querySelector('.res')
        let txtpeso = document.querySelector('#txtpeso');
        let peso = Number(txtpeso.value);
        let txtaltura = document.querySelector('#txtaltura')
        let altura = Number(txtaltura.value)
        let imc = (peso / (altura * altura))

        if (!altura) {
            res.innerHTML = `<p class="reprovado">Altura invalida, digite novamente</p>`
        } else if (!peso) {
            res.innerHTML = `<p class="reprovado">Peso invalido, digite novamente</p>`
        } else {
            if (imc <= 18.5) {
                res.innerHTML = `<p class="aprovado">Seu IMC eh ${imc.toFixed(1)} (Abaixo do peso)</p>`
            } else if (imc <= 24.9) {
                res.innerHTML = `<p class="aprovado">Seu IMC eh ${imc.toFixed(1)} (Peso Normal)</p>`
            } else if (imc <= 29.9) {
                res.innerHTML = `<p class="aprovado">Seu IMC eh ${imc.toFixed(1)} (Sobrepeso)</p>`
            } else if (imc <= 34.9) {
                res.innerHTML = `<p class="aprovado">Seu IMC eh ${imc.toFixed(1)} (Obesidade grau 1)</p>`
            } else if (imc <= 39.9) {
                res.innerHTML = `<p class="aprovado">Seu IMC eh ${imc.toFixed(1)} (Obesidade grau 2)</p>`
            } else {
                res.innerHTML = `<p class="aprovado">Seu IMC eh ${imc.toFixed(1)} (Obesidade grau 3)</p>`
            }
        }
    }
    form.addEventListener('submit', calcularIMC)
}
meuEscopo();