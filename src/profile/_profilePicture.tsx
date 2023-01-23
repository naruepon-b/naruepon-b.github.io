import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import profilePicture from "../images/profileSquare.png";
import { ThemeContext } from "../ThemeContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    width: 15,
    height: 15,
    borderRadius: "50%",
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function ProfilePicture() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 5,
        mb: 1,
      }}
    >
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <ThemeContext.Consumer>
          {({ mode }) => (
            <Avatar
              alt="Profile Picture"
              src={profilePicture}
              // variant="rounded"
              sx={{
                width: 200,
                height: 200,
                bgcolor: "#2e7ce933",
                outline: "4px solid #2e7ce933",
                // border: `3px solid ${mode === "light" ? "#212121a6" : "#fff"}`,
                // outline: `3px solid ${mode === "light" ? "#21212184" : "#fff"}`,
              }}
            />
          )}
        </ThemeContext.Consumer>
      </StyledBadge>
    </Box>
  );
}
