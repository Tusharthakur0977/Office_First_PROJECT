import React, { useState, useEffect } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Tab,
  Tabs,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import useStylesPayment from "../../../../../styles/PaymentBlockStyle";

function PaymentBlock() {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [values, setValues] = useState({
    card: " ",
    date: " ",
    cvv: " ",
    nameofcard: " ",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
    const result = e.target.value.replace(/\D/g, "cvv");
    setValue(result);
  };

  const handlevalidation = () => {
    const { card, date, cvv, nameofcard } = values;
    if (card.length < 3) {
      toast.error("Please write the correct number ", toastOptions);
      return false;
    } else if (date === " ") {
      toast.error("Please enter expairy date", toastOptions);
      return false;
    } else if (cvv.length < 3) {
      toast.info(" CVV is not correct", toastOptions);
      return false;
    } else if (nameofcard === " ") {
      toast.error("Enter Card handler Name", toastOptions);
      return false;
    }
    return true;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    toast.error("Please write the correct number ", toastOptions);
    if (handlevalidation()) {
    }
  };

  const classes = useStylesPayment();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChanges = (event, newValue) => {
    setValue(newValue);
  };
  const CustomTab = withStyles((theme) => ({
    selected: {
      backgroundColor: theme.palette.mode === "dark" ? "#6C75F8" : "#1976d2",
      color: "white",
    },
  }))(Tab);

  useEffect(() => {}, []);
  return (
    <Box className={classes.mainContainer}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Box className={classes.Comp1}>
          <Typography className={classes.Comp1a}>Current Balance</Typography>
          <Typography className={classes.Comp1b}>$40.56</Typography>
        </Box>
        <Box className={classes.Comp2}>
          <Typography className={classes.Comp2a}>Choose Amount</Typography>
          <Typography className={classes.Comp2b}>
            Top-up Your Account Balance
          </Typography>
        </Box>
        <Box className={classes.Comp3}>
          <Box className={classes.Comp3a}>
            <Tabs
              value={value}
              textColor="inherit"
              onChange={handleChanges}
              variant="scrollable"
              orientation="vertical"
              aria-label="Vertical tabs example"
              indicatorColor="secondary"
              sx={{
                flex: 1,
              }}
            >
              <CustomTab
                sx={{
                  margin: "5px",
                  padding: "0",
                  minHeight: "25px",
                  minWidth: "25px",
                }}
                label="10"
              />
              <CustomTab
                sx={{
                  margin: "5px",
                  padding: "0",
                  minHeight: "25px",
                  minWidth: "25px",
                }}
                label="20"
              />
              <CustomTab
                sx={{
                  margin: "5px",
                  padding: "0",
                  minHeight: "25px",
                  minWidth: "25px",
                }}
                label="45"
              />
              <CustomTab
                sx={{
                  margin: "5px",
                  padding: "0",
                  minHeight: "25px",
                  minWidth: "25px",
                }}
                label="75"
              />
              <CustomTab
                sx={{
                  margin: "5px",
                  padding: "0",
                  minHeight: "25px",
                  minWidth: "25px",
                }}
                label="100"
              />
              <CustomTab
                sx={{
                  margin: "5px",
                  padding: "0",
                  minHeight: "25px",
                  minWidth: "25px",
                }}
                label="200"
              />
            </Tabs>
          </Box>
          <Box className={classes.Comp3b}>
            <Box className={classes.Comp3b1}>
              <Typography variant="caption">Saved card</Typography>
              <Button
                variant="contained"
                size="small"
                className={classes.Comp3b1btn}
              >
                <Typography variant="caption">Visa **** 4242</Typography>
                <Typography variant="caption">Pay using this Card</Typography>
              </Button>
            </Box>
            <Box className={classes.Comp3b2}>
              <Box>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                />
                <TextField
                  fullWidth
                  size="small"
                  label="Card Number"
                  variant="outlined"
                  id="card"
                  onChange={(e) => handleChange(e)}
                  InputLabelProps={{
                    style: {
                      fontSize: 12,
                      transformOrigin: "center",
                      lineHeight: 1,
                    },
                  }}
                  inputProps={{
                    style: {
                      height: "30px",
                      background:
                        theme.palette.mode === "dark" ? "#353648" : "",
                      textAlign: "center",
                      fontSize: "12px",
                      padding: "0 15px",
                    },
                  }}
                />
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "center", gap: "10px" }}
              >
                <TextField
                  fullWidth
                  size="small"
                  id="date"
                  onChange={(e) => handleChange(e)}
                  label="MM/YYYY"
                  variant="outlined"
                  InputLabelProps={{
                    style: {
                      fontSize: 12,
                      transformOrigin: "center",
                      lineHeight: 1,
                    },
                  }}
                  inputProps={{
                    style: {
                      height: "30px",
                      background:
                        theme.palette.mode === "dark" ? "#353648" : "",
                      textAlign: "center",
                      fontSize: "12px",
                      padding: "0 15px",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  size="small"
                  id="cvv"
                  onChange={(e) => handleChange(e)}
                  label="CVC"
                  variant="outlined"
                  InputLabelProps={{
                    style: {
                      fontSize: 12,
                      transformOrigin: "center",
                      lineHeight: 1,
                    },
                  }}
                  inputProps={{
                    style: {
                      height: "30px",
                      background:
                        theme.palette.mode === "dark" ? "#353648" : "",

                      textAlign: "center",
                      fontSize: "12px",
                      padding: "0 15px",
                    },
                  }}
                />
              </Box>
              <Box>
                <TextField
                  fullWidth
                  size="small"
                  id="nameofcard"
                  onChange={(e) => handleChange(e)}
                  label="Name On Card"
                  variant="outlined"
                  InputLabelProps={{
                    style: {
                      fontSize: 12,
                      margin: "0 auto",
                      textAlign: "center",
                    },
                  }}
                  inputProps={{
                    style: {
                      height: "30px",
                      background:
                        theme.palette.mode === "dark" ? "#353648" : "",
                      textAlign: "center",
                      fontSize: "12px",
                      padding: "0 15px",
                    },
                  }}
                />
              </Box>
            </Box>
            <Box className={classes.Comp3b3}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size="small" defaultChecked />}
                  label="Save card for future payments"
                />
              </FormGroup>
            </Box>
            <Box className={classes.Comp3b4}>
              <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <Typography variant="caption">New balance</Typography>
                <Typography variant="caption">$213.31</Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="caption">Amount</Typography>
                <Typography variant="caption">$45</Typography>
              </Box>
              <Box
                sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  size="small"
                  sx={{ height: "30px", width: "30px", fontSize: "12px" }}
                >
                  Pay
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </form>
    </Box>
  );
}

export default PaymentBlock;
