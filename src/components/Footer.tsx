import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "#f0f0f0",
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} My Portfolio
      </Typography>
      <Typography variant="body2">Built with Next.js and MUI</Typography>
    </Box>
  );
};

export default Footer;
