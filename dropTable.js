import knex from './knex.js';

const dropTable = (tableName) => {
  return knex.schema.dropTableIfExists(tableName);
};

export default dropTable;
