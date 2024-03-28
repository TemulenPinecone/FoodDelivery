import { Box, Stack, Typography } from "@mui/material";
import "@fontsource/poppins";

export const Highlight = () => {
  return (
    <Stack
      width={"100%"}
      height={"100%"}
      paddingY={"100px"}
      bgcolor={"#18BA51"}
      alignItems={"center"}
    >
      <Stack alignItems={"center"} marginY={"auto"} flexDirection={"row"}>
        <Box
          color={"white"}
          fontFamily={"Poppins"}
          width={"50%"}
          fontSize={"55"}
        >
          <h2>
            Pinecone <br />
            Food Delivery
          </h2>
          <Box bgcolor={"white"} border={"white solid"}></Box>
          <Typography fontWeight={100}>
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Box>
        <Box>
          <Box>
            <img src="./highlightFood1.svg" width={"50%"} height={"50%"} />
          </Box>
          <Box position={"absolute"} top={"250px"} right={"50px"}>
            <img src="./highlightFood2.svg" width={"50%"} height={"50%"} />
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
