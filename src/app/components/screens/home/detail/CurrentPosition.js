import {
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
import { actionCurrentPosition } from "../../../../redux/PositionOrderAction";
import Spinner from "../../../appcomp/spinner/Spinner";
import CurrentPositionTableRows from "./CurrentPositionTableRows";

function CurrentPosition(props) {
  const { loggedInUser } = props;
  const [orderDetail, setOrderDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loggedInUser) {
      fetchDetails();
    }
  }, []);

  function fetchDetails() {
    setLoading(true);
    actionCurrentPosition(loggedInUser.access_token, (response, error) => {
      if (response) {
        setOrderDetail(response);
      }
      setLoading(false);
    });
  }

  function renderTableSection() {
    if (orderDetail) {
      let tabContent = [];

      orderDetail.assetSummaryVO?.positions?.map((item) => {
        if (item.tickerType === "OPTION") {
          item.items.map((itemData) => {
            tabContent.push(<CurrentPositionTableRows itemData={itemData} />);
          });
        }
      });

      return (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ margin: "10px", fontSize: "11px", padding: "3px 3px " }}
                  align="center"
                >
                  Asset Type
                </TableCell>
                <TableCell
                  sx={{ margin: "10px", fontSize: "11px", padding: "3px 3px " }}
                  align="center"
                >
                  Symbol
                </TableCell>
                <TableCell
                  sx={{ margin: "10px", fontSize: "11px", padding: "3px 3px " }}
                  align="center"
                >
                  Size(x100)
                </TableCell>
                <TableCell
                  sx={{ margin: "10px", fontSize: "11px", padding: "3px 3px " }}
                  align="center"
                >
                  Cost Price
                </TableCell>
                <TableCell
                  sx={{ margin: "10px", fontSize: "11px", padding: "3px 3px " }}
                  align="center"
                >
                  Current Prise
                </TableCell>
                <TableCell
                  sx={{ margin: "10px", fontSize: "11px", padding: "3px 3px " }}
                  align="center"
                >
                  Total Cost
                </TableCell>
                <TableCell
                  sx={{ margin: "10px", fontSize: "11px", padding: "3px 3px " }}
                  align="center"
                >
                  Market Value
                </TableCell>
                <TableCell
                  sx={{ margin: "10px", fontSize: "11px", padding: "3px 3px " }}
                  align="center"
                >
                  Close Trade
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{tabContent}</TableBody>
          </Table>
        </TableContainer>
      );
    }
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

export default CurrentPosition;
