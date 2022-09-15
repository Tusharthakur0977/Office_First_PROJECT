import { Box } from "@mui/system";
import {
  Button,
  CircularProgress,
  InputUnstyled,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TabsUnstyled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import useStylesOptionOrder from "../../../../../styles/OptionOrder";

function OptionOrderTable(props) {
  const classes = useStylesOptionOrder();
  const { response } = props;

  useEffect(() => {}, [props]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100%",
        minWidth: "100%",
      }}
    >
      {response ? (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Funds For Trading</TableCell>
                <TableCell align="center">Account Balances</TableCell>
                <TableCell align="center">Account Info</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableCell align="center">
                <Typography>
                  Overnight BP : {response?.accountSummaryVO?.dayBuyingPower}
                </Typography>
                <Typography>
                  Cash Balance : {response?.accountSummaryVO?.totalCashValue}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography>
                  Net Account Value:{" "}
                  {response?.accountSummaryVO?.netLiquidationValue}
                </Typography>
                <Typography>
                  Incoming Funds : {response?.accountSummaryVO?.incomingFunds}
                </Typography>
                <Typography>
                  Market Value : {response?.accountSummaryVO?.totalMarketValue}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography>
                  Account : {response?.accountSummaryVO?.accountNumber}
                </Typography>
                <Typography>
                  Account Type : {response?.accountSummaryVO?.accountTypeName}
                </Typography>
                <Typography>
                  Risk Level : {response?.accountSummaryVO?.riskInfo.level}
                </Typography>
                <Typography>
                  Day Trade Left :{" "}
                  {response?.accountSummaryVO?.openOrderQty
                    ? response?.accountSummaryVO?.openOrderQty
                    : "NIL"}
                </Typography>
                <Typography>
                  Open Order Qty : {response?.assetSummaryVO?.openOrderQty}
                </Typography>
              </TableCell>
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box className={classes.loader}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
}

export default OptionOrderTable;
