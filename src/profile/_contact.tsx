import React from "react";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import blueGrey from "@mui/material/colors/blueGrey";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import Avatar from "@mui/material/Avatar";
// import classNames from "classnames";

// import { useThemeContext } from "../ThemeContext";
import Data from "../data.json";
import gmail from "../images/gmail.png";
import github from "../images/github.png";
import phone from "../images/phone.png";
import place from "../images/place.png";

export default function Contact() {
  //   const navigation = useNavigate();
  // const theme = useThemeContext();

  return (
    <List dense sx={{ width: "100%" }} className="sectionHeader">
      <Divider textAlign="left">
        <Chip label="Contact" variant="outlined" sx={{ fontWeight: 600 }} />
      </Divider>
      <ListItem>
        <ListItemAvatar>
          <Avatar variant="square" src={place} />
        </ListItemAvatar>
        <ListItemText primary={Data.personal.address} secondary="ที่อยู่" />
      </ListItem>
      <ListItemButton sx={{ p: 0 }} href={`tel:${Data.contact.phoneNumber}`}>
        <ListItem
          secondaryAction={
            <PhoneIcon sx={{ color: blueGrey[100], opacity: 0.5 }} />
          }
        >
          <ListItemAvatar>
            <Avatar variant="square" src={phone} />
          </ListItemAvatar>
          <ListItemText
            primary={Data.contact.phoneNumber}
            secondary="เบอร์ติดต่อ"
          />
        </ListItem>
      </ListItemButton>
      <ListItemButton sx={{ p: 0 }} href={`mailto:${Data.contact.email}`}>
        <ListItem
          secondaryAction={
            <EmailIcon sx={{ color: blueGrey[100], opacity: 0.5 }} />
          }
        >
          <ListItemAvatar>
            <Avatar variant="square" src={gmail} />
          </ListItemAvatar>
          <ListItemText
            primary={Data.contact.email}
            secondary="อีเมล"
            primaryTypographyProps={{
              style: {
                wordBreak: "break-all",
              },
            }}
          />
        </ListItem>
      </ListItemButton>
      <ListItemButton
        sx={{ p: 0 }}
        href={`https://${Data.contact.github}`}
        target="_blank"
      >
        <ListItem
          secondaryAction={
            <GitHubIcon sx={{ color: blueGrey[100], opacity: 0.5 }} />
          }
        >
          <ListItemAvatar>
            <Avatar variant="square" src={github} />
          </ListItemAvatar>
          <ListItemText primary={Data.contact.github} secondary="GitHub" />
        </ListItem>
      </ListItemButton>
      {/* <ListItem sx={{ justifyContent: "center" }}>
        <BottomNavigation
          showLabels
          // value={0}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
          sx={{ bgcolor: "unset", mt: 1 }}
        >
          <BottomNavigationAction
            label="Line"
            icon={<Avatar variant="square" src={line} />}
          />
          <BottomNavigationAction
            label="Fackbook"
            icon={<Avatar variant="square" src={facebook} />}
          />
        </BottomNavigation>
      </ListItem> */}
    </List>
  );
}
