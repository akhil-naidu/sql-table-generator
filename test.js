import { createTable, dropTable, addColumn, modifyColumn } from './index.js';

const userColumns = [
  { name: 'id', type: 'uuid', primaryKey: true },
  { name: 'name', type: 'string', notNull: true },
];

const orderColumns = [
  { name: 'id', type: 'serial', primaryKey: true },
  { name: 'user_id', type: 'integer' },
];

const foreignKeys = [{ column: 'user_id', refTable: 'users', refColumn: 'id' }];

const createUserTableQuery = createTable('users', userColumns).toString();
// console.log(createUserTableQuery);

const dropUserTableQuery = dropTable('users').toString();
// console.log(dropUserTableQuery);

const addEmailColumnQuery = addColumn('users', {
  name: 'email',
  type: 'string',
  unique: true,
}).toString();
// console.log(addEmailColumnQuery);

const modifyNameColumnQuery = modifyColumn('users', 'name', {
  type: 'text',
  unique: true,
}).toString();
// console.log(modifyNameColumnQuery);
