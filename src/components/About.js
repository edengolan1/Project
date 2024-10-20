import React from "react";
import { Box, Typography, Grid } from "@mui/material"; // רק Grid הרגיל

function About() {
  return (
    <Grid container spacing={2} sx={{ padding: "48px" }}>
      <Grid item xs={12} md={5} display="flex" justifyContent="center">
        <img src="/assets/logo.svg" alt="" width={"250px"} />
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        sx={{ textAlign: "right", paddingRight: { xs: 0, md: "48px" } }}
      >
        <Typography color="gray" variant="h4" component={"h4"}>
          אודותינו
        </Typography>
        <Box
          sx={{
            borderBottom: "2px solid gray",
            marginTop: 1,
            display: "inline-block",
            width: "102px",
          }}
        />
        <Typography color="gray" variant="h6" component={"h6"} sx={{ mt: 1 }}>
          קבוצת מייקל קרניצקי הינה אחת מקבוצות הייזום והניהול האיתנות בישראל.
          פעילות הקבוצה החלה בשנת 1991 בענף הרכב, בתחום היבוא ושיווק של רכבי BMW
          ו-MINI בישראל. בהמשך הפעילות בענף הרכב התרחבה לתחום יבוא ושיווק בלעדי
          לישראל של מותגי צמיגים מהמובילים בעולם. לפני כ-20 שנה, החליטה הקבוצה
          להתרחב גם לענף הנדל"ן וכיום מתמחה בארבעה תחומים עיקריים: ארגון וניהול
          קבוצות רכישה, נדל״ן מניב באזורי ביקוש, יזמות נדל״ן במרכז הארץ והקמת
          פרויקטים בתחום ההתחדשות העירונית.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default About;
