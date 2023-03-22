const API_URL = 'https://api.exchangerate-api.com/v4/latest/';

const quantia = document.getElementById('quantia');
const moedaDe = document.getElementById('moeda-de');
const moedaPara = document.getElementById('moeda-para');
const botaoConverter = document.getElementById('botao-converter');
const resultado = document.getElementById('resultado');

botaoConverter.addEventListener('click', async () => {
    const valorQuantia = parseFloat(quantia.value);
    const valorMoedaDe = moedaDe.value;
    const valorMoedaPara = moedaPara.value;

    try {
        const resposta = await fetch(API_URL + valorMoedaDe);
        const dados = await resposta.json();
        const taxa = dados.rates[valorMoedaPara];

        const valorConvertido = valorQuantia * taxa;
        resultado.textContent = `${valorQuantia.toFixed(2)} ${valorMoedaDe} = ${valorConvertido.toFixed(2)} ${valorMoedaPara}`;
    } catch (erro) {
        resultado.textContent = 'Erro ao obter a taxa de câmbio. Por favor, tente novamente.';
    }
});
