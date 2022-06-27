import styled from "@emotion/styled";

export const DashboardStyled = styled.div`
  padding-left: 228px;
  padding-top: 58px;
  #loading {
    margin-top: 5px;
  }

  .gridItem {
    margin-top: 10px;
  }
  @media (max-width: 900px) {
    #table {
      padding: 8px;
    }
    padding: 0px;
    padding-top: 50px;
  }
`;

export const StyledAddModal = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
