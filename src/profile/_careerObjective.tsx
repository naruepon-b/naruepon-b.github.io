import React from "react";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
// import classNames from "classnames";

import Data from "../data.json";
import main from "../images/main.png";
import second from "../images/second.png";
import third from "../images/support.png";

export default function CareerObjective() {
  //   const navigation = useNavigate();

  return (
    <List dense sx={{ width: "100%" }} className="sectionHeader">
      <Divider textAlign="left">
        <Chip
          label="Career Objective"
          variant="outlined"
          sx={{ fontWeight: 600 }}
        />
      </Divider>
      <ListItem secondaryAction={<Chip label="1" />}>
        <ListItemAvatar>
          <Avatar variant="square" src={main} />
        </ListItemAvatar>
        <ListItemText primary={Data.career.main} />
      </ListItem>
      <ListItem
        secondaryAction={<Chip label="2" sx={{ opacity: 0.7 }} />}
        sx={{ pl: 3, opacity: 0.7 }}
      >
        <ListItemAvatar>
          <Avatar variant="square" src={second} />
        </ListItemAvatar>
        <ListItemText primary={Data.career.seconds} />
      </ListItem>
      <ListItem
        secondaryAction={<Chip label="3" sx={{ opacity: 0.5 }} />}
        sx={{ pl: 3, opacity: 0.7 }}
      >
        <ListItemAvatar>
          <Avatar variant="square" src={third} />
        </ListItemAvatar>
        <ListItemText primary={Data.career.third} />
      </ListItem>
    </List>
  );
}
