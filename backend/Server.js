const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// MongoDB Connection
mongoose.connect("mongodb+srv://mradulsingh:mradulsingh@cluster1.t8prj2e.mongodb.net/contact-management", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Contact Schema
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  company: { type: String, required: true },
  jobTitle: { type: String, required: true },
});

const Contact = mongoose.model("Contact", contactSchema);

app.use(cors());
app.use(bodyParser.json());

// Routes
app.get("/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contacts", error });
  }
});

app.post("/contacts", async (req, res) => {
  const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;

  try {
    const contact = new Contact({ firstName, lastName, email, phoneNumber, company, jobTitle });
    await contact.save();
    res.status(201).json({ message: "Contact added!", contact });
  } catch (error) {
    res.status(400).json({ message: "Error adding contact", error });
  }
});

app.put("/contacts/:id", async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;

  try {
    const contact = await Contact.findByIdAndUpdate(
      id,
      { firstName, lastName, email, phoneNumber, company, jobTitle },
      { new: true }
    );
    res.status(200).json({ message: "Contact updated!", contact });
  } catch (error) {
    res.status(400).json({ message: "Error updating contact", error });
  }
});

app.delete("/contacts/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Contact.findByIdAndDelete(id);
    res.status(200).json({ message: "Contact deleted!" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting contact", error });
  }
});

app.listen(5002, () => {
  console.log("Server running on http://localhost:5002");
});
