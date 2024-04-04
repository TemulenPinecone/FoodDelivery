import { Footer, Header } from "@/components/homePage";
import { LoginComp } from "@/components/login";
import { Stack } from "@mui/material";

export default function Login() {
  return (
    <Stack>
      <Header />
      <LoginComp />
      <Footer />
    </Stack>
  );
}
