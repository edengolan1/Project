import React from "react";
import { Box } from "@mui/material";

function Video() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        margin: 0,
        padding: 0
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{  
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/assests/Video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: 0,
          marginTop: 0
        }}
      >
      </Box>
    </Box>
  );
}

export default Video;