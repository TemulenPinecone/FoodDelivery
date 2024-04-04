import { BorderColor, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Link,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
  Button,
} from "@mui/material";

import React from "react";

export const LoginComp = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Stack width={`40%`} mx={`auto`} py={`150px`}>
      <Typography textAlign={`center`} variant="h5" fontWeight={`bold`}>
        Нэвтрэх
      </Typography>

      <Stack pt={`30px`}>
        <TextField
          label="Имэйл"
          placeholder="Имэйл хаягаа оруулна уу"
          id="filled-size-normal"
        >
          <InputLabel htmlFor="input-with-icon-adornment">Имэйл</InputLabel>
        </TextField>
      </Stack>

      <Stack pt={`30px`}>
        <FormControl variant="outlined">
          <InputLabel>Нууц үг</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? `text` : `password`}
            placeholder="Нууц үг"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          ></OutlinedInput>
        </FormControl>
      </Stack>

      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          typography: "body1",
        }}
      >
        <Link href="#" underline="none">
          Нууц үг сэргээх
        </Link>
      </Box>

      <Stack pt={`50px`}>
        <Button variant="outlined" disabled>
          Нэвтрэх
        </Button>
      </Stack>

      <Stack
        py={`30px`}
        sx={{
          textAlign: `center`,
          fontFamily: `Segoe UI`,
          fontWeight: `light`,
          m: 1,
        }}
      >
        Эсвэл
      </Stack>

      <Button
        variant="outlined"
        sx={{
          borderColor: `#18BA51`,
          color: `#18BA51`,
          ":hover": {
            borderColor: `#18BA51`,
            color: `white`,
            backgroundColor: `#18BA51`,
          },
        }}
      >
        Бүртгүүлэх
      </Button>
    </Stack>
  );
};
