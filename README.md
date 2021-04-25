<br>
<br>
<h1 align="center" > Serviço de Usuário</h1>
<br>
<br>

# Descrição

O serviço de usuário Windris, implementado em Node Js, Express, Postgres com a ORM Sequelize, é responsável pela manutenção do usuário, além da autenticação para acesso a outros serviços.

Para a manutenção segura de senhas de usuário em bancos de dados foi utilizada a biblioteca [Bcrypt](https://www.npmjs.com/package/bcrypt). A autenticação de usuário utiliza tokens JWT, gerados a partir da biblioteca [jsonwebtoken](https://www.google.com/search?channel=fs&client=ubuntu&q=jwt+node).

As rotas deste serviço estão disponibilizadas através do Gateway de Software sob o path:
```
/user_service/
```

