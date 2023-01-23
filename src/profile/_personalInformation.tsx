import React from "react";
import {
  Chip,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
// import classNames from "classnames";
// import { useThemeContext } from "../ThemeContext";
import Data from "../data.json";
import person from "../images/person.png";
import cake from "../images/cake.png";
import buddha from "../images/buddha.png";

export default function PersonalInformation() {
  //   const navigation = useNavigate();
  // const theme = useThemeContext();

  return (
    <List dense sx={{ width: "100%" }} className="sectionHeader">
      <Divider textAlign="left">
        <Chip
          label="Personal Info"
          variant="outlined"
          sx={{ fontWeight: 600 }}
        />
      </Divider>
      <ListItem>
        <ListItemAvatar>
          <Avatar variant="square" src={person} />
        </ListItemAvatar>
        <ListItemText
          primary={`${Data.personal.firstNameTH} ${Data.personal.lastNameTH}`}
          secondary="ชื่อ นามสกุล"
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar variant="square" src={cake} />
        </ListItemAvatar>
        <ListItemText primary={Data.personal.dob} secondary="Date of Birth" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar variant="square" src={buddha} />
        </ListItemAvatar>
        <ListItemText primary={Data.personal.religion} secondary="ศาสนา" />
      </ListItem>
    </List>
  );
}
