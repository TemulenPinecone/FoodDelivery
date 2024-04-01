import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { MenuTitleIcon } from "../icons";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import dummyMenuFood from "@/utils/dummyMenuFood.json";

export const Dessert = () => {
  const MenuFood = dummyMenuFood;
  return (
    <Stack paddingY={5}>
      {/* TITLE */}
      <Stack
        flexDirection={`row`}
        justifyContent={`space-between`}
        paddingBottom={3}
      >
        <Stack flexDirection={`row`} alignItems={`center`}>
          <MenuTitleIcon />
          <Typography alignContent={`center`} variant="h5">
            Амттан
          </Typography>
        </Stack>
        <Stack>
          <Button sx={{ color: "#18BA51", textTransform: "none" }}>
            Бүгдийг харах <ArrowForwardIosIcon fontSize="small" />
          </Button>
        </Stack>
      </Stack>

      {/* CARDS */}
      <Stack flexDirection={`row`} gap={4} justifyContent={`center`}>
        {MenuFood.map((a) => {
          return (
            <Card sx={{ width: 345 }}>
              <CardActionArea>
                <CardMedia component="img" height="200" image={a.imagePath} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    fontWeight={"bold"}
                    component="div"
                  >
                    {a.foodName}
                  </Typography>
                  <Stack flexDirection={`row`} gap={2}>
                    <Typography variant="h6" color="#18BA51">
                      {a.price}
                    </Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Stack>
    </Stack>
  );
};
