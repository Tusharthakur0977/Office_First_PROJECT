import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useStylesServer from "../../../styles/ServerStyle";
import Spinner from "../../components/appcomp/spinner/Spinner";
import { actionAnalystList } from "../../redux/AnalystAction";
import { readData, USER } from "../../utils/storage";

function Analyst(props) {
  const classes = useStylesServer();
  // const [user, setUser] = useState(null);
  const [analyst, setAnalyst] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    readData(USER, (data) => {
      setLoggedInUser(JSON.parse(data));
    });
  }, []);

  useEffect(() => {
    if (loggedInUser) {
      getAnalyst();
    }
  }, [loggedInUser]);
  const getAnalyst = (id, user) => {
    setLoading(true);
    actionAnalystList(1, loggedInUser.access_token, (response, error) => {
      setLoading(false);
      if (response) {
        response.data.map((items, index) => {
          let tempArray = response.data;
          tempArray[index].isSelected = false;
          setAnalyst([...tempArray]);
        });
      } else {
        if (typeof error === "string") {
        } else {
        }
      }
    });
  };
  const renderAnalystItems = () => {
    if (analyst) {
      if (analyst.length > 0) {
        const handleMultipleSelect = (item, index) => {
          analyst[index].isSelected = !item.isSelected;
          setAnalyst([...analyst]);
        };
        let analystItems = [];
        analyst.map((item, index) => {
          analystItems.push(
            <Box
              key={index}
              sx={{ boxShadow: 3 }}
              className={classes.selectedserverTile}
            >
              <Box className={classes.serverTileInnerSection}>
                <img
                  className={classes.tileImg}
                  alt=""
                  src="../assets/images/server.png"
                />
                <Box className={classes.detail}>
                  <Typography className={classes.serverName}>
                    {item.name}
                  </Typography>
                  <Typography className={classes.description}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
              <Button
                onClick={() => handleMultipleSelect(item, index)}
                className={
                  !item.isSelected
                    ? classes.connectButton
                    : classes.connectButton
                }
                variant="contained"
              >
                {item.isSelected ? "Selected" : "Select"}
              </Button>
            </Box>
          );
        });
        return analystItems;
      }
    }
    return <p className="noDataFound">Sorry there is no analyst list yet.</p>;
  };

  return (
    <Box className={classes.containerSelectedServer}>
      <Box className={classes.analyticsHeading}>
        <Typography
          mb={1}
          fontWeight="bold"
          className={classes.headingSelectedServer}
        >
          Select Your Server
        </Typography>
        <Typography
          fontSize={"16px"}
          className={classes.subHeadingSelectedServer}
        >
          Rerum eius velit dolores. Explicabo ad nemo quibusdam. Voluptatem eum
          suscipit et ipsum et consequatur aperiam quia. Rerum n
        </Typography>
      </Box>

      <Box boxShadow={6} className={classes.serverContainer}>
        {loading ? <Spinner /> : renderAnalystItems()}
      </Box>

      <Box className={classes.buttonContainer}>
        {analyst.length > 0 ? (
          <Button variant="contained" className={classes.button}>
            Confirm
          </Button>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}

export default Analyst;
