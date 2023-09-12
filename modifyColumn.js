import knex from './knex.js';

function modifyColumn(tableName, columnName, modification) {
  return knex.schema.table(tableName, (table) => {
    if (modification.type) {
      table.string(columnName, modification.type).alter();
    }

    if (modification.primaryKey) {
      table.dropPrimary().primary(columnName);
    }

    if (modification.unique) {
      table.dropUnique(columnName).unique(columnName);
    }

    if (modification.notNull) {
      table.dropColumn(columnName).notNullable(columnName);
    }

    if (modification.default !== undefined) {
      table.dropDefault(columnName).defaultTo(columnName, modification.default);
    }
  });
}

export default modifyColumn;
