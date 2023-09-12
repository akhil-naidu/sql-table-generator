import knex from './knex.js';

const createTable = (tableName, columns, foreignKeys = []) => {
  return knex.schema.createTable(tableName, (table) => {
    for (const column of columns) {
      const col = table[column.type](column.name);

      if (column.primaryKey) {
        col.primary();
      }

      if (column.unique) {
        col.unique();
      }

      if (column.notNull) {
        col.notNullable();
      }

      if (column.default !== undefined) {
        col.defaultTo(column.default);
      }
    }

    for (const foreignKey of foreignKeys) {
      table
        .foreign(foreignKey.column)
        .references(foreignKey.refColumn)
        .inTable(foreignKey.refTable);
    }
  });
};

export default createTable;
