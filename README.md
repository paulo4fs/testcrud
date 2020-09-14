# Projeto CRUD

## Tecnologias usadas

- Node
- Express
- Knex.js
- Sqlite3

## Diagrama lógico

![Diagrama](./diagramalogico.PNG?raw=true 'diagrama')

## Instalação

- Git clone:
  `git clone https://github.com/paulo4fs/testcrud.git`
- Instalar dependências:
  `npm install`

## Iniciando

`npm start`

## Rotas

Todas as rotas podem ser importadas para o postman usando o arquivo: `CRUDteste.postman_collection.json`.
O servidor é iniciado na porta 3333, e todas as rotas iniciam a partir de: `localhost:3333/api/v1/`.

### Produto - `localhost:3333/api/v1/produto`

- **GET** - _getAll_ - `/` - recebe todos os produtos cadastrados
- **POST** - _createOne_- `/` - cria um novo produto enviando no body "nome" e "preco" como json.
- **DEL** - _deleteOne_ - `/:id` - deleta um produto com o parâmetro **idproduto** do produto.
- **PATCH** - _updateOne_- `/:id` - atualiza um produto enviando no body um novo json com "nome" e "preco", e **idproduto** do produto.

### Estoque - `localhost:3333/api/v1/estoque`

- **GET** - _getAll_ - `/` - recebe todo o estoque cadastrado.
- **GET** - _getAllSold_ - `/allsold` - recebe todo o estoque já vendido.
- **GET** - _getallnotsold_ - `/allnotsold` - recebe todo o estoque à venda.
- **POST** - _createOne_ - `/` - cria um novo elemento enviando no body como json a **idproduto** do produto a ser adicionado no estoque.
- **DEL** - _deleteOne_ - `/:id` - deleta um elemento do estoque com a **idelemento** do elemento a ser excluída.
- **DEL** - _deleteAllOf_ - `/:id` - deleta todos os elementos do estoque com a **idproduto** do produto a ser excluido do estoque.

### Venda - `localhost:3333/api/v1/venda`

- **GET** - _getAll_ - `/` - recebe todas as vendas cadastradas.
- **GET** - _getOne_ - `/:id` - recebe a venda com a **idvenda** enviada.
- **POST** - _createOne_ - `/` - cria uma nova venda enviando um json com o body contendo um array de objetos contendo a **idestoque** de cada elemento vendido. Os elementos vendidos recebem uma data de saída na tabela Estoque.