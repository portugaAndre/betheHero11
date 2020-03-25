
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
      table.increments();

      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();

      table.string('ong_id').notNullable(); //relacionamento com o outro banco de dados

      table.foreign('ong_id').references('id').inTable('ongs'); //Chave estrangeira. O ID da ong na incidents deve ser o mesmo que o da tabela ong
     
    

  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
