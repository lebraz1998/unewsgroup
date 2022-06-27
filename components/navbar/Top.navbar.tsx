import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Logout from "@mui/icons-material/Logout";
import { useRouter } from "next/router";
import { TopNavbarStyled } from "../../styles/navbar";
import MobileDrawer from "./Mobiledrawer.navbar";

export default function Navbar() {
  const { replace } = useRouter();
  return (
    <TopNavbarStyled>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <MobileDrawer />
          <Typography variant="h6" noWrap component="div">
            Unewsgroup
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton
              onClick={() => {
                replace("/login");
              }}
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Logout />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </TopNavbarStyled>
  );
}
