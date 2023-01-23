import React from "react";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import SchoolIcon from "@mui/icons-material/School";
import Avatar from "@mui/material/Avatar";
// import classNames from "classnames";

// import { useThemeContext } from "../ThemeContext";
import Data from "../data.json";
import graduate from "../images/graduate.png";

export default function Education() {
  //   const navigation = useNavigate();
  // const theme = useThemeContext();

  return (
    <List sx={{ width: "100%" }} className="sectionHeader">
      <Divider textAlign="left">
        <Chip label="Education" variant="outlined" sx={{ fontWeight: 600 }} />
      </Divider>
      <ListItem>
        <ListItemAvatar>
          <Avatar variant="square" src={graduate}>
            <SchoolIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              {Data.education.name} <br />
              {Data.education.major}
            </>
          }
          secondary={Data.education.duration}
        />
      </ListItem>
    </List>
  );
}
