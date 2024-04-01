import { Box, Stack, Typography, Link } from "@mui/material";
import "@fontsource/poppins";
import {
  FacebookWhite,
  InstagramWhite,
  PineconeWhite,
  TwitterWhite,
} from "../icons";
import { FacebookRounded, Instagram } from "@mui/icons-material";

export const Footer = () => {
  return (
    <Stack
      width={"100%"}
      height={"100%"}
      paddingY={"100px"}
      bgcolor={"#18BA51"}
      alignItems={"center"}
    >
      <Stack alignItems={"center"} marginY={"auto"} flexDirection={"row"}>
        <Stack
          flexDirection={`row`}
          alignItems={`center`}
          color={`white`}
          fontFamily={"Poppins"}
          fontSize={20}
        >
          <PineconeWhite /> Food Delivery
        </Stack>
      </Stack>
      <Stack flexDirection={"row"} gap={4} paddingTop={3}>
        <Link href="#" color="inherit" sx={{ color: "white" }}>
          Нүүр
        </Link>
        <Link href="#" color="inherit" sx={{ color: "white" }}>
          Холбоо барих
        </Link>
        <Link href="#" color="inherit" sx={{ color: "white" }}>
          Хоолны цэс
        </Link>
        <Link href="#" color="inherit" sx={{ color: "white" }}>
          Үйлчилгээний нөхцөл
        </Link>
        <Link href="#" color="inherit" sx={{ color: "white" }}>
          Хүргэлтийн бүс
        </Link>
        <Link href="#" color="inherit" sx={{ color: "white" }}>
          Нууцлалын бодлого
        </Link>
      </Stack>
      <Stack flexDirection={`row`} gap={2} paddingTop={3}>
        <FacebookWhite />
        <InstagramWhite />
        <TwitterWhite />
      </Stack>
      <Stack
        borderBottom={`1px solid white`}
        width={`100%`}
        paddingTop={3}
      ></Stack>
      <Stack
        textAlign={`center`}
        color={`white`}
        fontFamily={"Poppins"}
        paddingTop={3}
      >
        <Typography fontFamily={"Poppins"}>
          © 2024 Pinecone Foods LLC
        </Typography>
        <Typography fontFamily={"Poppins"}>
          Зохиогчийн эрх хуулиар хамгаалагдсан.
        </Typography>
      </Stack>
    </Stack>
  );
};
