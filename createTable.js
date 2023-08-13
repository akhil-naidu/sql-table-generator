const createTable = (tableName, columns) => {
  const columnDefinitions = columns.map((column) => {
    let definition = `${column.name} ${column.type}`;

    if (column.primary) {
      definition += ' PRIMARY KEY';
    }

    if (column.notNull) {
      definition += ' NOT NULL';
    }

    if (column.default !== undefined) {
      definition += ` DEFAULT ${column.default}`;
    }

    return definition;
  });

  const createStatement = `CREATE TABLE ${tableName} (${columnDefinitions.join(
    ', ',
  )})`;

  return createStatement;
};

export default createTable;

// const createTableSQL = createTable('todos', [
//   { name: 'id', type: 'uuid', primary: true, default: 'gen_random_uuid()' },
//   { name: 'task', type: 'text', notNull: true },
//   { name: 'completed', type: 'boolean', default: 'false' },
//   { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
//   { name: 'updated_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
// ]);

// console.log(createTableSQL);
