import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { FormControlLabel, FormGroup, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import MaterialUISwitch from "./components/MaterialUISwitch";
import GitHubIcon from "@mui/icons-material/GitHub";
import { blueGrey } from "@mui/material/colors";

import Layout from "./components/Layout";
import { useThemeContext } from "./ThemeContext";
import "./App.css";
import Data from "./data.json";
import ProfilePicture from "./profile/_profilePicture";
import CareerObjective from "./profile/_careerObjective";
import Personal from "./profile/_personalInformation";
import Contact from "./profile/_contact";
import Social from "./profile/_social";
import Introduction from "./profile/_introduction";
import Education from "./profile/_education";
import Exp from "./profile/_experience";
import Skills from "./profile/_skills";
import Hobbies from "./profile/_hobbies";

import working from "./images/working.png";

function App() {
  const theme = useTheme();
  const { mode, colorMode } = useThemeContext();
  const hideBorderRight = useMediaQuery(theme.breakpoints.down("sm"));
  const defaultDarkMode = mode === "dark" ? true : false;
  return (
    <>
      <FormGroup className="no-print" sx={{ pt: 2, alignContent: "center" }}>
        <FormControlLabel
          onChange={colorMode.toggleColorMode}
          control={
            <MaterialUISwitch
              sx={{ m: 1 }}
              /*defaultChecked={true}*/ checked={defaultDarkMode}
            />
          }
          label={mode === "dark" ? "Dark" : "Light"}
          sx={{ width: "fit-content" }}
        />
      </FormGroup>

      <Layout>
        <Grid container spacing={0}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className={hideBorderRight ? undefined : "borderRightDivider"}
            // sx={{ borderRight: hideBorderRight ? "none" : "1px solid #848ea0" }}
          >
            <ProfilePicture />
            <Box
              sx={{
                p: 2,
              }}
            >
              <div
                style={{
                  borderBottom: `2px solid ${
                    mode === "light" ? "#90a4ae" : "#fff"
                  }`,
                }}
              >
                <Typography
                  variant="h4"
                  textAlign="center"
                  sx={{ textTransform: "uppercase" }}
                >
                  {Data.personal.firstName}
                  <br />
                  {Data.personal.lastName}
                </Typography>
              </div>
            </Box>
            <Box sx={{ p: 2, pt: 0 }}>
              <Typography variant="h5" textAlign="center">
                <img
                  src={working}
                  alt="working"
                  style={{ width: 40, verticalAlign: "middle", marginRight: 8 }}
                />
                {Data.job.jobDescription}
              </Typography>
            </Box>
            <Box
              sx={{ p: 2 }}
              className={hideBorderRight ? undefined : "borderRightDivider"}
            >
              <CareerObjective />
              <Personal />
              <Contact />
              <Social />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar
                  variant="rounded"
                  sx={{
                    width: 150,
                    height: 150,
                    border: `1px solid ${blueGrey[100]}`,
                    "& img": {
                      transform: "scale(1.15)",
                    },
                  }}
                  src={`https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${encodeURIComponent(
                    "https://naruepon-b.github.io"
                  )}`}
                />
              </Box>
              <Box
                textAlign="center"
                sx={{ color: blueGrey[300], padding: "4px" }}
              >
                <GitHubIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                GitHub
              </Box>
            </Box>
          </Grid>
          <Grid
            container
            item
            direction="column"
            // justifyContent="flex-start"
            // spacing={0}
            xs={12}
            sm={6}
            md={8}
            sx={{ p: 2 }}
          >
            <Grid item sx={{ width: "100%" }}>
              <Introduction />
            </Grid>
            <Grid item sx={{ width: "100%" }}>
              <Education />
            </Grid>
            <Grid item sx={{ width: "100%" }}>
              <Exp />
            </Grid>
            <Grid item sx={{ width: "100%" }}>
              <Skills />
            </Grid>
            <Grid item sx={{ width: "100%" }}>
              <Hobbies />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <div
              style={{
                width: "100%",
                height: 28,
                backgroundColor: "#D5E5FB",
              }}
            />
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}

export default App;
