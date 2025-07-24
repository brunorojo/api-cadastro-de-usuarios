# Estudos - API Gerenciar Usuários com Node.js e MONGO DB

API para cadastrar, alterar, listar, consultar e deletar usuários.

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

# Anotações

DB: UsersDB
Username: temp

