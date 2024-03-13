const mongoose = require('mongoose');
const pharmacistSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    phone: String,
    address: String,
})

module.exports = mongoose.model('Pharmacist', pharmacistSchema);