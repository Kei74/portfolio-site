"use client"
import { Alert, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
export default function Contact() {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitSuccessful, setSubmitSuccessful] = useState<boolean>(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Placeholder for form submission
    console.log(`Form submitted \nName: ${name} \nEmail: ${email} \nMessage: ${message}`);
    setSubmitSuccessful(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <form onSubmit={handleSubmit}>
        {submitSuccessful && <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          Message Sent!
        </Alert>}
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Send Message
        </Button>
      </form>
    </Container>
  );
}
