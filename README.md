# Estudos - API Gerenciar Usuários com Node.js e MONGO DB

API com ratas para Cadastrar, Alterar, Listar, Consultar e Deletar usuários.

# Tecnologias utilizadas

- [Node.js](https://nodejs.org/pt)
- [Framework para Node.js: ***express***](https://www.npmjs.com/package/express)
- [Lib para acessar MongoDB: ***Prisma***](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb-node-mongodb)
- [MongoDB _on-line_](https://account.mongodb.com/account/login)

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
node --watch server.js
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

### CURL Listar Usuários

````curl
curl --request GET \
--url http://localhost:3000/usuarios
````

# Anotações Gerais

DB: UsersDB  
Username: temp  

