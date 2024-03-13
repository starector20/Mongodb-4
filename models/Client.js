const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    phone: String,
    address: String,
    client_id: String
})

module.exports = mongoose.model('Client', clientSchema)