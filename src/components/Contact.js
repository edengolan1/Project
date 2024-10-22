import React, { useState, useCallback } from "react";
import {
  TextField,
  Typography,
  Grid,
  Box,
  IconButton,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import emailjs from "emailjs-com";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CustomButton from "./Button/CustomButton";
import Confetti from "react-confetti";

// קבועים - מומלץ להעביר למשתני סביבה
const EMAILJS_CONFIG = {
  SERVICE_ID: "service_npnvzce",
  TEMPLATE_ID: "template_ywnmreo",
  USER_ID: "rVzX5fBmrNmT9I_Cq",
  TO_EMAIL: "eden9123@gmail.com",
};

// וולידציה
const VALIDATION = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\d\-+()]{9,}$/,
  fullName: /^[\u0590-\u05FFa-zA-Z\s]{2,}$/,
};

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [showConfetti, setShowConfetti] = useState(false);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        return VALIDATION.email.test(value) ? "" : "כתובת אימייל לא תקינה";
      case "phone":
        return VALIDATION.phone.test(value) ? "" : "מספר טלפון לא תקין";
      case "fullName":
        return VALIDATION.fullName.test(value) ? "" : "שם מלא לא תקין";
      case "message":
        return value.trim().length >= 10
          ? ""
          : "הודעה חייבת להכיל לפחות 10 תווים";
      default:
        return "";
    }
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // בדיקת תקינות בזמן הקלדה
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // וולידציה של כל השדות
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setNotification({
        open: true,
        message: "יש לתקן את השגיאות בטופס",
        severity: "error",
      });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          to_email: EMAILJS_CONFIG.TO_EMAIL,
          from_name: formData.fullName,
          message: formData.message,
          phone: formData.phone,
          reply_to: formData.email,
        },
        EMAILJS_CONFIG.USER_ID
      );

      // איפוס הטופס והצגת אנימציית הצלחה
      setFormData({ fullName: "", phone: "", email: "", message: "" });
      setShowConfetti(true);
      setNotification({
        open: true,
        message: "ההודעה נשלחה בהצלחה! תודה",
        severity: "success",
      });

      setTimeout(() => setShowConfetti(false), 4000);
    } catch (error) {
      console.error("Error sending email:", error);
      setNotification({
        open: true,
        message: "שגיאה בשליחת ההודעה. אנא נסו שוב מאוחר יותר",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseNotification = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      {showConfetti && <Confetti />}
      <Box
        sx={{
          mt: 8,
          backgroundColor: "whitesmoke",
          padding: { xs: "20px", sm: "40px", md: "54px" },
          borderRadius: "16px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          color="#018ba3"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          צור איתנו קשר
        </Typography>

        <Box
          sx={{
            borderBottom: "2px solid #018ba3",
            marginTop: 1,
            marginBottom: 4,
            width: "190px",
            mx: "auto",
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            mb: 4,
          }}
        >
          {[
            { icon: <WhatsAppIcon />, href: "https://wa.me/+972522877510" },
            { icon: <EmailIcon />, href: "mailto:eden9123@gmail.com" },
            {
              icon: <LinkedInIcon />,
              href: "https://www.linkedin.com/in/eden--golan/",
            },
          ].map((item, index) => (
            <IconButton
              key={index}
              component="a"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(1, 139, 163, 0.1)",
                  transform: "scale(1.1)",
                },
                transition: "all 0.2s ease-in-out",
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Box>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {[
              { name: "fullName", label: "שם מלא", type: "text" },
              { name: "email", label: "אימייל", type: "email" },
              { name: "phone", label: "טלפון", type: "tel" },
              { name: "message", label: "הודעה", multiline: true, rows: 4 },
            ].map((field) => (
              <Grid item xs={12} key={field.name}>
                <Box sx={{display:'flex',justifyContent:'center'}}>
                  <TextField
                    name={field.name}
                    label={field.label}
                    type={field.type}
                    multiline={field.multiline}
                    rows={field.rows}
                    value={formData[field.name]}
                    onChange={handleChange}
                    error={!!errors[field.name]}
                    helperText={errors[field.name]}
                    required
                    dir="rtl"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                      },
                      width: "80%",
                    }}
                    InputProps={{
                      style: { textAlign: "right" },
                    }}
                  />
                </Box>
              </Grid>
            ))}

            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CustomButton
                  text={loading ? "...שולח" : "שלח הודעה"}
                  type="submit"
                  disabled={loading}
                  startIcon={loading && <CircularProgress size={20} />}
                />
              </Box>
            </Grid>
          </Grid>
        </form>

        <Snackbar
          open={notification.open}
          autoHideDuration={6000}
          onClose={handleCloseNotification}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseNotification}
            severity={notification.severity}
            sx={{ width: "100%" }}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default Contact;
