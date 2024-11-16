import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import ContactForm from "./ContactForm";
import ContactsTable from "./ContactsTable";
import axios from "axios";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:5002/contacts");
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts", error);
    }
  };

  const handleEdit = (contact) => {
    // Add edit functionality
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5002/contacts/${id}`);
      fetchContacts();
    } catch (error) {
      console.error("Error deleting contact", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <Container>
      <h1>Contact Management</h1>
      <ContactForm fetchContacts={fetchContacts} />
      <ContactsTable contacts={contacts} fetchContacts={fetchContacts} handleEdit={handleEdit} handleDelete={handleDelete} />
    </Container>
  );
};

export default App;
