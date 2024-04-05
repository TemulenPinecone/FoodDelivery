import { Footer, Header } from "@/components/homePage";
import { SignUpComp } from "@/components/signUp";
import { Stack } from "@mui/material";

export default function SignUp() {
  return (
    <Stack>
      <Header />
      <SignUpComp />
      <Footer />
    </Stack>
  );
}
