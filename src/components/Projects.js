import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import CustomButton from "./Button/CustomButton";

function Projects() {
  return (
    <Box>
      <Box sx={{ textAlign: "center", paddingTop: { xs: "24px", md: "48px" } }}>
        <Typography
          variant="h4"
          component="h4"
          color="#018ba3"
          sx={{ fontSize: { xs: "1.8rem", md: "2.125rem" } }}
        >
          הפרויקטים שלנו
        </Typography>
        <Box
          sx={{
            borderBottom: "2px solid #018ba3",
            marginTop: 1,
            display: "inline-block",
            width: "190px",
          }}
        />
      </Box>
      <Grid
        container
        spacing={0}
        sx={{ paddingTop: { xs: "24px", md: "48px" } }}
      >
        <Grid item xs={12} md={6}>
          <Box sx={{ height: { xs: "300px", md: "700px" }, width: "100%" }}>
            <img
              src="./assets/Photo1.jpg"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              textAlign: "right",
              padding: { xs: "24px", md: "48px" },
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                component="h4"
                color="#018ba3"
                sx={{ fontSize: { xs: "1.8rem", md: "2.125rem" } }}
              >
                נדלן למגורים
              </Typography>
              <Box
                sx={{
                  borderBottom: "2px solid #018ba3",
                  marginTop: 1,
                  display: "inline-block",
                  width: "165px",
                }}
              />
            </Box>
            <Typography
              variant="h6"
              component="h6"
              mt={1}
              sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
            >
              החטיבה מתמחה גם ברכישת נכסים לשימור וברכישת זכויות בניה הניתנות
              לניוד. לחטיבה פורטפוליו נכסים ופרויקטים מגוון, הנבנה על בסיס
              אסטרטגיה ארוכת טווח, השקעה בנכסי פרימיום וניהול סיכונים שמרני. רוב
              ההשקעות מבוצעות בשיתוף עם חברות נדל״ן מובילות, מנוסות ובעלות
              מוניטין רב : קבוצת סופרין, תדהר, רוגובין, ריבוע נדל״ן.
            </Typography>
            <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
              <CustomButton text="..קרא עוד" onClick={() => alert("קרא עוד")} />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
          <Box
            sx={{
              textAlign: "right",
              padding: { xs: "24px", md: "48px" },
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                component="h4"
                color="#018ba3"
                sx={{ fontSize: { xs: "1.8rem", md: "2.125rem" } }}
              >
                נדלן לעסקים
              </Typography>
              <Box
                sx={{
                  borderBottom: "2px solid #018ba3",
                  marginTop: 1,
                  display: "inline-block",
                  width: "165px",
                }}
              />
            </Box>
            <Typography
              variant="h6"
              component="h6"
              mt={1}
              sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
            >
              החברה מתמחה גם ברכישת קרקעות לבנייה לעסקים , ובונה בשטח נדלן
              לעסקים ומפתחת את האיזור . בנוסף החברה עוסקת בשיווק קרקעות לעסקים
              המעוניינים לבנות עצמאית את הנדלן לעסק ובכך גם מלווה את העסק .
              החברה עובדת בשיתוף עם מגוון חברות גדולות.
            </Typography>
            <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
              <CustomButton text="..קרא עוד" onClick={() => alert("קרא עוד")} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
          <Box sx={{ height: { xs: "300px", md: "700px" }, width: "100%" }}>
            <img
              src="./assets/Photo2.jpg"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Projects;
