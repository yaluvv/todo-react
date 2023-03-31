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

import { validation } from "../../../utils/validation/validation";
import { formVariant } from "./FormVariant";

const Form = ({ handleClick, variant }) => {
  const [error, setError] = React.useState({});
  const [data, setData] = React.useState({ email: "", password: "" });

  React.useEffect(() => {
    validation(data, setError);
  }, [data]);

  const getAuthBtn = () => {
    if (formVariant.LOGIN === variant) {
      return (
        <Link href="/signup" variant="body2">
          Don't have an account yet? Sign up
        </Link>
      );
    } else if (formVariant.SIGNUP === variant) {
      return (
        <Link href="/login" variant="body2">
          Already have an account? Login
        </Link>
      );
    } else {
      return;
    }
  };

  const handleChange = ({ target }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
  };

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
          {variant}
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
            onClick={(e) => handleClick(e, data)}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {variant}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>{getAuthBtn()}</Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Form;
