import {
  Button,
  CircularProgress,
  TableCell,
  Box,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { InputUnstyled } from "@mui/base";
import React, { useEffect, useState } from "react";
import { tableInputBox } from "../../../../../styles/PositionOrderStyle";
import moment from "moment";
import { actionPlaceOrderOption } from "../../../../redux/PositionOrderAction";
import ConfirmationDialog from "../../../appcomp/dialogs/ConfirmationDialog";
import OkayAlert from "../../../appcomp/dialogs/OkayAlert";
function AnalyticsTableRows(props) {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const theme = useTheme();
  let { itemData, loggedInUser } = props;
  const [price, setPrice] = useState(itemData.price);
  const [size, setSize] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  //confirmation details
  const [openState, setOpenState] = useState(false);
  const [dialogTitle, setDialogTitle] = useState(false);
  const [dialogDescription, setDialogDescription] = useState(false);
  const [dialogType, setDialogType] = useState(-1);
  //end

  useEffect(() => {
    setTotal((Number(price) * Number(size)).toFixed(2));
  }, [price, size]);

  function placeOrder() {
    setLoading(true);
    const params = {
      stock: itemData.stock_name,
      type: itemData.type.toLowerCase(),
      strike: JSON.stringify(itemData.strike),
      direction: itemData.direction,
      expiry: itemData.expire_date,
      price: JSON.stringify(price),
      quantity: size,
      tif: "GTC",
      copy_id: itemData.id,
    };
    actionPlaceOrderOption(
      loggedInUser.access_token,
      params,
      (response, error) => {
        setLoading(false);
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
      }
    );
  }

  return (
    <>
      {isSmallScreen ? (
        <>
          <TableRow>
            <Box
              sx={{
                display: "grid",
                margin: "5px 0",
                rowGap: "5px",
                columnGap: "10px",
                padding: "5px 10px",
                background: theme.palette.mode === "dark" ? "#353648" : "",
              }}
            >
              <Typography sx={{ fontSize: "10px", gridColumn: "1 / span 2" }}>
                Alert Time : &nbsp; &nbsp; &nbsp; &nbsp;
                <span
                  style={{
                    fontSize: "9px",
                    color: theme.palette.mode === "dark" ? "white" : "black",
                  }}
                >
                  {moment(itemData.created_at).format("MM/YY HH.mm")}
                </span>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "3px",
                  gridColumn: "1 / span 1",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "3px",
                  }}
                >
                  <Typography sx={{ fontSize: "10px" }}>Stock :</Typography>
                  <Typography
                    sx={{
                      fontSize: "9px",
                      color: theme.palette.mode === "dark" ? "white" : "black",
                    }}
                  >
                    {itemData.stock_name}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "3px",
                  }}
                >
                  <Typography sx={{ fontSize: "10px" }}> Side :</Typography>
                  <Typography
                    sx={{
                      fontSize: "9px",
                      color: theme.palette.mode === "dark" ? "white" : "black",
                    }}
                  >
                    {itemData.direction}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "3px",
                  }}
                >
                  <Typography sx={{ fontSize: "10px" }}>
                    {" "}
                    Direction :{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "9px",
                      color: theme.palette.mode === "dark" ? "white" : "black",
                    }}
                  >
                    {itemData.type}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "3px",
                  }}
                >
                  <Typography sx={{ fontSize: "10px" }}> Expiry : </Typography>
                  <Typography
                    sx={{
                      fontSize: "9px",
                      color: theme.palette.mode === "dark" ? "white" : "black",
                    }}
                  >
                    {moment(itemData.expire_date).format("DD MMM YY")}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "3px",
                  gridColumn: "2 / span 1",
                }}
              >
                  <Button
                  style={{
                  
                    backgroundColor: "#707070",
                   
                }}
                  sx={{
                    
                    display: "flex",
                    flexDirection: "column",
                    height: "20px",
                    fontSize: "10px",
                    padding: "5px 30px",
                    maxWidth: '1px',
                    marginTop:"-1.3rem",
                    left:"5rem",
                  }}
                  variant="contained"
                >
                  Open
                </Button>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "3px",
                  }}
                >
            
                
                  <Typography sx={{ fontSize: "10px" }}> Strike :</Typography>
                  <Typography
                    sx={{
                      fontSize: "9px",
                      color: theme.palette.mode === "dark" ? "white" : "black",
                    }}
                  >
                    {itemData.strike}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "3px",
                  }}
                >
                  <Typography sx={{ fontSize: "10px" }}>Price :</Typography>
                  <input
                    style={{
                      fontSize: "9px",
                      width: "35px",
                      height: "15px",
                      background: "transparent",
                      border: "1px solid #59586B",
                      outline: "none",
                      color: "#c1c1c1",
                      padding: "0 5px",
                    }}
                    type="number"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    value={price}
                    placeholder={itemData.price}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "3px",
                  }}
                >
                  <Typography sx={{ fontSize: "10px" }}>
                    Size(x100) :{" "}
                  </Typography>
                  {/* <InputUnstyled
                  onChange={(e) => {
                    setSize(e.target.value);
                  }}
                  value={size}
                  components={{ Input: tableInputBox }}
                  placeholder="0"
                  variant="standard"
                /> */}
                  <input
                    style={{
                      fontSize: "9px",
                      width: "35px",
                      height: "15px",
                      background: "transparent",
                      border: "1px solid #59586B",
                      outline: "none",
                      color: "#c1c1c1",
                      padding: "0 5px",
                    }}
                    type="number"
                    onChange={(e) => {
                      setSize(e.target.value);
                    }}
                    placeholder="0"
                    value={size}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "3px",
                    marginBottom: "5px ",
                  }}
                >
                  <Typography sx={{ fontSize: "10px" }}> Total :</Typography>
                  <Typography
                    sx={{
                      fontSize: "9px",
                      color: theme.palette.mode === "dark" ? "white" : "black",
                    }}
                  >
                    {total}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  gridColumn: "1 / span 2",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  justifyContent: "flex-end",
                }}
              >
                {/* <Button
                  sx={{
                    height: "20px",
                    fontSize: "10px",
                    padding: "5px 10px",
                    minWidth: "50px",
                  }}
                  variant="contained"
                >
                  Open
                </Button> */}
                {loading ? (
                  <CircularProgress size={20} />
                ) : itemData.is_copied === 1 ? (
                  <Button
                    sx={{
                      height: "20px",
                      fontSize: "10px",
                      padding: "5px 10px",
                      minWidth: "50px",
                    }}
                    onClick={() => {
                      setDialogTitle("Copy Order?");
                      setDialogDescription(
                        "Are you sure you want to copy this order"
                      );
                      setDialogType(1);
                      setOpenState(true);
                    }}
                    disabled
                    variant="contained"
                  >
                    Copied
                  </Button>
                ) : (
                  <Button
                    sx={{
                      height: "20px",
                      fontSize: "10px",
                      padding: "5px 10px",
                      minWidth: "50px",
                    }}
                    onClick={() => {
                      setDialogTitle("Copy Order?");
                      setDialogDescription(
                        "Are you sure you want to copy this order"
                      );
                      setDialogType(1);
                      setOpenState(true);
                    }}
                    variant="contained"
                  >
                    Copy
                  </Button>
                )}
              </Box>
            </Box>
          </TableRow>
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
        </>
      ) : (
        <>
          <TableRow sx={{ height: "40px" }}>
            <TableCell
              align="center"
              sx={{ fontSize: "8px", padding: "0px 3px " }}
            >
              {moment(itemData.created_at).format("MM/YY HH.mm")}
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontSize: "8px", padding: "0px 3px " }}
            >
              {itemData.direction}
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontSize: "8px", padding: "0px 3px " }}
            >
              {itemData.stock_name}
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontSize: "8px", padding: "0px 3px " }}
            >
              {itemData.type}
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontSize: "8px", padding: "0px 3px " }}
            >
              {moment(itemData.expire_date).format("DD MMM YY")}
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontSize: "8px", padding: "0px 10px " }}
            >
              GTC
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontSize: "8px", padding: "0px 3px " }}
            >
              <InputUnstyled
                sx={{ backgound: "transparent", fontSize: "1px" }}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                components={{ Input: tableInputBox }}
                aria-label="Demo input"
                value={price}
                placeholder={itemData.price.toString()}
              />
            </TableCell>

            <TableCell align="center" sx={{ fontSize: "8px", padding: "0px " }}>
              <InputUnstyled
                onChange={(e) => {
                  setSize(e.target.value);
                }}
                value={size}
                components={{ Input: tableInputBox }}
                placeholder={"0"}
                variant="standard"
              />
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontSize: "8px", padding: "0px 3px " }}
            >
              {total}
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontSize: "8px", padding: "0px 3px " }}
            >
              {loading ? (
                <CircularProgress size={20} />
              ) : (
                <>
                  {itemData.is_copied === 1 ? (
                    <Button
                      sx={{
                        height: "20px",
                        fontSize: "10px",
                        padding: "3px 1px",
                        minWidth: "45px",
                      }}
                      onClick={() => {
                        setDialogTitle("Copy Order?");
                        setDialogDescription(
                          "Are you sure you want to copy this order"
                        );
                        setDialogType(1);
                        setOpenState(true);
                      }}
                      disabled
                      variant="contained"
                    >
                      Copied
                    </Button>
                  ) : (
                    <>
                      {" "}
                      <Button
                        sx={{
                          height: "20px",
                          fontSize: "10px",
                          padding: "3px 1px",
                          minWidth: "45px",
                        }}
                        onClick={() => {
                          setDialogTitle("Copy Order?");
                          setDialogDescription(
                            "Are you sure you want to copy this order"
                          );
                          setDialogType(1);
                          setOpenState(true);
                        }}
                        variant="contained"
                      >
                        Copy
                      </Button>
                      <ConfirmationDialog
                        sx={{ color: "red" }}
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
                    </>
                  )}
                </>
              )}
            </TableCell>
          </TableRow>
        </>
      )}
    </>
  );
}

export default AnalyticsTableRows;
