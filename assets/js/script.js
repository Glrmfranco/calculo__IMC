function meuEscopo() {
    const form = document.querySelector('.form');

    function calcularIMC(evento) {
        evento.preventDefault();
        let txtpeso = document.querySelector('#txtpeso');
        const peso = Number(txtpeso.value);
        let txtaltura = document.querySelector('#txtaltura');
        const altura = Number(txtaltura.value);

        const imc = pegarImc(peso, altura);

        if (!altura) {
            resultado('Altura inválida, digite novamente', false);
            return;
        }
        if (!peso) {
            resultado('Peso inválido, digite novamente', false);
            return;
        }
        if (imc <= 18.5) {
            resultado(`Seu IMC é ${imc} (Abaixo do peso)`, true);
            return;
        } else if (imc <= 24.9) {
            resultado(`Seu IMC é ${imc} (Peso Normal)`, true);
            return;
        } else if (imc <= 29.9) {
            resultado(`Seu IMC é ${imc} (Sobrepeso)`, true);
            return;
        } else if (imc <= 34.9) {
            resultado(`Seu IMC é ${imc} (Obesidade grau 1)`, true);
            return;
        } else if (imc <= 39.9) {
            resultado(`Seu IMC é ${imc} (Obesidade grau 2)`, true);
            return;
        } else {
            resultado(`Seu IMC é ${imc} (Obesidade grau 3)`, true);
            return;
        }
    }
    form.addEventListener('submit', calcularIMC);

    function pegarImc(peso, altura) {
        const imc = peso / (altura * altura);
        return imc.toFixed(1);
    }
    function criaP() {
        const p = document.createElement('p');
        return p;
    }
    function resultado(msg, valido) {
        const res = document.querySelector('.res');
        res.innerHTML = '';
        const p = criaP();

        if (valido) {
            p.classList.add('aprovado');
        } else {
            p.classList.add('reprovado');
        }
        p.innerHTML = msg;
        res.appendChild(p);
    }
}
meuEscopo();
