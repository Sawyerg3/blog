import { Drawer, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const itemsList = [
    {
      text: "Book Reviews",
      onClick: () => {
        navigate("/reviews");
        setDrawerOpen(false);
      },
    },
    {
      text: "Posts",
      onClick: () => {
        setDrawerOpen(false);
        navigate("/");
      },
    },
    {
      text: "Projects",
      onClick: () => {
        setDrawerOpen(false);
        navigate("/projects");
      },
    },

    {
      text: "Contact",
      onClick: () => {
        navigate("/about");
        setDrawerOpen(false);
      },
    },
  ];

  return (
    <>
      <IconButton
        sx={{ width: 50, height: 65 }}
        fontSize="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => {
          setDrawerOpen(true);
        }}
      >
        <MenuIcon fontSize="large" height="10" />
      </IconButton>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
        }}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {itemsList.map((item, index) => {
              const { text, onClick } = item;
              return (
                <ListItemButton key={index}>
                  <ListItem key={text} disablePadding>
                    <ListItemText primary={text} onClick={onClick} />
                  </ListItem>
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default NavDrawer;
