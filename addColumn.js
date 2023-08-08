const addColumn = (tableName, columnName, columnType, defaultValue = null) => {
  let addColumnStatement = `ALTER TABLE ${tableName} ADD COLUMN ${columnName} ${columnType}`;

  if (defaultValue !== null) {
    addColumnStatement += ` DEFAULT ${defaultValue}`;
  }

  return addColumnStatement;
};

export default addColumn;

// const addColumnSQL = generateAddColumnSQL(
//   'todos',
//   'due_date',
//   'date',
//   "'2023-08-15'",
// );

// console.log(addColumnSQL);
