import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";
import Box from "@mui/system/Box";

export const StyledSidebar = styled(Paper)`
    height: 100vh;
    width: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 900px) {
        display: none;
    }
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    overflow-x: hidden;
`
export const MobileDrawerStyled = styled.div`
  display: flex;
  @media (min-width: 900px) {
    display: none;
  }
`;
export const TopNavbarStyled = styled(Box)`
  flex-grow: 1;
  width: 100%;
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 55; /* Stay on top */
  top: 0; /* Stay at the top */
  overflow-x: hidden;
`;