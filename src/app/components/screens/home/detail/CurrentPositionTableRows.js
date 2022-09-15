import { Button, TableCell, TableRow } from "@mui/material";
import moment from "moment";
import React from "react";

function CurrentPositionTableRows(props) {
  let { itemData } = props; 
  return (
    <TableRow>
      <TableCell align="center">{itemData.assetType}</TableCell>
      <TableCell align="center">
        {itemData.symbol + " " + itemData.costPrice}
        <br />
        {moment(itemData.optionExpireDate).format("DD/MM/yyyy") +
          " " +
          itemData.optionType}
      </TableCell>
      <TableCell align="center">{itemData.quantity}</TableCell>
      <TableCell align="center">{itemData.costPrice}</TableCell>
      <TableCell align="center">{itemData.lastPrice}</TableCell>
      <TableCell align="center">{itemData.totalCost}</TableCell>
      <TableCell align="center">{itemData.marketValue}</TableCell>
      <TableCell align="center"><Button variant="contained">Close</Button></TableCell>
    </TableRow>
  );
}

export default CurrentPositionTableRows;
