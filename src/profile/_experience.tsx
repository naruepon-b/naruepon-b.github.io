import React from "react";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import WorkIcon from "@mui/icons-material/Work";
import blueGrey from "@mui/material/colors/blueGrey";
import Avatar from "@mui/material/Avatar";
// import classNames from "classnames";
// import { useThemeContext } from "../ThemeContext";

import work from "../images/program.png";
import line from "../images/line.png";
import website from "../images/website.png";

const exp = [
  {
    label: "๑ตำบล ๑ผลิตภัณฑ์",
    description: "ไลน์เว็บแอพ",
    duration: "2022",
    icon: line,
    link: "https://liff.line.me/1645278921-kWRPP32q/?accountId=675syrgx",
  },
  {
    label: "taxi2thailand.com",
    description: "เว็บรับส่งนักท่องเที่ยว",
    duration: "2021",
    icon: website,
    link: "https://taxi2thailand.com",
  },
];

export default function Education() {
  //   const navigation = useNavigate();
  // const theme = useThemeContext();

  return (
    <List sx={{ width: "100%" }} className="sectionHeader">
      <Divider textAlign="left">
        <Chip label="Experience" variant="outlined" sx={{ fontWeight: 600 }} />
      </Divider>
      <ListItem sx={{ pl: 4 }}>
        <Stepper orientation="vertical">
          {exp.map((step, index) => (
            <Step key={step.label} active={true}>
              <StepLabel
                StepIconComponent={() => (
                  <Avatar
                    src={work}
                    variant="square"
                    sx={{ width: 32, height: 32 }}
                  >
                    <WorkIcon />
                  </Avatar>
                )}
                optional={
                  <>
                    <Typography variant="caption">
                      {step.duration} - {step.description}
                    </Typography>
                  </>
                }
              >
                <Typography sx={{ textTransform: "uppercase" }}>
                  {step.label}
                </Typography>
              </StepLabel>
              <StepContent>
                <Button
                  variant="text"
                  // size="small"
                  startIcon={<Avatar variant="square" src={step.icon} />}
                  endIcon={<OpenInNewIcon />}
                  sx={{ borderRadius: 20 }}
                  color="info"
                  target="_blank"
                  href={step.link}
                >
                  {step.label}
                </Button>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </ListItem>
    </List>
  );
}
