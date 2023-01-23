import React, { PropsWithChildren } from "react";
import {
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MovieIcon from "@mui/icons-material/Movie";
import YouTubeIcon from "@mui/icons-material/YouTube";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import StorefrontIcon from "@mui/icons-material/Storefront";
// import classNames from "classnames";
// import { useThemeContext } from "../ThemeContext";

function LayoutGrid({ children }: PropsWithChildren) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <ListItem>{children}</ListItem>
    </Grid>
  );
}

export default function Hobbies() {
  //   const navigation = useNavigate();
  // const theme = useThemeContext();

  return (
    <List dense sx={{ width: "100%" }} className="sectionHeader">
      <Divider textAlign="left">
        <Chip
          label="Hobbies & Interests"
          variant="outlined"
          sx={{ fontWeight: 600 }}
        />
      </Divider>
      <Grid container>
        <LayoutGrid>
          <ListItemIcon>
            <SportsEsportsIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="เล่นเกม" secondary="GTAV" />
        </LayoutGrid>
        <LayoutGrid>
          <ListItemIcon>
            <MusicNoteIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="ฟังเพลง" secondary="Joox, Spotify" />
        </LayoutGrid>
        <LayoutGrid>
          <ListItemIcon>
            <MovieIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Anime" secondary="Netflix" />
        </LayoutGrid>
        <LayoutGrid>
          <ListItemIcon>
            <YouTubeIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Dhamma" secondary="YouTube" />
        </LayoutGrid>
        <LayoutGrid>
          <ListItemIcon>
            <VideogameAssetIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="สร้างเกม" secondary="Unity2D" />
        </LayoutGrid>
        <LayoutGrid>
          <ListItemIcon>
            <StorefrontIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Marketing" secondary="Online, SEO" />
        </LayoutGrid>
      </Grid>
    </List>
  );
}
