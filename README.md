# pharmainc

## Scope: 
- Desenvolver REST API importando os dados do projeto: https://randomuser.me/documentation
- Para definição do modelo, consultar o arquivo users.json que foi exportado do Random Users
- imported_t: campo do tipo Data com o dia e hora que foi importado
- status: campo do tipo Enum com os valores possíveis: draft, trash e publicado
- API com sistema de atualização diariamente que vai importar para o nosso banco de dados a versão mais recente do Random Users e configurar variavel de horário
- JSON

## Tech Stack:
- NodeJS - JS Runtime
- MongoDB - noSQL Database (JSON)

## Node Packages:
- express
- axios
- node-cron
- mongoose

## Endpoints:
#### [GET] "/" => Welcome to my server =)
#### [GET] "/users" => Listar todos usuários do banco
#### [GET] "/users/:userId" => Listar usuário
#### [PUT] "/users/:userId?key=value" => Atualizar usuário (?key=value)
#### [POST] "/users/addUser" => Adicionar usuário
#### [DELETE] "/users/:userId" => Deletar usuário
#### [DELETE] "/users/deleteAll" => Deletar todos usuários do banco

## Config:
- /config.js 
- /database.js

### /config.js
```
module.exports = {
    user: '',
    password: '',
    db: ''
};
```

### /database.js
``` 
const mongoose = require('mongoose')

const databaseConfig = require('./config');

const connection = `mongodb+srv://${databaseConfig.user}:${databaseConfig.password}@cluster0.xtsw7.mongodb.net/${databaseConfig.db}?retryWrites=true&w=majority`

mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('MongoDB Conectado!')
})
```
