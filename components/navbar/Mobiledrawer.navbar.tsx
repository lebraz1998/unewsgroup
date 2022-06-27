import React, { useCallback, useState } from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";

import CloseSharp from "@mui/icons-material/CloseSharp";
import MenuSharp from "@mui/icons-material/MenuSharp";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useRouter } from "next/router";
import { css } from "@emotion/css";
import { MobileDrawerStyled } from "../../styles/navbar";

const MobileDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { push, pathname } = useRouter();
  const handleDrawerOpen = useCallback(() => {
    setDrawerOpen(!drawerOpen);
  }, [drawerOpen]);

  return (
    <MobileDrawerStyled>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <div
          style={{
            display: "flex",
            padding: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" fontWeight={500}>
            Unewsgroup
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseSharp />
          </IconButton>
        </div>
        <Divider style={{ marginBottom: 5 }} />
        <List
          className={css`
            width: 250px;
            @media (max-width: 400px) {
            }
          `}
          style={{ margin: 8 }}
        >
          {list.map((res) => (
            <ListItem
              button
              style={{
                backgroundColor: pathname.includes(res.name.toLowerCase())
                  ? "#eee"
                  : undefined,
                borderRadius: 8,
              }}
              key={res.name}
              onClick={() => {
                push("/admin/" + res.name.toLowerCase());
                setDrawerOpen(false);
              }}
            >
              <ListItemIcon>
                <res.icon fontSize="medium" />
              </ListItemIcon>
              <Typography style={{ fontSize: 18, margin: 2, fontWeight: 500 }}>
                {res.name}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginRight: 1 }}
        aria-label="menu-button"
        onClick={handleDrawerOpen}
      >
        <MenuSharp />
      </IconButton>
    </MobileDrawerStyled>
  );
};

export default MobileDrawer;
const list = [
  {
    icon: DashboardOutlinedIcon,
    name: "dashboard",
  },
  {
    icon: SettingsOutlinedIcon,
    name: "Setting",
    top: true,
  },
];
