import React, { useState } from "react";
import { TextField, Button, Box, Grid } from "@mui/material";
import axios from "axios";

const ContactForm = ({ fetchContacts }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    jobTitle: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_URL}/contacts`, formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        company: "",
        jobTitle: "",
      });
      fetchContacts();
    } catch (error) {
      console.error("Error adding contact", error);
    }
  };

  return (
    <Box sx={{ marginBottom: 4 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {["firstName", "lastName", "email", "phoneNumber", "company", "jobTitle"].map((field) => (
            <Grid item xs={12} sm={6} key={field}>
              <TextField
                fullWidth
                name={field}
                label={field.replace(/([A-Z])/g, " $1")}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add Contact
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ContactForm;
