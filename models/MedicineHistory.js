const mongoose = require('mongoose');

const medicineHistorySchema = new mongoose.Schema({
    client_id: String,
    name: String,
    create: String,
    medicine: String,
})


module.exports = mongoose.model('MedicineHistory', medicineHistorySchema);