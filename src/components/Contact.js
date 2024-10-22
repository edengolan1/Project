import React, { useState } from "react";
import {
  TextField,
  Typography,
  Grid,
  Box,
  IconButton,
  CircularProgress,
} from "@mui/material";
import emailjs from "emailjs-com";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CustomButton from "./Button/CustomButton";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("אימייל לא תקין");
      setLoading(false);
      return;
    }

    emailjs
      .send(
        "service_npnvzce",
        "template_ywnmreo",
        {
          to_email: "eden9123@gmail.com",
          from_name: fullName,
          message: message,
          phone: phone,
          reply_to: email,
        },
        "rVzX5fBmrNmT9I_Cq"
      )
      .then(
        (response) => {
          console.log("Email sent:", response);
          setSuccess(".ההודעה נשלחה בהצלחה! תודה");
        },
        (error) => {
          console.error("Email send failed:", error);
          setError("שגיאה בשליחת ההודעה. אנא נסו שוב מאוחר יותר.");
        }
      )
      .finally(() => {
        setLoading(false);
        setFullName("");
        setEmail("");
        setPhone("");
        setMessage("");
      });
  };

  return (
    <Box
      sx={{
        mt: 8,
        backgroundColor: "whitesmoke",
        padding: "54px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" align="center" color="#018ba3">
        צור איתנו קשר
      </Typography>
      <Box
        sx={{
          borderBottom: "2px solid #018ba3",
          marginTop: 1,
          display: "inline-block",
          width: "190px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          m: 3,
          gap: 2,
        }}
      >
        <IconButton
          component="a"
          href="https://wa.me/+972522877510"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
        </IconButton>
        <IconButton
          component="a"
          href="mailto:eden9123@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/eden--golan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
      <form onSubmit={sendEmail}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} display="flex" justifyContent="center">
            <TextField
              label="שם מלא"
              variant="outlined"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              dir="rtl"
              sx={{ width: "80%" }}
              InputProps={{
                style: { textAlign: "right", borderRadius: "16px" },
              }}
            />
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <TextField
              label="אימייל"
              variant="outlined"
              type="email"
              sx={{ width: "80%" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              dir="rtl"
              InputProps={{
                style: { textAlign: "right", borderRadius: "16px" },
              }}
            />
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <TextField
              label="טלפון"
              variant="outlined"
              type="phone"
              sx={{ width: "80%" }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              dir="rtl"
              InputProps={{
                style: { textAlign: "right", borderRadius: "16px" },
              }}
            />
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <TextField
              label="הודעה"
              variant="outlined"
              multiline
              rows={4}
              sx={{ width: "80%" }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              dir="rtl"
              InputProps={{
                style: { textAlign: "right", borderRadius: "16px" },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {loading && <CircularProgress size={24} />}
            </Box>
            <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
              <CustomButton
                text={"שלח הודעה"}
                type="submit"
                disabled={loading}
              />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
          {error && <Typography color="error">{error}</Typography>}
          {success && <Typography color="success">{success}</Typography>}
        </Box>
      </form>
    </Box>
  );
}

export default Contact;
