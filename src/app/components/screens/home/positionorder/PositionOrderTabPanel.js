import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useState } from "react";
import useStylesPositionOrder from "../../../../../styles/PositionOrderStyle";
import AnalyticsTableRows from "./AnalyticsTableRows";

function PositionOrderTabPanel(props) {
  const classes = useStylesPositionOrder();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  let { analysts } = props;
  const [value, setValue] = useState(0);

  const selectedAnalystId =
    analysts && analysts.length > value ? analysts[value].id : 0;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function renderTabTitle() {
    let analyst = analysts.map((item, index) => (
      <Tab
        className={classes.lefttabPane}
        label={item.name}
        key={`${item.name}${index}`}
      />
    ));
    // analysts.map((item) => {
    //   analyst.push(
    //     <Tab label={item.name} />
    //     // <TabsUnstyled>
    //     //   <Button
    //     //    className={classes.leftLabButton}
    //     //     onClick={() => {
    //     //       setSelectedAnalystId(item.id);
    //     //     }}
    //     //   >
    //     //     {item.name}
    //     //   </Button>
    //     // </TabsUnstyled>
    //   );
    // });
    // if (selectedAnalystId === 0) {
    //   setSelectedAnalystId(analysts[0].id);
    // }
    return analyst;
  }

  function rederTabContent() {
    let tabContent = [];

    analysts
      .find((x) => x.id === selectedAnalystId)
      ?.data?.map((itemData) => {
        if (itemData.analyst_id === selectedAnalystId) {
          tabContent.push(
            <AnalyticsTableRows
              key={itemData.id}
              loggedInUser={props.loggedInUser}
              itemData={itemData}
            />
          );
        }
      });

    return (
      <TableContainer className={classes.postionordertablle}>
        <Table aria-label="simple table" size="small">
          <TableHead>
            <TableRow
              sx={{
                height: "30px",
                [theme.breakpoints.down("sm")]: { display: "none" },
              }}
            >
              <TableCell
                sx={{
                  fontSize: "12px",
                  padding: "3px  ",
                  textAlign: "center",
                  color: theme.palette.mode === "dark" ? "#8C8C94" : "",
                }}
              >
                Alert time
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "12px",
                  padding: "3px  ",
                  textAlign: "center",
                  color: theme.palette.mode === "dark" ? "#8C8C94" : "",
                }}
              >
                Side
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "12px",
                  padding: "3px  ",
                  textAlign: "center",
                  color: theme.palette.mode === "dark" ? "#8C8C94" : "",
                }}
              >
                Stock
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "12px",
                  padding: "3px  ",
                  textAlign: "center",
                  color: theme.palette.mode === "dark" ? "#8C8C94" : "",
                }}
              >
                Direction
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "12px",
                  padding: "3px  ",
                  textAlign: "center",
                  color: theme.palette.mode === "dark" ? "#8C8C94" : "",
                }}
              >
                Expiry
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "12px",
                  padding: "3px  ",
                  textAlign: "center",
                  color: theme.palette.mode === "dark" ? "#8C8C94" : "",
                }}
              >
                TIF
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "12px",
                  padding: "3px  ",
                  textAlign: "center",
                  color: theme.palette.mode === "dark" ? "#8C8C94" : "",
                }}
              >
                Price
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "12px",
                  padding: "3px  ",
                  textAlign: "center",
                  color: theme.palette.mode === "dark" ? "#8C8C94" : "",
                }}
              >
                Size(x100)
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "12px",
                  padding: "3px  ",
                  textAlign: "center",
                  marginRight: "3px",
                  color: theme.palette.mode === "dark" ? "#8C8C94" : "",
                }}
              >
                Total Cost
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "11px",
                  padding: "3px 3px ",
                  marginRight: "3px",
                }}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{tabContent}</TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        minWidth: "100%",
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          height: "100%",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          background: theme.palette.mode === "dark" ? "#353648" : "",
          padding: "0",
          marginRight: "5px",
          borderRadius: "10px",
          [theme.breakpoints.down("sm")]: {
            width: "100%",
            marginRight: "0px",
            height: "30px",
          },
        }}
      >
        <Tabs
          orientation={isSmallScreen ? "horizontal" : "vertical"}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabLeft}
        >
          {renderTabTitle()}
        </Tabs>
      </Box>
      <Box className={classes.tableContainer}>{rederTabContent()}</Box>
    </Box>
  );
}

export default PositionOrderTabPanel;
