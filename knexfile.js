module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'tandem_dev'
    }
  },
  test: {
    client: 'pg',
    connection: {
      database: 'tandem_test'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: process.env.DATABASE_URL

};




// // Update with your config settings.
//
// module.exports = {
//
//   development: {
//     client: 'pg',
//     connection: {
//       database: 'tandem_dev'
//     }
//   },
//
//   staging: {
//     client: 'pg',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },
//
//   production: {
//     client: 'pg',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }
//
// };
