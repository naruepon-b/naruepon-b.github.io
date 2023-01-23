import React from "react";
import {
  Avatar,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import CodeOffIcon from "@mui/icons-material/CodeOff";
// import classNames from "classnames";
// import { useThemeContext } from "../ThemeContext";
import { Stack } from "@mui/system";
import Data from "../data.json";
import programming from "../images/programming.png";
import rocket from "../images/rocket.png";
import handWork from "../images/handWork.png";
import { blueGrey } from "@mui/material/colors";

export default function Skills() {
  //   const navigation = useNavigate();
  // const theme = useThemeContext();

  return (
    <List dense sx={{ width: "100%" }} className="sectionHeader">
      <Divider textAlign="left">
        <Chip label="Skills" variant="outlined" sx={{ fontWeight: 600 }} />

        <Chip
          label="พื้นฐาน"
          size="small"
          variant="outlined"
          sx={{ mr: 1, ml: 1 }}
        />
        <Chip
          label="ใช้บ่อย"
          size="small"
          sx={{ border: "1px solid #bdbdbd" }}
        />
      </Divider>
      <CodeIcon fontSize="large" sx={{ ml: 3, color: blueGrey[200] }} />
      <ListItem sx={{ pl: 6 }}>
        <ListItemIcon>
          <Avatar src={programming} variant="square" />
        </ListItemIcon>
        <ListItemText primary="ภาษาโปรแกรม" />
      </ListItem>
      <List dense sx={{ pl: 5 }}>
        <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
          {Data.skills.languagesMostFrequently.map((langMostF, index) => (
            <Chip
              key={`langMostF-${index}`}
              label={langMostF}
              sx={{ border: "1px solid #bdbdbd" }}
            />
          ))}
          {Data.skills.languages.map((lang, index) => (
            <Chip key={`lang-${index}`} label={lang} variant="outlined" />
          ))}
        </Stack>
      </List>
      <ListItem sx={{ pl: 6 }}>
        <ListItemIcon>
          <Avatar src={rocket} variant="square" />
        </ListItemIcon>
        <ListItemText primary="Frameworks" />
      </ListItem>
      <List dense sx={{ pl: 5 }}>
        <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
          {Data.skills.frameworksMostFrequently.map((frameworkMostF, index) => (
            <Chip
              key={`frameworkMostF-${index}`}
              label={frameworkMostF}
              sx={{ border: "1px solid #bdbdbd" }}
            />
          ))}
          {Data.skills.frameworks.map((framework, index) => (
            <Chip
              key={`framework-${index}`}
              label={framework}
              variant="outlined"
            />
          ))}
        </Stack>
      </List>
      <ListItem sx={{ pl: 6 }}>
        <ListItemIcon>
          <Avatar src={handWork} variant="square" />
        </ListItemIcon>
        <ListItemText primary="เครื่องมือและอื่นๆ" />
      </ListItem>
      <List dense sx={{ pl: 5 }}>
        <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
          {Data.skills.toolsAndOthers.map((elem, index) => (
            <Chip key={`tools-${index}`} label={elem} variant="outlined" />
          ))}
        </Stack>
      </List>
      <CodeOffIcon
        fontSize="large"
        sx={{ ml: 3, transform: "scaleX(-1)", color: blueGrey[300] }}
      />
    </List>
  );
}
