import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStylesServer from "../../../styles/ServerStyle";
import RoutePath from "../../navigation/RoutePath";
import { actionServerList } from "../../redux/ServerAction";
import { readData, USER } from "../../utils/storage";
function ServerTiles(props) {
  const navigate = useNavigate();

  const classes = useStylesServer();
  const [servers, setServers] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    readData(USER, (data) => {
      setLoggedInUser(JSON.parse(data));
    });
  }, []);

  useEffect(() => {
    if (loggedInUser) {
      getServerList();
    }
  }, [loggedInUser]);

  function getServerList() {
    setLoading(true);
    actionServerList(loggedInUser.access_token, (response, error) => {
      if (response) {
        setServers(response.data);
        setLoading(false);
      } else {
      }
    });
  }

  function renderServerItems() {
    if (servers) {
      if (servers.length > 0) {
        let serverItems = [];
        servers.map((item, index) =>
          serverItems.push(
            <Box
              key={index}
              sx={{ boxShadow: 10 }}
              className={classes.serverTile}
            >
              <Typography variant="body2" className={classes.serverName}>
                {item.name}
              </Typography>
              <Box className={classes.serverTileInnerSection}>
                <img
                  className={classes.tileImg}
                  alt=""
                  src="../assets/images/server.png"
                />
                <Box className={classes.detail}>
                  <Typography className={classes.description}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
              <Button
                onClick={() =>
                  navigate("/wiz" + RoutePath.analytics.path, {
                    state: item.id,
                  })
                }
                className={classes.connectButton}
                variant="contained"
              >
                Connect
              </Button>
            </Box>
          )
        );
        return serverItems;
      }
    }
    return <p className="noDataFound">Sorry there is no server list yet.</p>;
  }
  return (
    <Box className={classes.container}>
      <Box sx={{ boxShadow: 3 }} className={classes.subContainer}>
        {loading ? (
          <Box className={classes.loader}>
            <CircularProgress />
          </Box>
        ) : (
          renderServerItems()
        )}
      </Box>
    </Box>
  );
}

export default ServerTiles;
