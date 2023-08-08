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
