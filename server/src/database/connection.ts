import knex from 'knex';

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'NLW',
    password : 'NLW',
    database : 'Proffy'
  },
  useNullAsDefault: true,
});

export default db;