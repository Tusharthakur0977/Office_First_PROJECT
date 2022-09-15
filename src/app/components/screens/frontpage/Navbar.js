import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ImageListItem from "@mui/material/ImageListItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useNavbarStyles from "../../../../styles/NavbarStyles";
import { Link } from "react-scroll";

export default function Navbar() {
  const classes = useNavbarStyles();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);
  const handelRegister = () => {
    navigate("/register");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <Box sx={{ marginBottom: 7, borderRadius: 20 }}>
      <AppBar position="fixed" sx={{ background: "rgba(0,0,0,.9)" }}>
        <Container maxWidth="xl" className={classes.header}>
          <Toolbar disableGutters>
            <ImageListItem sx={{ mr: 3, display: { xs: "none", md: "flex" } }}>
              <img
                style={{ cursor: "pointer" }}
                src={"../assets/images/logo_white.png"}
                alt="WYZALGO"
              />
            </ImageListItem>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                className={classes.iconContainer}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon className={classes.icon} />
              </IconButton>
              {/* <MenuIcon onClick={handleOpenNavMenu} /> */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Button>
                    <Link
                      to="hero"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      Home
                    </Link>
                  </Button>
                  <Button>
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      About
                    </Link>
                  </Button>
                  <Button>
                    {" "}
                    <Link
                      to="testimonials"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      How It Woeks
                    </Link>
                  </Button>
                  <Button>
                    <Link
                      to="testimonials"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      Contact us
                    </Link>
                  </Button>
                  <Button
                    sx={{ my: 2, display: "block" }}
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
                  <Button
                    sx={{ my: 2, display: "block" }}
                    onClick={handelRegister}
                  >
                    Register
                  </Button>
                </Box>
                {/* </MenuItem> */}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Home
                </Link>
              </Button>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  How It Works
                </Link>
              </Button>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                <Link
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Market Place
                </Link>
              </Button>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Contact Us
                </Link>
              </Button>
            </Box>
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={handelRegister}
            >
              Register
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
