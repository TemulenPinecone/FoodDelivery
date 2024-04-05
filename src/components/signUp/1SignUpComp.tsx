import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import React from "react";

export const SignUpComp = () => {
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
      border: "1px solid",
      borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
      fontSize: 16,
      width: "90%",
      padding: "10px 12px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

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
        Бүртгүүлэх
      </Typography>

      <Stack marginTop={5}>
        <Box>
          <FormControl variant="standard" fullWidth>
            <InputLabel
              shrink
              htmlFor="bootstrap-input"
              sx={{ color: `black`, ml: 1 }}
            >
              Нэр
            </InputLabel>
            <BootstrapInput
              placeholder="Нэрээ оруулна уу"
              id="bootstrap-input"
              fullWidth
            />
          </FormControl>
        </Box>

        <Box mt={2}>
          <FormControl variant="standard" fullWidth>
            <InputLabel
              shrink
              htmlFor="bootstrap-input"
              sx={{ color: `black`, ml: 1 }}
            >
              И-мэйл
            </InputLabel>
            <BootstrapInput
              placeholder="И-мэйл хаягаа оруулна уу"
              id="bootstrap-input"
              fullWidth
            />
          </FormControl>
        </Box>

        <Box mt={2}>
          <FormControl variant="standard" fullWidth>
            <InputLabel
              shrink
              htmlFor="bootstrap-input"
              sx={{ color: `black`, ml: 1 }}
            >
              Хаяг
            </InputLabel>
            <BootstrapInput
              placeholder="Хаягаа оруулна уу"
              id="bootstrap-input"
              fullWidth
            />
          </FormControl>
        </Box>

        <FormControl variant="standard" fullWidth>
          <InputLabel
            shrink
            htmlFor="bootstrap-input"
            sx={{ color: `black`, ml: 1 }}
          >
            Нууц үг
          </InputLabel>
          <BootstrapInput
            placeholder="Нууц үгээ оруулна уу"
            id="bootstrap-input"
            fullWidth
            type={showPassword ? `text` : `password`}
          />
          {/* <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment> */}
        </FormControl>

        <Stack pt={`30px`}>
          <FormControl variant="outlined">
            <InputLabel>Нууц үг</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? `text` : `password`}
              placeholder="Нууц үг"
              endAdornment={``}
              label="Password"
            ></OutlinedInput>
          </FormControl>
        </Stack>
      </Stack>
    </Stack>
  );
};
