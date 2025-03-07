const setaAvancar = document.querySelector('.btn-avancar')
const setaVoltar = document.querySelector('.btn-voltar')

const cartoes = document.querySelectorAll('.cartao')
let cartaoAtual = 0

setaAvancar.addEventListener('click', () => {
    if(cartaoAtual === cartoes.length - 1) return
    cartaoSelecionado()
    cartaoAtual++
    adicionarClasse(cartaoAtual)
})

setaVoltar.addEventListener('click', () => {
    if(cartaoAtual === 0) return
    cartaoSelecionado()
    cartaoAtual--
    adicionarClasse(cartaoAtual)
})

function cartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado') // Identificando a classe que tem o selecionado
    cartaoSelecionado.classList.remove('selecionado') // Removendo a classe selecionado
}

function adicionarClasse(cartaoAtual) {
    cartoes[cartaoAtual].classList.add('selecionado')
}