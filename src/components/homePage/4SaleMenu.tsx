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

export const SaleMenu = () => {
  const MenuFood = dummyMenuFood;
  return (
    <Stack>
      {/* TITLE */}
      <Stack flexDirection={`row`} justifyContent={`space-between`}>
        <Stack flexDirection={`row`} alignItems={`center`}>
          <MenuTitleIcon />
          <Typography alignContent={`center`} variant="h5">
            Хямдралтай
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
                    <Typography variant="h6" color="#272727">
                      {a.sale}
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
