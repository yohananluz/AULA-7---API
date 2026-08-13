const url = 'https://6a7db680f8b2ed99ca4eb06e.mockapi.io/produtos'

/// Get, Post, Put, Delete

/// Buscar ->  Read (GET)
/// criar -  create (POST)

/// atualizar - update (PUT)
/// deletar - delete (DELETE)


// fetch (onde, config)

async function buscarProdutos() {

    const response = await fetch(url)
    let data = await response.json()

    // console.log(data)

    for (let i = 0; i < data.length; i++) {

        let produto = data[i]

        console.log(produto)

        let template = `
                <div class="product-card">
                <div class="product-image product-image-orange"></div>
                <h2>${produto.nome}</h2>
                <p class="product-description">${produto.descricao}.</p>
                <p class="product-price">R$ ${produto.preco}</p>
                <div class="card-actions">
                <label for="modal-editar" class="btn-small">Editar</label>
                <button type="button" class="btn-small btn-danger" onclick="deletarProduto('${produto.id}')">Remover</button>
                </div>
            </div>
        
        `

        document.querySelector('#lista').innerHTML += template


    }


}

buscarProdutos()

async function criarProduto() {

    let nome = document.querySelector('#nome').value
    let valor = document.querySelector('#preco').value
    let descricao = document.querySelector('#descricao').value

    let data = {
        nome: nome,
        descricao: descricao,
        valor: valor
    }
    
    const response = await fetch(url, {
        method: 'POST', 
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(data)


    })

    window.location.reload()




}

async function deletarProduto(id) {

    const response = await fetch(url + '/' + id ,{
        method: 'DELETE'
    })

    window.location.reload()
    
}