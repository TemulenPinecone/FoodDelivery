import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Pinecone, Wishlist, SignIn } from "../icons";
import { Search } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Stack } from "@mui/material";

const pages = ["НҮҮР", "ХООЛНЫ ЦЭС", "ХҮРГЭЛТИЙН БҮС"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const Header1 = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <Pinecone />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box>
            <Search>
              <Typography>sdfssdfgs</Typography>
            </Search>
          </Box>

          <Box>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <Wishlist />
                <Typography>Сагс</Typography>
              </Badge>
            </IconButton>
          </Box>
          <Box>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <SignIn />
              <Typography>Нэвтрэх</Typography>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
function styled(arg0: string) {
  throw new Error("Function not implemented.");
}

function alpha(white: any, arg1: number) {
  throw new Error("Function not implemented.");
}
