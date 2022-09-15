import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomeBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default CustomeBox;
