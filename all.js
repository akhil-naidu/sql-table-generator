const knex = require('knex')({
  client: 'pg',
  useNullAsDefault: true,
  connection: {
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'dummy_db',
  },
});

function createTable(tableName, columns, foreignKeys = []) {
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
}

function dropTable(tableName) {
  return knex.schema.dropTableIfExists(tableName);
}

function addColumn(tableName, column) {
  return knex.schema.table(tableName, (table) => {
    table[column.name](column.type);

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
}

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

module.exports = {
  createTable,
  dropTable,
  addColumn,
  modifyColumn,
};
