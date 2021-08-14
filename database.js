const mongoose = require('mongoose')

const databaseConfig = require('./config');

const connection = `mongodb+srv://${databaseConfig.user}:${databaseConfig.password}@cluster0.xtsw7.mongodb.net/${databaseConfig.db}?retryWrites=true&w=majority`

mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('MongoDB Conectado!')
})