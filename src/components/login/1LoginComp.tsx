import { Stack, TextField, Typography } from "@mui/material";

export const LoginComp = () => {
  return (
    <Stack>
      <Typography>Нэвтрэх</Typography>
      <TextField
        label="Имэйл"
        // defaultValue="Имэйл хаягаа оруулна уу"
        placeholder="Имэйл хаягаа оруулна уу"
        id="filled-size-normal"
      ></TextField>
    </Stack>
  );
};
