import { Box, IconButton, Stack, Typography } from "@mui/material";
import {
  StatusCard1Book,
  StatusCard2Time,
  StatusCard3Food,
  StatusCard4Book,
} from "../icons";
import statusCardsData from "@/utils/statusCardsData.json";

const CardsData = statusCardsData;

export const StatusCards = () => {
  return (
    <Stack flexDirection={"row"}>
      {CardsData.cards.map((a) => {
        return (
          <IconButton>
            <Box
              borderRadius={4}
              width={"100%"}
              boxShadow={3}
              padding={1}
              paddingBottom={1}
              paddingTop={3}
            >
              <Stack paddingBottom={2} paddingLeft={2} alignItems={"start"}>
                {a.id == 1 ? <StatusCard1Book /> : null}
                {a.id == 2 ? <StatusCard2Time /> : null}
                {a.id == 3 ? <StatusCard3Food /> : null}
                {a.id == 4 ? <StatusCard4Book /> : null}
              </Stack>
              <Stack alignItems={"start"}>
                <Typography fontSize={18} fontWeight={700} color={"black"}>
                  {a.text1}
                </Typography>
              </Stack>
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
