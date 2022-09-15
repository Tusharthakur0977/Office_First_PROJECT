import { useEffect, useState } from "react";
import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import {
  Box,
  Button,
  Divider,
  MenuItem,
  Select,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import {
  actionCheckTrade,
  actionExpirationData,
  actionStrikeLimit,
} from "../../../../redux/EnterNewTrade";
import { readData, USER } from "../../../../utils/storage";
import { Autocomplete } from "@mui/material";
import { actionPlaceOrderOption } from "../../../../redux/PositionOrderAction";
import ConfirmationDialog from "../../../appcomp/dialogs/ConfirmationDialog";
import OkayAlert from "../../../appcomp/dialogs/OkayAlert";
import axios from "axios";
import useStylesHome from "../../../../../styles/HomeStyle";
import { withStyles } from "@mui/styles";
export default function EnternewTrade() {
  const classes = useStylesHome();
  const theme = useTheme();
  const [limit, setLimit] = useState("Strike Price");
  const [expDate, setExpDate] = useState("Expiry Date");
  const [time, setTime] = useState("GTC");
  const [direction, setDirection] = useState("CALL");
  const [type, setType] = useState("BUY");
  const [validError, setValidError] = useState(null);
  const [types, setTypes] = useState("Day");
  const [checkActiveButton, setCheckActiveButton] = useState({
    Day: false,
    put: false,
  });
  const [activeButton, setActiveButton] = useState({
    call: false,
    put: false,
  });
  const [isBuy, setIsbuy] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  // const [loading3, setLoading3] = useState(false);
  const [expirationDates, setExpirationDates] = useState([]);
  const [limitList, setLimitList] = useState([]);

  const [stockName, setStockName] = useState(null);
  const [price, setPrice] = useState(null);
  const [size, setSize] = useState(null);
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);

  //confirmation details
  const [openState, setOpenState] = useState(false);
  const [dialogTitle, setDialogTitle] = useState(false);
  const [dialogDescription, setDialogDescription] = useState(false);
  const [dialogType, setDialogType] = useState(-1);
  //end

  useEffect(() => {
    readData(USER, (data) => {
      setLoggedInUser(JSON.parse(data));
    });
  }, []);

  useEffect(() => {
    if (stockName) {
      actionExpirationData(stockName, loggedInUser.access_token, (response) => {
        if (response) {
          if (response?.data) {
            setExpirationDates(response.data);
          }
        }
      });
    } else {
    }
  }, [stockName]);

  useEffect(() => {
    if (stockName && expDate !== "Expiring Date") {
      let params = {
        stock: stockName,
        expiration: expDate,
        direction: direction.toLowerCase(),
      };
      actionStrikeLimit(params, loggedInUser.access_token, (response) => {
        if (response) {
          if (response?.data) {
            setLimitList(response.data);
          }
        }
      });
    } else {
    }
  }, [stockName, expDate]);

  // const handleType = (event, newAlignment) => {
  //   setType(newAlignment);
  // };
  // const handleDirection = (event, newAlignment) => {
  //   setDirection(newAlignment);
  // };

  const checkTrade = (trade) => {
    const options = {
      method: "GET",
      url: "https://yh-finance.p.rapidapi.com/auto-complete",
      params: { q: trade, region: "US" },
      headers: {
        "x-rapidapi-host": "yh-finance.p.rapidapi.com",
        "x-rapidapi-key": "3e7b81d74dmsh2309a1833b8c88ap1669c6jsn2a8beb62ea2a",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        let tempArray = [];
        response.data.quotes.map((item) => tempArray.push(item.symbol));
        setAutocompleteOptions(tempArray);
      })
      .catch(function (error) {
        console.error(error);
      });

    setStockName(null);
    setValidError(null);
    setExpirationDates([]);
    setExpDate("Expiring Date");
    setLimitList([]);
    setLimit("Strike Limit");
    if (trade.trim().length === 0) {
      setValidError(null);
    } else {
      setLoading1(true);
      actionCheckTrade(trade, loggedInUser.access_token, (response) => {
        setLoading1(false);
        if (response) {
          if (response.is_optionable === true) {
            setStockName(trade);
            setValidError(null);
          } else {
            setValidError("Invalid entry");
          }
        }
      });
    }
  };

  // function renderExpirationDate() {
  //   let array = [];
  //   expirationDates.map((item, index) => {
  //     array.push(<MenuItem value={item.date}>{item.date}</MenuItem>);
  //   });
  //   if (array.length > 0) {
  //     return array;
  //   }
  // }

  function renderLimits() {
    let array = [];
    limitList.map((item, index) => {
      array.push(
        <MenuItem value={item.strikePrice}>{item.strikePrice}</MenuItem>
      );
    });

    if (array.length > 0) {
      return array;
    }
  }

  function setEnableTextBoxes() {
    if (
      stockName !== null &&
      expDate !== "Expiring Date" &&
      limit !== "Strike Limit"
    ) {
      return false;
    } else {
      return true;
    }
  }

  function placeOrder() {
    setLoading2(true);
    let params = {
      stock: stockName,
      type: type.toLowerCase(),
      strike: limit,
      direction: type,
      expiry: expDate,
      price: price,
      quantity: size,
      tif: time,
    };
    actionPlaceOrderOption(
      loggedInUser.access_token,
      params,
      (response, error) => {
        setLoading2(false);
        if (response) {
          if (response.status === 1) {
            setDialogTitle("Order Confirmed?");
            setDialogDescription(
              "Your order has been confirmed, Please continue."
            );
            setDialogType(2);
            setOpenState(true);
          }
          return;
        }
        setDialogTitle("Someting went wrong?");
        setDialogDescription("Unable to process your request.");
        setDialogType(2);
        setOpenState(true);
      }
    );
  }

  // function renderLoading() {
  //   return <LinearProgress />;
  // }

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const CustomTab = withStyles((theme) => ({
    selected: {
      backgroundColor: theme.palette.mode === "dark" ? "#6C75F8" : "#1976d2",
      color: "white",
    },
  }))(Tab);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-evenly", mb: "5px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          aria-label="Vertical tabs example"
          sx={{ minHeight: "30px" }}
        >
          <CustomTab
            label="Options"
            value={0}
            sx={{ fontSize: "10px", minHeight: "30px", minWidth: 20 }}
          />
          <CustomTab
            value={1}
            label="Stocks"
            sx={{ fontSize: "10px", minWidth: 20, minHeight: "30px" }}
          />
          <CustomTab
            value={2}
            label="Crypto"
            sx={{ fontSize: "10px", minWidth: 20, minHeight: "30px" }}
          />
        </Tabs>
      </Box>
      {value === 0 ? (
        <Box>
          <Box className={classes.toggleBtnContainer}>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Typography
                sx={{ cursor: "pointer", fontSize: "12px" }}
                disabled={setEnableTextBoxes()}
                onClick={() => setType("BUY")}
                className={
                  type === "BUY" ? classes.callBtnActive : classes.call
                }
              >
                BUY
              </Typography>
              <Typography
                sx={{ cursor: "pointer", fontSize: "12px" }}
                disabled={setEnableTextBoxes()}
                onClick={() => setType("SELL")}
                className={type === "SELL" ? classes.putBtnActive : classes.put}
              >
                SELL
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Typography
                variant="text"
                sx={{
                  cursor: "pointer",
                  color: "#7c7d83",
                  fontSize: "12px",
                }}
                onClick={() => {
                  setDirection("CALL");
                  setActiveButton({
                    ...activeButton,
                    call: !activeButton.call,
                    put: false,
                  });
                }}
                className={
                  !activeButton.call ? classes.callBtn : classes.callBtnActive
                }
              >
                CALL
              </Typography>
              <Typography
                variant="text"
                sx={{
                  cursor: "pointer",
                  color: "#7c7d83",
                  fontSize: "12px",
                }}
                onClick={() => {
                  setDirection("PUT");
                  setActiveButton({
                    ...activeButton,
                    put: !activeButton.put,
                    call: false,
                  });
                }}
                className={
                  !activeButton.put ? classes.putBtn : classes.putBtnActive
                }
              >
                PUT
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "5px",
            }}
          >
            {/* <TextField
          onChange={(e) => {
            checkTrade(e.target.value);
          }}
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Stock Name"
          variant="outlined"
          error={validError !== null ? true : false}
          helperText={validError !== null ? "Incorrect entry." : ""}
        /> */}
            <Autocomplete
              disablePortal
              size="small"
              sx={{
                "& .MuiFormLabel-root": {
                  fontSize: "12px",
                },
                "& .MuiInputBase-input": {
                  height: ".8rem",
                  fontSize: "12px",
                },
                "& .MuiOutlinedInput-root": {},
                "& .MuiInputLabel-shrink": {
                  textAlign: "center",
                  padding: "3px 11px 0 11px",
                },
              }}
              onInputChange={(event, newInputValue) => {
                checkTrade(newInputValue);
              }}
              options={autocompleteOptions}
              renderInput={(params) => (
                <TextField {...params} label="Stock Name" />
              )}
            />
            {/* {loading1 == true ? renderLoading() : null} */}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              margin: " 5px",
            }}
          >
            <FormControl sx={{ flex: 1, marginRight: "10px" }}>
              {/* <Select
            disabled={stockName === null ? true : false}
            value={expDate}
            size="small"
            style={{ height: 30, fontSize: "12px", background: "transparent" }}
            onChange={(e) => {
              setExpDate(e.target.value);
              setLimitList([]);
              setLimit("Strike Limit");
            }}
            displayEmpty
          >
            <MenuItem
              sx={{
                fontSize: "12px",
                padding: "2px 15px",
              }}
              value={expDate}
            >
              <em>{expDate}</em>
            </MenuItem>
            {renderExpirationDate()}
          </Select> */}
              <input
                style={{
                  fontSize: "12px",
                  height: "30px",
                  background: "transparent",
                  border: "1px solid #59586B",
                  color: "#c1c1c1",
                  padding: "0 5px",
                }}
                onChange={(e) => {
                  setExpDate(e.target.value);
                  setLimitList([]);
                  setLimit("Strike Limit");
                }}
                type="date"
              />
            </FormControl>

            <FormControl sx={{ flex: 1 }}>
              {/* <Select
            disabled={expDate === "Expiring Date" ? true : false}
            size="small"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            displayEmpty
            style={{ height: 30, fontSize: "12px", background: "transparent" }}
          >
            <MenuItem
              sx={{
                fontSize: "12px",
                padding: "2px 15px",
              }}
              value={limit}
            >
              <em>{limit}</em>
            </MenuItem>
            {renderLimits()}
          </Select> */}

              <TextField
                size="small"
                id="outlined-basic"
                label="Strike Price"
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
                    fontSize: 12,
                    height: 30,
                    padding: "0 10px",
                  },
                }}
              />
            </FormControl>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              margin: "5px",
            }}
          >
            <FormControl sx={{ marginRight: "10px" }}>
              <TextField
                disabled={setEnableTextBoxes()}
                id="outlined-number"
                label="Limit Price"
                size="small"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
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
                    fontSize: 12,
                    height: 30,
                    padding: "0 10px",
                  },
                }}
              />
            </FormControl>
            <FormControl sx={{}}>
              <TextField
                disabled={setEnableTextBoxes()}
                id="outlined-number"
                label="Size (x100)"
                size="small"
                onChange={(e) => {
                  setSize(e.target.value);
                }}
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
                    fontSize: 12,
                    height: 30,
                    padding: "0 10px",
                  },
                }}
              />
            </FormControl>
          </Box>

          <Box
            sx={{
              display: "flex",
              margin: "5px",
              gap: "10px",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                padding: "5px 0",
              }}
            >
              <Typography
                sx={{ textAlign: "center", fontWeight: "500" }}
                variant="caption"
              >
                Order Type
              </Typography>
              <FormControl>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    padding: "5px 10px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Typography
                    variant="text"
                    sx={{
                      cursor: "pointer",
                      color: "#7c7d83",
                      fontSize: "12px",
                    }}
                    onClick={() => {
                      setDirection("CALL");
                      setCheckActiveButton({
                        ...checkActiveButton,
                        call: !checkActiveButton.call,
                        put: false,
                      });
                    }}
                    className={
                      !checkActiveButton.call
                        ? classes.callBtn
                        : classes.callBtnActive
                    }
                  >
                    Day
                  </Typography>
                  <Typography
                    variant="text"
                    sx={{
                      cursor: "pointer",
                      color: "#7c7d83",
                      fontSize: "12px",
                    }}
                    onClick={() => {
                      setDirection("PUT");
                      setCheckActiveButton({
                        ...checkActiveButton,
                        put: !checkActiveButton.put,
                        call: false,
                      });
                    }}
                    className={
                      !checkActiveButton.put
                        ? classes.putBtn
                        : classes.putBtnActive
                    }
                  >
                    GTC
                  </Typography>
                </Box>
              </FormControl>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                padding: "5px 0",
              }}
            >
              <Typography fontWeight="500" textAlign="center" variant="caption">
                Total
              </Typography>
              <input
                style={{
                  padding: "3px 5px",
                  textAlign: "center",
                  fontSize: 12,
                  width: "50px",
                  background: "transparent",
                  border: "1px solid #59586B",
                  outline: "none",
                  color: theme.palette.mode === "dark" ? "#c1c1c1" : "black",
                }}
              />
            </Box>
          </Box>
          {/* <ToggleButtonGroup
        disabled={setEnableTextBoxes()}
        sx={{ alignSelf: "center" }}
        color="primary"
        value={type}
        exclusive
        onChange={handleType}
      >
        <ToggleButton sx={{ width: "150px", height: "30px" }} value="SELL">
          SELL
        </ToggleButton>
        <ToggleButton sx={{ width: "150px", height: "30px" }} value="BUY">
          BUY
        </ToggleButton>
      </ToggleButtonGroup> */}
          {price * size !== 0 && (
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              ml={5}
              mr={5}
            >
              <Typography style={{ fontSize: 18, fontWeight: "bold" }}>
                Totasadsl :
              </Typography>
              <Typography style={{ fontSize: 18, fontWeight: "500" }}>
                ${price * size}
              </Typography>
            </Box>
          )}
          <Button
            onClick={() => {
              setOpenState(true);
              setDialogType(1);
              setDialogTitle("Copy Order?");
              setDialogDescription("Are you sure you want to copy this order");
            }}
            className={classes.quickTradebtn}
            type="submit"
            fullWidth
            size="small"
            variant="contained"
          >
            Place Limit Order
          </Button>
        </Box>
      ) : value === 1 ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              textAlign="center"
              sx={{
                flex: 1,
                fontSize: "14px",
                backgroundColor: isBuy ? "#04cfa2" : "transparent",
                color: "white",
                clipPath: "polygon(0 0, 100% 0, 86% 100%, 0% 100%)",
              }}
              onClick={() => setIsbuy(true)}
            >
              BUY
            </Typography>
            <Divider orientation="vertical" />
            <Typography
              onClick={() => setIsbuy(false)}
              textAlign="center"
              sx={{
                flex: 1,
                fontSize: "14px",
                backgroundColor: !isBuy ? "#04cfa2" : "transparent",
                color: !isBuy ? "white" : "",
                clipPath: "polygon(14% 0, 100% 0, 100% 100%, 0 100%);",
              }}
            >
              SELL
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Autocomplete
              disablePortal
              size="small"
              sx={{
                "& .MuiFormLabel-root": {
                  fontSize: "12px",
                },
                "& .MuiInputBase-input": {
                  height: ".8rem",
                  fontSize: "12px",
                },
                "& .MuiOutlinedInput-root": {},
                "& .MuiInputLabel-shrink": {
                  textAlign: "center",
                  padding: "3px 11px 0 11px",
                },
              }}
              onInputChange={(event, newInputValue) => {
                checkTrade(newInputValue);
              }}
              options={autocompleteOptions}
              renderInput={(params) => (
                <TextField {...params} label="Stock Name" />
              )}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 3px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: theme.palette.mode === "dark" ? "#c1c1c1" : "black",
              }}
            >
              Order Type
            </Typography>
            <FormControl>
              <Select
                disabled={expDate === "Expiring Date" ? true : false}
                size="small"
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                displayEmpty
                style={{
                  height: 30,
                  minWidth: 50,
                  fontSize: "10px",
                  background: "transparent",
                }}
              >
                <MenuItem
                  sx={{
                    fontSize: "12px",
                    padding: "2px 15px",
                  }}
                  value={limit}
                >
                  <em>{limit}</em>
                </MenuItem>
                {renderLimits()}
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 3px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: theme.palette.mode === "dark" ? "#c1c1c1" : "black",
              }}
            >
              Limit Price
            </Typography>
            <FormControl
              sx={{
                border: "1px solid #59586B",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <input
                style={{
                  width: "50px",
                  height: "25px",
                  background: "transparent",
                  border: "1px solid transparent",
                }}
              />
              <Button sx={{ color: "white", height: "20px", minWidth: "20px" }}>
                +
              </Button>
              <Button sx={{ color: "white", height: "20px", minWidth: "20px" }}>
                -
              </Button>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 3px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: theme.palette.mode === "dark" ? "#c1c1c1" : "black",
              }}
            >
              Quantity
            </Typography>
            <FormControl
              sx={{
                border: "1px solid #59586B",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <input
                style={{
                  width: "50px",
                  height: "25px",
                  background: "transparent",
                  border: "1px solid transparent",
                }}
              />
              <Button sx={{ color: "white", height: "20px", minWidth: "20px" }}>
                +
              </Button>
              <Button sx={{ color: "white", height: "20px", minWidth: "20px" }}>
                -
              </Button>
            </FormControl>
          </Box>

          <Box
            sx={{
              display: "flex",
              marginTop: "20px",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 3px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: theme.palette.mode === "dark" ? "#c1c1c1" : "black",
              }}
            >
              Trading Hours
            </Typography>
            <FormControl>
              <Select
                disabled={expDate === "Expiring Date" ? true : false}
                size="small"
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                displayEmpty
                style={{
                  height: 30,
                  minWidth: 50,
                  fontSize: "10px",
                  background: "transparent",
                }}
              >
                <MenuItem
                  sx={{
                    fontSize: "12px",
                    padding: "2px 15px",
                  }}
                  value={limit}
                >
                  <em>{limit}</em>
                </MenuItem>
                {renderLimits()}
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 3px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: theme.palette.mode === "dark" ? "#c1c1c1" : "black",
              }}
            >
              Time-in-Force
            </Typography>
            <FormControl>
              <Select
                disabled={expDate === "Expiring Date" ? true : false}
                size="small"
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                displayEmpty
                style={{
                  height: 30,
                  minWidth: 50,
                  fontSize: "10px",
                  background: "transparent",
                }}
              >
                <MenuItem
                  sx={{
                    fontSize: "12px",
                    padding: "2px 15px",
                  }}
                  value={limit}
                >
                  <em>{limit}</em>
                </MenuItem>
                {renderLimits()}
              </Select>
            </FormControl>
          </Box>
          <Typography
            sx={{ marginTop: "10px", color: "#c1c1c1", fontSize: "11px" }}
          >
            Estimated Amount: $0.00
          </Typography>
          <Button
            onClick={() => {
              setOpenState(true);
              setDialogType(1);
              setDialogTitle("Copy Order?");
              setDialogDescription("Are you sure you want to copy this order");
            }}
            className={classes.quickTradebtn}
            type="submit"
            fullWidth
            size="small"
            variant="contained"
          >
            Place Order
          </Button>
        </Box>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              textAlign="center"
              sx={{
                flex: 1,
                fontSize: "14px",
                backgroundColor: isBuy ? "#04cfa2" : "transparent",
                clipPath: "polygon(0 0, 100% 0, 86% 100%, 0% 100%)",
                color: "white",
              }}
              onClick={() => setIsbuy(true)}
            >
              BUY
            </Typography>
            <Divider orientation="vertical" />
            <Typography
              onClick={() => setIsbuy(false)}
              textAlign="center"
              sx={{
                flex: 1,
                fontSize: "14px",
                backgroundColor: !isBuy ? "#04cfa2" : "transparent",
                clipPath: "polygon(14% 0, 100% 0, 100% 100%, 0 100%);",
                color: !isBuy ? "white" : "",
              }}
            >
              SELL
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Autocomplete
              disablePortal
              size="small"
              sx={{
                "& .MuiFormLabel-root": {
                  fontSize: "12px",
                },
                "& .MuiInputBase-input": {
                  height: ".8rem",
                  fontSize: "12px",
                },
                "& .MuiOutlinedInput-root": {},
                "& .MuiInputLabel-shrink": {
                  textAlign: "center",
                  padding: "3px 11px 0 11px",
                },
              }}
              onInputChange={(event, newInputValue) => {
                checkTrade(newInputValue);
              }}
              options={autocompleteOptions}
              renderInput={(params) => (
                <TextField {...params} label="Crypto Name" />
              )}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 3px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: theme.palette.mode === "dark" ? "#c1c1c1" : "black",
              }}
            >
              Order Type
            </Typography>
            <FormControl>
              <Select
                disabled={expDate === "Expiring Date" ? true : false}
                size="small"
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                displayEmpty
                style={{
                  height: 30,
                  minWidth: 50,
                  fontSize: "10px",
                  background: "transparent",
                }}
              >
                <MenuItem
                  sx={{
                    fontSize: "12px",
                    padding: "2px 15px",
                  }}
                  value={limit}
                >
                  <em>{limit}</em>
                </MenuItem>
                {renderLimits()}
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 3px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: theme.palette.mode === "dark" ? "#c1c1c1" : "black",
              }}
            >
              Limit Price
            </Typography>
            <FormControl
              sx={{
                border: "1px solid #59586B",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <input
                style={{
                  width: "50px",
                  height: "25px",
                  background: "transparent",
                  border: "1px solid transparent",
                }}
              />
              <Button sx={{ color: "white", height: "20px", minWidth: "20px" }}>
                +
              </Button>
              <Button sx={{ color: "white", height: "20px", minWidth: "20px" }}>
                -
              </Button>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 3px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: theme.palette.mode === "dark" ? "#c1c1c1" : "black",
              }}
            >
              Amount in
            </Typography>
            <FormControl
              sx={{
                border: "1px solid #59586B",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <input
                style={{
                  width: "50px",
                  height: "25px",
                  background: "transparent",
                  border: "1px solid transparent",
                }}
              />
              <Button sx={{ color: "white", height: "20px", minWidth: "20px" }}>
                +
              </Button>
              <Button sx={{ color: "white", height: "20px", minWidth: "20px" }}>
                -
              </Button>
            </FormControl>
          </Box>

          <Box
            sx={{
              margintTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 3px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: theme.palette.mode === "dark" ? "#c1c1c1" : "black",
              }}
            >
              Time-in-Force
            </Typography>
            <FormControl>
              <Select
                disabled={expDate === "Expiring Date" ? true : false}
                size="small"
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                displayEmpty
                style={{
                  height: 30,
                  minWidth: 50,
                  fontSize: "10px",
                  background: "transparent",
                }}
              >
                <MenuItem
                  sx={{
                    fontSize: "12px",
                    padding: "2px 15px",
                  }}
                  value={limit}
                >
                  <em>{limit}</em>
                </MenuItem>
                {renderLimits()}
              </Select>
            </FormControl>
          </Box>

          <Typography
            sx={{ marginTop: "10px", color: "#c1c1c1", fontSize: "11px" }}
          >
            Estimated Amount: $0.00
          </Typography>
          <Button
            onClick={() => {
              setOpenState(true);
              setDialogType(1);
              setDialogTitle("Copy Order?");
              setDialogDescription("Are you sure you want to copy this order");
            }}
            className={classes.quickTradebtn}
            type="submit"
            fullWidth
            size="small"
            variant="contained"
          >
            Place Order
          </Button>
        </Box>
      )}
      <ConfirmationDialog
        title={dialogTitle}
        message={dialogDescription}
        okButtonText="Confirm"
        cancelButtonText="Cancel"
        openState={dialogType === 1 ? openState : false}
        onCancelButtonClick={() => {
          setOpenState(false);
        }}
        onOkayButtonClick={() => {
          setOpenState(false);
          placeOrder();
        }}
      />
      <OkayAlert
        title={dialogTitle}
        message={dialogDescription}
        cancelButtonText="Ok"
        openState={dialogType === 2 ? openState : false}
        onCancelButtonClick={() => {
          setOpenState(false);
        }}
      />
    </Box>
  );
}
