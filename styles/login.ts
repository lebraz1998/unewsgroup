import styled from "@emotion/styled";

const LoginStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100wv;
  height: auto;
  margin-top: 15vh;
  #card {
    @media (max-width: 500px) {
      width: 80%;
      height: 250px;
    }
    width: 450px;
    height: 350px;
  }
`;
export default LoginStyled;
