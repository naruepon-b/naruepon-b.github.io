import React from "react";
import { Chip, Divider, List, ListItem, Typography } from "@mui/material";
// import classNames from "classnames";
// import { useThemeContext } from "../ThemeContext";
import Data from "../data.json";

export default function Introduction() {
  //   const navigation = useNavigate();
  // const theme = useThemeContext();

  return (
    <List sx={{ width: "100%" }} className="sectionHeader">
      <Divider textAlign="left">
        <Chip label="About Me" variant="outlined" sx={{ fontWeight: 600 }} />
      </Divider>
      {Data.AboutMe.map((me, index) => (
        <ListItem sx={{ pl: 4 }} key={`me-${index}`}>
          <Typography variant="body1" component="p" sx={{ textIndent: 16 }}>
            {me}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
}
