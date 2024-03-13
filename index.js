const mongoose = require("mongoose");
const Client = require("./models/Client");
const MedicineHistory = require("./models/MedicineHistory");
const Medicinesresept = require("./models/Medicinesresept");
const Pharmacist = require("./models/Pharmacist");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
  const client = new Client({
    name: "Ivan",
    surname: "Ivanow",
    email: "ivanonivan@gmail.com",
    phone: "+380 (54) 38 456 43",
    address: "Malinowo 7b, apartment 55",
  });
  const medicineHistory = new MedicineHistory({
    client_id: client._id,
    name: "Ivan",
    create: "2021-03-21",
    medicine: "Noshpa",
  });
  const medicinesresept = new Medicinesresept({
    client_id: client._id,
    name: "Ivan",
    create: "2021-03-21",
    medicine: "Noshpa",
  });
  const pharmacist = new Pharmacist({
    name: "Maryna",
    surname: "Ivanowa",
    email: "marynaivan@gmail.com",
    phone: "+380 (54) 38 456 43",
    address: "Malinowo 7b, apartment 55",
  });

  await client.save();
  await medicineHistory.save();
  await medicinesresept.save();
  await pharmacist.save();

  // generate and save 100 clients
  for (let i = 0; i < 100; i++) {
    await new Client({
      name: "Ivan",
      surname: "Ivanow",
      email: `test${i}@example.com`,
    }).save();
  }

  const client1 = await Client.findOne({ name: "Ivan" });
  console.log("Found client:", client1);

  const updated = await Client.findOneAndUpdate(
    { name: "Ivan" },
    { name: "Ivan UPDATED", surname: "Ivanov" }
  );
  console.log("Updated client:", updated);

  const result = await Medicinesresept.deleteOne({
    name: "Ivan",
    medicine: "Noshpa",
  });
  console.log("Deleted:", result);

  console.log("Done");
}

main().catch((err) => console.log(err));
