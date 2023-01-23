import React, { PropsWithChildren } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

export default function Paperbase(props: PropsWithChildren) {
  const { children } = props;

  return (
    <Container maxWidth="lg">
      <Paper
        elevation={5}
        sx={{
          mt: 4,
          mb: 4,
          overflow: "hidden",
          // backgroundColor: "#FAF6F5",
          position: "relative",
        }}
      >
        {children}
      </Paper>
    </Container>
  );
}
