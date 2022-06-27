import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Box from "@mui/system/Box";
import { useRouter } from "next/router";
import React from "react";
import { StyledSidebar } from "../../styles/navbar";

export default function SideNavBar() {
  const { push, pathname } = useRouter();

  return (
    <StyledSidebar>
      <Box>
        <Box
          sx={{
            textAlign: "center",
            paddingBottom: 5,
            paddingTop: 4,
            paddingLeft: "3px",
          }}
        ></Box>
        <List>
          {list.map((res) => (
            <ListItemButton
              id="item"
              key={res.name}
              sx={{ marginBottom: 2 }}
              style={{
                borderLeft: pathname.includes(res.name.toLowerCase())
                  ? "4px solid #0b2be4"
                  : undefined,
              }}
              onClick={() => {
                push("/admin/" + res.name.toLowerCase());
              }}
            >
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  padding: 1,
                }}
              >
                <res.icon
                  style={{
                    paddingRight: 2,
                    fontSize: 30,
                  }}
                />
                <Typography variant="h6">Dashboard</Typography>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Box>
      <Box></Box>
    </StyledSidebar>
  );
}

const list = [
  {
    icon: DashboardOutlinedIcon,
    name: "dashboard",
  },
];
