import { createTable, addColumn } from './index.js';

const createTableSQL = createTable('todos', [
  { name: 'id', type: 'uuid', primary: true, default: 'gen_random_uuid()' },
  { name: 'task', type: 'text', notNull: true },
  {
    name: 'completed',
    type: 'boolean',
    default: 'false',
  },
  { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
  { name: 'updated_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
]);

console.log(createTableSQL);

const addColumnSQL = addColumn('todos', 'due_date', 'date', "'2023-08-15'");
// const addColumnSQL = addColumn('todos', 'due_date', 'date');

console.log(addColumnSQL);
