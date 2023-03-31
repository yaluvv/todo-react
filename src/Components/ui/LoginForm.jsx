import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { validation } from "../../utils/validation/validation";
import { userStore } from "../../store/users-store";

const LoginForm = () => {
  const [error, setError] = React.useState({});
  const login = userStore((state) => state.login);
  const authError = userStore((state) => state.authError);
  const [data, setData] = React.useState({ email: "", password: "" });
  const navigate = useNavigate();

  React.useEffect(() => {
    setError({});
    validation(data).then((data) => {
      if (data) {
        setError(data);
      } else {
        setError({});
      }
    });
  }, [data]);

  const handleChange = ({ target }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(error).length > 0) {
      return;
    }

    login(data).then((res) => {
      if (res.code && res.code !== 200) {
        if (res.message === "EMAIL_NOT_FOUND") {
          setError({ email: "Такой почты нет в базе данных!" });
        }
        if (res.message === "INVALID_PASSWORD") {
          setError({ email: "Неправильный логин или пароль!" });
        }
        if (res.message === "TOO_MANY_ATTEMPTS_TRY_LATER") {
          setError({
            email: "Вы превысили максимум попыток входа! Попробуйте позже.",
          });
        }
      } else {
        setError({});
        navigate("/");
      }
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography>
        {authError?.message === "EMAIL_NOT_FOUND" ||
        authError?.message === "INVALID_PASSWORD"
          ? "Пользователя с таким логином и паролем нет в базе данных!"
          : ""}
      </Typography>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login form
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                value={data.email}
                id="email"
                label="Email Address"
                error={!!error?.email}
                helperText={error?.email}
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                value={data.password}
                name="password"
                label="Password"
                error={!!error?.password}
                helperText={error?.password}
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login form
          </Button>
          <Grid container justifyContent="flex-end">
            <Link to="/signup"> Еще нет аккаунта? Зарегистрируйся</Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
