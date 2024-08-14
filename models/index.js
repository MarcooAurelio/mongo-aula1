// index.js
const mongoose = require('./mongoose'); // Importa a configuração do mongoose
const User = require('./models/user'); // Importa o modelo de usuário

async function run() {
  try {
    // Create a new document
    const user = new User({ name: "John Doe", age: 30 });
    const savedUser = await user.save();
    console.log("User saved:", savedUser);

    // Find all documents
    const users = await User.find({});
    console.log("Users found:", users);

    // Update a document
    const updatedUser = await User.updateOne(
      { name: "John Doe" },
      { $set: { age: 31 } }
    );
    console.log("Updated users:", updatedUser);

    // Delete a document
    const deletedUser = await User.deleteOne({ name: "John Doe" });
    console.log("Deleted users:", deletedUser.deletedCount);

  } finally {
    // Close the Mongoose connection
    mongoose.connection.close();
  }
}
run().catch(console.dir);
