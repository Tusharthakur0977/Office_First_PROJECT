import {
  Alert,
  Button,
  // InputUnstyled,
  TableCell,
  TableRow,
} from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import useStylesPositionOrder, {
  tableInputBox,
} from "../../../../../styles/PositionOrderStyle";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  actionCancelOrder,
  actionModifyOrder,
} from "../../../../redux/PositionOrderAction";
import { readData, USER } from "../../../../utils/storage";
function OpenOrderTableRows(props) {
  let { itemData } = props;
  const classes = useStylesPositionOrder();
  const [price, setPrice] = useState(itemData.lmtPrice);
  const [size, setSize] = useState(1);
  const [total, setTotal] = useState(0);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState({
    cancelOrder: false,
    modifyOrder: false,
  });
  useEffect(() => {
    setTotal(Number(price) * Number(size));

    readData(USER, (data) => {
      setLoggedInUser(JSON.parse(data));
    });
  }, [price, size]);

  const cancelOrder = (orderId) => {
    setSuccess({ ...success, cancelOrder: true });
    setLoading(true);
    actionCancelOrder(orderId, loggedInUser.access_token, (response) => {
      if (response) {
        props.refreshData();
        props.cancelSuccess(true);
        setSuccess({ ...success, cancelOrder: true });
        setLoading(false);
      }
    });
  };
  const modifyOrder = (param) => {
    let params = {
      comboId: param.comboId,
      orderId: param.orderId,
      lmtPrice: price,
      auxPrice: null,
      orderType: param.orderType,
      timeInForce: param.timeInForce,
      orders: [
        {
          quantity: param.totalQuantity,
          action: param.action,
          tickerId: param.tickerId,
          tickerType: param.tickerType,
          orderId: param.orderId,
        },
      ],
    };
    actionModifyOrder(loggedInUser.access_token, params, (response, error) => {
      setLoading(false);
      if (response) {
        props.modifySuccess(true);
        setSuccess({ ...success, modifyOrder: true });
        setTimeout(() => {
          props.refreshData();
        }, 1000);
      }
    });
  };
  return (
    <TableRow>
      <TableCell
        sx={{
          fontSize: "10px",
          padding: "3px  ",
          textAlign: "center",
        }}
        align="center"
      >
        Option
      </TableCell>
      <TableCell
        sx={{
          fontSize: "10px",
          padding: "3px  ",
          textAlign: "center",
        }}
        align="center"
      >
        {itemData.symbol + " " + itemData.lmtPrice}
        <br />
        {moment(itemData.createTime).format("DD/MM/yyyy") +
          " " +
          itemData.action}
      </TableCell>
      <TableCell
        sx={{
          fontSize: "10px",
          padding: "3px  ",
          textAlign: "center",
        }}
        align="center"
      >
        {itemData.orderType}
      </TableCell>
      <TableCell
        sx={{
          fontSize: "10px",
          padding: "3px  ",
          textAlign: "center",
        }}
        align="center"
      >
        {itemData.timeInForce}
      </TableCell>
      {/* <TableCell  sx={{
                fontSize: "10px",
                padding: "3px  ",
                textAlign: "center",
              }} align="center">
        <InputUnstyled
          onChange={(e) => {
            setSize(e.target.value);
          }}
          value={size}
          components={{ Input: tableInputBox }}
          placeholder="1"
        />
      </TableCell> */}
      {/* <TableCell  sx={{
                fontSize: "10px",
                padding: "3px  ",
                textAlign: "center",
              }} align="center">
        <InputUnstyled
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          components={{ Input: tableInputBox }}
          value={price}
          placeholder={itemData.price}
        />
      </TableCell> */}
      <TableCell
        sx={{
          fontSize: "10px",
          padding: "3px  ",
          textAlign: "center",
        }}
        align="center"
      >
        {total}
      </TableCell>
      <TableCell
        sx={{
          fontSize: "10px",
          padding: "3px  ",
          textAlign: "center",
        }}
        align="center"
      >
        {/* <Button variant="contained">Modify Order</Button> */}
        <CreateIcon
          sx={{ fontSize: "16px" }}
          onClick={() => modifyOrder(itemData)}
        />
        {success.modifyOrder && (
          <Alert
            style={{ justifyContent: "center", display: "flex" }}
            severity="success"
          >
            Successfully Modified
          </Alert>
        )}
      </TableCell>
      <TableCell
        sx={{
          fontSize: "10px",
          padding: "3px  ",
          textAlign: "center",
        }}
        align="center"
      >
        {/* <Button variant="contained">Cancel Order</Button> */}
        <DeleteIcon
          sx={{ fontSize: "16px" }}
          onClick={() => cancelOrder(itemData.orderId)}
        />
        {success.cancelOrder && (
          <Alert style={{}} severity="success">
            Successfully Cancelled
          </Alert>
        )}
      </TableCell>
    </TableRow>
  );
}

export default OpenOrderTableRows;
