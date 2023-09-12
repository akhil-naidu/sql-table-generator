import knex from './knex.js';

const addColumn = (tableName, column) => {
  return knex.schema.table(tableName, (table) => {
    table[column.type](column.name);

    if (column.primaryKey) {
      table.primary(column.name);
    }

    if (column.unique) {
      table.unique(column.name);
    }

    if (column.notNull) {
      table.notNullable(column.name);
    }

    if (column.default !== undefined) {
      table.defaultTo(column.default);
    }
  });
};

export default addColumn;
