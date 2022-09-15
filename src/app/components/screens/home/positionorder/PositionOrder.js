import React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useStylesPositionOrder from "../../../../../styles/PositionOrderStyle";
import PositionOrderTabPanel from "./PositionOrderTabPanel";
import { useServers } from "./useServers";
import { CircularProgress } from "@mui/material";

function PositionOrder() {
  const classes = useStylesPositionOrder();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const loggedInUser = { access_token: "" }; // dummy (kept for backward compatibility)
  // const [loading, setLoading] = useState(true);
  // const [loggedInUser, setLoggedInUser] = useState(null);
  // const [servers, setServers] = useState(null);
  const { servers, loading } = useServers();
  // const [selectedServer, setSelectedServer] = useState(1);

  // useEffect(() => {
  //   readData(USER, (data) => {
  //     setLoggedInUser(JSON.parse(data));
  //   });
  // }, []);

  // useEffect(() => {
  //   if (servers) {
  //     // servers []
  //     // server[0].analysts = []
  //     // server[0].analysts[0].data = []
  //     setLoading(false);
  //   }
  // }, [servers]);

  // useEffect(() => {
  //   if (loggedInUser) {
  //     fetchServers();
  //   }
  // }, [loggedInUser]);

  // function fetchServers() {
  //   setLoading(true);
  //   actionPositionOrder(loggedInUser.access_token, (response) => {
  //     if (response) {
  //       setServers(response.servers);
  //     }
  //   });
  // }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  function renderTabs() {
    if (servers) {
      return servers.map((item, index) => {
        return (
          <Tab
            key={`${index}${item.name}`}
            sx={{ fontSize: "10px", minHeight: "40px" }}
            {...a11yProps(index)}
            label={item.name}
          />
        );
      });
    }
  }

  function TabPanel({ value, index, analyst }) {
    return (
      <Box
        className={classes.tabSectionContainer}
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
      >
        {value === index && (
          <PositionOrderTabPanel
            loggedInUser={loggedInUser}
            analysts={analyst}
          />
        )}
      </Box>
    );
  }

  function renderTabContent() {
    if (servers) {
      return servers.map((item, index) => {
        return (
          <TabPanel
            key={index}
            value={value}
            index={index}
            analyst={item.analysts}
          />
        );
      });
    }
  }

  return (
    <>
      <Box>
        {loading ? (
          <Box className={classes.loader}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <AppBar className={classes.appBar} position="static">
              <Tabs
                sx={{
                  minHeight: "40px",
                  [theme.breakpoints.down("sm")]: {
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  },
                }}
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="scrollable"
                aria-label="full width tabs example"
              >
                {renderTabs()}
              </Tabs>
            </AppBar>
            <Box>{renderTabContent()}</Box>
          </>
        )}
      </Box>
    </>
  );
}

export default PositionOrder;
