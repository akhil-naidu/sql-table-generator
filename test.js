import { generateCreateTableSQL } from './index.js';

const createTableSQL = generateCreateTableSQL('todos', [
  { name: 'id', type: 'uuid', primary: true, default: 'gen_random_uuid()' },
  { name: 'task', type: 'text', notNull: true },
  { name: 'completed', type: 'boolean', default: 'false' },
  { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
  { name: 'updated_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
]);

console.log(createTableSQL);
