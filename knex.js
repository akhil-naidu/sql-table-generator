import knex from 'knex';
const knexObj = knex({
  client: 'pg',
  useNullAsDefault: true,
  connection: {
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'dummy_db',
  },
});

export default knexObj;
