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

const SignUpForm = () => {
  const [error, setError] = React.useState({});
  const register = userStore((state) => state.register);
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

    register(data).then((res) => {
      if (res.code && res.code !== 200) {
        if (res.message === "EMAIL_EXISTS") {
          setError({ email: "Такой e-mail уже есть в базе данных!" });
        }
      } else {
        setError({});
        navigate("/");
      }
    });
  };

  // if (loading) {
  //   return (
  //     <Typography variant="h3" component="h3">
  //       Загрузка...
  //     </Typography>
  //   );
  // }

  return (
    <Container component="main" maxWidth="xs">
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
          Signup form
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
            Signup form
          </Button>
          <Grid container justifyContent="flex-end">
            <Link to="/login">Уже есть аккаунт?</Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpForm;
