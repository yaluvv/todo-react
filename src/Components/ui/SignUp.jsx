import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { validation } from "../../utils/validation/validation";

const SignUp = () => {
  const [error, setError] = React.useState({});
  const [data, setData] = React.useState({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!Object.keys(error).length) {
      console.log(data);
    }
  };

  React.useEffect(() => {
    validation(data, setError);
  }, [data]);

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
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                onChange={(e) => setData({ ...data, email: e.target.value })}
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
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
