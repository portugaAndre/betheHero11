const express = require ('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();
app.use(cors({

    //origin: 'htpps://abrasel.com.br/front';
    // para deixar o front acessar o back
}));
app.use(express.json());
app.use(routes);
app.use(errors());
/**
 * Rota / Recurso(uma tabela)
 */
/**
 * Metodo GET = Buscar uma informação do back-end
 * Metodo POST = Criar uma informação no back-end
 * Metodo PUT = Alterar uma informação no back-end
 * Metodo DELETE = Deletar uma informação no back-end
 * Insomnia = Testar se as requisições estão dando certo
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota apos "?" para( Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**   
   * SQL: Mysql, Sqlite, Postgre, Oracle(Muito estruturado)
   *      Todos tem a mesma linguagem
   * 
   * NoSQL: MongoDB, CouchDB, etc(Muito livre e pouco estruturado),
   *        (Cada banco possui a sua propria linguagem)
   * 
   */

   /**
    * DRIVER: SELECT * FROM users
    * Query builder: table('users').select('*').where() 
    */

module.exports = app;
