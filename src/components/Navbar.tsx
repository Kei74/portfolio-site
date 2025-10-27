import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Link href="/" passHref>
          <Button color="inherit" sx={{ textDecoration: "none", color: "white" }} >Home</Button>
        </Link>
        <Link href="/about" passHref>
          <Button color="inherit" sx={{ textDecoration: "none", color: "white" }} >About</Button>
        </Link>
        <Link href="/projects" passHref>
          <Button color="inherit" sx={{ textDecoration: "none", color: "white" }} >Projects</Button>
        </Link>
        <Link href="/contact" passHref>
          <Button color="inherit" sx={{ textDecoration: "none", color: "white" }} >Contact</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
