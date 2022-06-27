import Grid from '@mui/material/Grid'
import Box from '@mui/system/Box'
import React from 'react'
import SideNavBar from '../navbar/Sidebar.navbar'
import Navbar from '../navbar/Top.navbar'
interface Props {
    children: JSX.Element[] | JSX.Element;
}
function AdminLayout({ children }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Box>
        <SideNavBar />
        <Navbar />
      </Box>

      <Grid container style={{ display: "block" }}>
        <Grid item xs={12} key="main">
          <div>{children}</div>
        </Grid>
      </Grid>
    </div>
  )
}

export default AdminLayout