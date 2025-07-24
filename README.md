# Estudos - API Gerenciar Usuários com Node.js e MONGO DB

Simples API com as rotas para Cadastrar, Alterar, Listar e Deletar usuários.   

> A collection para _Insomnia_ com os requests esta na pasta ***InsomniaCollection***

# Tecnologias utilizadas

- [Node.js v22.17.1](https://nodejs.org/en/blog/release/v22.17.1)
- [Express v5.1.0 _(Web Framework para Node.js)_](https://www.npmjs.com/package/express)
- [Prisma v6.12.0 _(Lib para MongoDB)_](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb-node-mongodb)
- [MongoDB _(cloud)_](https://account.mongodb.com/account/login)

# Configurar e iniciar API localmente

> Configurar a connection string no arquivo _.env_ para acesso a  base de dados, para isso acessar o MongoDB on-line, criar uma conta, criar uma base de dados e criar um usuário e senha.

Instalar dependências

````
npm install
````

Executar Prisma Generate

````bash
npx prisma generate 
````

Iniciar Prisma Studio porta padrão 5555

````bash
npx prisma studio
````

Iniciar API na porta padrão 3000

````bash
node --inspect --watch server.js
````

### CURL Cadastrar Usuário

````curl
curl --request POST \
--url http://localhost:3000/usuarios \
--header 'Content-Type: application/json' \
--data '{
"name": "Bruno",
"email": "bruno.post@post.emayll.us.en",
"phone": "99.12345-1234"
}'
````

### CURL Listar Usuários (Query params opcionais: [id|name|email|phone])

````curl
curl --request GET \
--url 'http://localhost:3000/usuarios?name=Addamms'
```` 

### CURL Deletar Usuário por Id

````curl
curl --request DELETE \
--url http://localhost:3000/usuarios/6882598cd96d05c2f3f98ef3
````

# Anotações Gerais

DB: UsersDB  
Username: temp  

