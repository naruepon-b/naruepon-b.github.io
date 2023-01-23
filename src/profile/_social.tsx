import React from "react";
import {
  Chip,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import blueGrey from "@mui/material/colors/blueGrey";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import Avatar from "@mui/material/Avatar";
// import classNames from "classnames";
// import { useThemeContext } from "../ThemeContext";
import Data from "../data.json";
import line from "../images/line.png";
import facebook from "../images/facebook.png";
import messenger from "../images/messenger.png";

export default function Contact() {
  //   const navigation = useNavigate();
  // const theme = useThemeContext();

  return (
    <List dense sx={{ width: "100%" }} className="sectionHeader">
      <Divider textAlign="left">
        <Chip label="Social" variant="outlined" sx={{ fontWeight: 600 }} />
      </Divider>
      <ListItemButton
        sx={{ p: 0 }}
        href={`https://${Data.social.line}`}
        target="_blank"
      >
        <ListItem
          secondaryAction={
            <OpenInNewIcon sx={{ color: blueGrey[100], opacity: 0.5 }} />
          }
        >
          <ListItemAvatar>
            <Avatar variant="square" src={line} />
          </ListItemAvatar>
          <ListItemText primary={Data.social.line} secondary="Line" />
        </ListItem>
      </ListItemButton>
      <ListItemButton
        sx={{ p: 0 }}
        href={`https://${Data.social.facebook}`}
        target="_blank"
      >
        <ListItem
          secondaryAction={
            <OpenInNewIcon sx={{ color: blueGrey[100], opacity: 0.5 }} />
          }
        >
          <ListItemAvatar>
            <Avatar variant="square" src={facebook} />
          </ListItemAvatar>
          <ListItemText primary={Data.social.facebook} secondary="Facebook" />
        </ListItem>
      </ListItemButton>
      <ListItemButton
        sx={{ p: 0 }}
        href={`https://${Data.social.messenger}`}
        target="_blank"
      >
        <ListItem
          secondaryAction={
            <OpenInNewIcon sx={{ color: blueGrey[100], opacity: 0.5 }} />
          }
        >
          <ListItemAvatar>
            <Avatar variant="square" src={messenger} />
          </ListItemAvatar>
          <ListItemText primary={Data.social.messenger} secondary="Messenger" />
        </ListItem>
      </ListItemButton>
    </List>
  );
}
