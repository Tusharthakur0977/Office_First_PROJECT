import {
  Alert,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import {
  actionCurrentPosition,
  actionOpenOrder,
} from "../../../../redux/PositionOrderAction";
import Spinner from "../../../appcomp/spinner/Spinner";
import OpenOrderTableRows from "./OpenOrderTableRows";
import CurrentPositionTableRows from "./OpenOrderTableRows";

function OpenOrder(props) {
  const { loggedInUser } = props;
  const [orderDetail, setOrderDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState({
    cancelOrder: false,
    modifyOrder: false,
  });
  useEffect(() => {
    if (loggedInUser) {
      fetchDetails();
    }
  }, []);

  function fetchDetails() {
    setLoading(true);
    actionOpenOrder(loggedInUser.access_token, (response, error) => {
      if (response) {
        setOrderDetail(response);
      }
      setLoading(false);
    });
  }
  const refreshData = () => {
    setLoading(true);
    actionOpenOrder(loggedInUser.access_token, (response, error) => {
      if (response) {
        setOrderDetail(response);
      }
      setLoading(false);
    });
  };
  function renderTableSection() {
    let tabContent = [];

    orderDetail?.map((item) => {
      item.items.map((itemData) => {
        tabContent.push(
          <OpenOrderTableRows
            cancelSuccess={(data) =>
              setSuccess({ ...success, cancelOrder: data })
            }
            modifySuccess={(data) =>
              setSuccess({ ...success, modifyOrder: data })
            }
            refreshData={refreshData}
            itemData={itemData}
          />
        );
      });
    });

    return (
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{  fontSize: "12px", padding: "3px 0px " }}
                align="center"
              >
                Asset Type
              </TableCell>
              {/* <TableCell
                sx={{  fontSize: "12px", padding: "3px 0px " }}
                align="center"
              >
                Symbol
              </TableCell> */}
              <TableCell
                sx={{  fontSize: "12px", padding: "3px 0px " }}
                align="center"
              >
                Order Type
              </TableCell>
              <TableCell
                sx={{  fontSize: "12px", padding: "3px  " }}
                align="center"
              >
                Time In Force
              </TableCell>
              {/* <TableCell
                sx={{  fontSize: "12px", padding: "3px 0px " }}
                align="center"
              >
                Size(x100)
              </TableCell> */}
              <TableCell
                sx={{  fontSize: "12px", padding: "3px 0px " }}
                align="center"
              >
                IMT Price
              </TableCell>
              <TableCell
                sx={{  fontSize: "12px", padding: "3px 0px " }}
                align="center"
              >
                Total Price
              </TableCell>
              <TableCell
                sx={{  fontSize: "12px", padding: "3px 0px " }}
                align="center"
              >
                Modify Order
              </TableCell>
              <TableCell
                sx={{  fontSize: "12px", padding: "3px 0px " }}
                align="center"
              >
                Cancel Order
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{tabContent}</TableBody>
        </Table>
      </TableContainer>
    );
  }
  if (loading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
      }}
    >
      {renderTableSection()}
    </Box>
  );
}

export default OpenOrder;
