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
import otopQrcode from "../images/otopQrcode.png";

const exp = [
  {
    label: "๑ตำบล ๑ผลิตภัณฑ์",
    description: "ไลน์เว็บแอพ",
    duration: "2022",
    img: otopQrcode,
    link: "https://liff.line.me/1645278921-kWRPP32q/?accountId=675syrgx",
  },
  {
    label: "taxi2thailand.com",
    description: "เว็บรับส่งนักท่องเที่ยว",
    duration: "2021",
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
                {step.img !== undefined ? (
                  <Button href={step.link} target="_blank">
                    <Avatar
                      src={step.img}
                      variant="rounded"
                      sx={{
                        width: 150,
                        height: 150,
                        border: `1px solid ${blueGrey[200]}`,
                      }}
                    />
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    size="small"
                    endIcon={<OpenInNewIcon />}
                    sx={{ borderRadius: 20 }}
                    color="info"
                    target="_blank"
                    href={step.link}
                  >
                    เปิดดู
                  </Button>
                )}
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </ListItem>
    </List>
  );
}
