import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Book } from "../icons";
import statusCardsData from "@/utils/statusCardsData.json";

const CardsData = statusCardsData;

export const StatusCards = () => {
  return (
    <Stack flexDirection={"row"}>
      {CardsData.cards.map((a) => {
        return (
          <IconButton>
            <Box border={1} borderRadius={4} width={"100%"}>
              <Box>
                <Book />
              </Box>
              <Box>
                <Typography fontSize={18} fontWeight={700}>
                  {a.text1}
                </Typography>
              </Box>
              <Box>
                <Typography fontSize={14} fontWeight={400}>
                  {a.text2}
                </Typography>
              </Box>
            </Box>
          </IconButton>
        );
      })}
    </Stack>
  );
};
