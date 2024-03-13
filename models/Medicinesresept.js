const mongoose = require('mongoose');
const medicinesreseptSchema = new mongoose.Schema({
    client_id: String,
    name: String,
    create: String,
    medicine: String,
})

module.exports = mongoose.model('Medicinesresept', medicinesreseptSchema);