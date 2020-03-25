
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();


  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};

/*
Metodo UP = responsavel por criar as minhas tabelas

Metodo down = Responsável por dar um rollback para caso dê algum problema
*/
/* 

ENTIDADES SÃO TUDO AQUILO QUE REPRESENTA UM DADO A SER SALVO NO BANCO DE DADOS. 
EXEMPLOS: USUÁRIO, SENHA...

Entidades:
    >ONG
    > Incident(Acontecimento)

Funcionalidades:
    >Cadastrar ONG
    >Login ONG
    >Logout ONG
    >Cadastrar novos casos
    >Deletar novos casos
    >Listar casos especificos de uma ONG
    >Entrar em contato com uma ONG

Migrations:     
*/ 