const form = document.getElementById('form-input');
let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaLinha()
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato = document.getElementById('numero-contato')

        let linha = '<tr>'
        linha += `<td><img src="https://cdn0.iconfinder.com/data/icons/bold-purple-free-samples/32/User_Avatar_Human_Profile_Face_Circle-512.png" alt="perfil roxo">${inputNomeContato.value}</td>`
        linha += `<td><img src="https://cdn-icons-png.flaticon.com/256/4706/4706999.png" alt="telefone roxo">${inputNumeroContato.value}</td>`
        linha += '</tr>'
    
        linhas += linha

    
    inputNomeContato.value = ''
    inputNumeroContato.value = ''

}

function atualizaLinha() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

