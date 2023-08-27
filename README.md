# Projeto API com Fastify, Prisma e Swagger

Este é um projeto de API Node.js que utiliza as tecnologias Fastify, Prisma e Swagger para criar uma API robusta e documentada.

## Requisitos

Certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

## Configuração

1. Clone este repositório para o seu ambiente local:
   ```bash
   git clone https://github.com/alissonpeixer/api-node.git
   ```

2. Instale as dependências do projeto:
   ```bash
   cd nome-do-seu-projeto
   ```

4. Crie um arquivo .env na raiz do seu projeto para configurar as variáveis de ambiente necessárias. Você pode se basear no arquivo .env.example fornecido.

5. Execute as migrações do Prisma para configurar o banco de dados:
   ```bash
   npx prisma migrate dev
   ```
   
### Inicie o servidor:
  ```bash
   npm run dev
   ```
##### O servidor Fastify será executado na porta especificada (8080).

## Documentação da API
A documentação da API é gerada automaticamente usando o Swagger.

Depois de iniciar o servidor, você pode acessar a documentação da API em: http://localhost:8080/doc

Certifique-se de consultar a documentação para entender os endpoints disponíveis e os formatos das solicitações e respostas.


## Estrutura do Projeto
Explique brevemente a estrutura do seu projeto, destacando os diretórios mais importantes. Por exemplo:

`src/` Contém o código-fonte da aplicação.<br>    
`router/`: Definições das rotas da API.<br>    
`prisma/`: Prisma.<br>    
`prisma/migrations/`: Migrations do Prisma para manter o esquema do banco de dados.<br>  

### Como criar um endpoint?
Os endpoints da aplicação podem ser criados de modo simples e fácil, com todos os arquivos dentro do diretório `router/`, por exemplo: `get.ts`. Cada arquivo deve ser um módulo e deve conter o método HTTP e o caminho (path) para que seja reconhecido como uma rota pelo Fastify.

# Contribuição
Se você gostaria de contribuir para este projeto, siga estas etapas:<br>    

1. Fork este repositório.<br> 
2. Crie um novo branch: git checkout -b feature/nova-feature<br> 
3. Faça suas alterações e commit: git commit -m 'Adicionei uma nova feature'<br> 
4. Envie para o branch remoto: git push origin feature/nova-feature<br> 
5. Envie uma Pull Request para revisão.<br> 


