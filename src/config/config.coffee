
path = require('path')

module.exports =
  development:
    db: 'mongodb://localhost/ticketman_dev'
    app:
      name: 'Ticket System - Dev'
    basicAuth:
      username : "dev"
      password : "123"

  test:
    db: 'mongodb://localhost/ticketman_test'
    app:
      name: 'Ticket System - Test'
    basicAuth:
      username : "test"
      password : "123"

  production:
    db: 'mongodb://localhost/ticketman'
    app:
      name: 'Ticket System'
    basicAuth:
      username : "production"
      password : "123"


