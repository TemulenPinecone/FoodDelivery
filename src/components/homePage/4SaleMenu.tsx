import { Box, Button, Stack, Typography } from "@mui/material";
import { MenuTitleIcon } from "../icons";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import dummyMenuFood from "@/utils/dummyMenuFood.json";

export const SaleMenu = () => {
  const MenuFood = dummyMenuFood;
  return (
    <Stack>
      {/* TITLE */}
      <Stack flexDirection={`row`} justifyContent={`space-between`}>
        <Stack flexDirection={`row`} alignItems={`center`}>
          <MenuTitleIcon />
          <Typography alignContent={`center`}>Хямдралтай</Typography>
        </Stack>
        <Stack>
          <Button sx={{ color: "#18BA51", textTransform: "none" }}>
            Бүгдийг харах <ArrowForwardIosIcon fontSize="small" />
          </Button>
        </Stack>
      </Stack>

      {/* CARDS */}
      <Stack>
        {MenuFood.map((a) => {
          return (
            <Stack>
              <Stack>
                <img
                  src={a.imagePath}
                  alt=""
                  height={`252px`}
                  width={`282px`}
                />
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};
