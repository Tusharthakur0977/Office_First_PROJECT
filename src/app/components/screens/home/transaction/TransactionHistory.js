import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, CircularProgress } from "@mui/material";
import useStylesTranscationHistory from "../../../../../styles/TranscationHistory";
import { actionTransactionHistory } from "../../../../redux/PositionOrderAction";
import { readData, USER } from "../../../../utils/storage";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  paddingRight: "0",
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowDropDownIcon
        sx={{
          fontSize: "1rem",
          color: "#8C8C94",
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  backgroundColor: theme.palette.mode === "dark" ? "#2A2C3C" : "",
  color: theme.palette.mode === "dark" ? "#8C8C94" : "#000",
  padding: "0",
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function TransactionHistory() {
  const [expanded, setExpanded] = React.useState("");
  const [loggedInUser, setLoggedInUser] = React.useState("");
  const [transactionHistory, setTransactionHistory] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const classes = useStylesTranscationHistory();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  React.useEffect(() => {
    readData(USER, (data) => {
      setLoggedInUser(JSON.parse(data));
    });
  }, []);
  React.useEffect(() => {
    if (loggedInUser) {
      getTransactionHistory();
    }
  }, [loggedInUser]);

  const getTransactionHistory = () => {
    setLoading(true);
    actionTransactionHistory(loggedInUser.access_token, (response, error) => {
      if (response) {
        setTransactionHistory(response);
        setLoading(false);
      }
    });
  };
  const renderTransactionHistory = () => {
    if (transactionHistory.length > 0) {
      let array = [];
      transactionHistory.map((item, index) =>
        array.push(
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              aria-controls={`panel${index}d-content`}
              id={`panel${index}d-header`}
            >
              <Box>
                <Typography sx={{ fontSize: "12px" }}>
                  {item.analyst_name} &nbsp;
                  <span style={{ fontSize: "11px" }}>{item.created_at}</span>
                </Typography>
                <Typography sx={{ fontSize: "12px" }}>
                  {item.description}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <table
                style={{ width: "100%", fontSize: "10px", textAlign: "center" }}
              >
                <thead>
                  <tr>
                    <th>Stock</th>
                    <th>Expiry</th>
                    <th>Price</th>
                    <th>Strike</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{item.stock_name}</td>
                    <td>{item.expire_date}</td>
                    <td>{item.price}</td>
                    <td>{item.strike}</td>
                  </tr>
                </tbody>
              </table>
            </AccordionDetails>
          </Accordion>
        )
      );
      return (
        <Box sx={{ overflow: "auto", minWidth: "100%", padding: "0 5px" }}>
          {array}
        </Box>
      );
    }
    // else {
    //   return (
    //     <Box className={classes.loader}>
    //       <CircularProgress />
    //     </Box>
    //   );
    // }
  };
  return (
    <Box boxShadow={3} className={classes.rootContainer}>
      {!loading ? (
        renderTransactionHistory()
      ) : (
        <Box className={classes.loader}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
}
