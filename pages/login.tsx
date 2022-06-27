import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import LoginStyled from "../styles/login";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import { setCookies } from "cookies-next";
import { useRouter } from "next/router";

export default function LoginScreen() {
  const { replace } = useRouter();
  return (
    <LoginStyled>
      <Card
        variant="outlined"
        id="card"
        style={{
          padding: 10,
          alignItems: "start",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" style={{ width: "100%", marginBottom: 15 }}>
          Login
        </Typography>
        <Box
          onSubmit={(e: any) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const login = {
              username: data.get("username"),
              password: data.get("password"),
            };

            axios.post("/api/login", login).then((res) => {
              if (res.status === 200) {
                setCookies("token", res.data);
                setTimeout(() => {
                  replace("/admin/dashboard");
                }, 500);
              }
            });
          }}
          component={"form"}
          display={"flex"}
          style={{ rowGap: 20, width: "100%" }}
          flexDirection="column"
        >
          <TextField size="small" label="Username" name="username" fullWidth />
          <TextField
            type={"password"}
            size="small"
            label="Password"
            name="password"
            fullWidth
          />
          <Button type="submit" variant="contained" disableElevation fullWidth>
            Login
          </Button>
        </Box>
      </Card>
    </LoginStyled>
  );
}
