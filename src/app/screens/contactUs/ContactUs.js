import React from "react";
import {
  FormControlLabel,
  FormGroup,
  TextField,
  Box,
  Button,
  Typography,
  IconButton,
  Checkbox,
} from "@mui/material";
import useStyleContactUsNew from "../../../styles/ContactUsNew";
import Facebook from "@mui/icons-material/Facebook";
import YouTube from "@mui/icons-material/YouTube";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";

function ContactUs() {
  const classes = useStyleContactUsNew();
  return (
    <Box className={classes.main}>
      <Box sx={{ mb: "2rem", flexWrap: "wrap" }} className={classes.Cont1}>
        Contact Us
      </Box>
      <Box
        sx={{ display: "flex", flexWrap: "wrap", marginBottom: "2rem" }}
        className={classes.Cont2}
      >
        <Box className={classes.Cont2a}>
          <Box className={classes.count2}>
            <Typography sx={{ textAlign: "left" }}>Contact Reason</Typography>
          </Box>
          <Box sx={{}}>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Need Help" />
              <FormControlLabel control={<Checkbox />} label="Have a Queston" />
              <FormControlLabel
                control={<Checkbox />}
                label="New Features / Suggestions"
              />
              <FormControlLabel control={<Checkbox />} label="Report Abuse" />
              <FormControlLabel control={<Checkbox />} label="Other Reasons" />
            </FormGroup>{" "}
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", flexWrap: "wrap" }}
          className={classes.Cont2b}
        >
          <Box className={classes.Cont2b1}>
            <Box>
              <Typography>Leave us a message</Typography>
            </Box>
            <TextField
              size="small"
              InputLabelProps={{
                style: {
                  fontSize: 12,
                  transformOrigin: "center",
                  lineHeight: 1,
                },
              }}
              inputProps={{
                style: {
                  height: "30px",
                  fontSize: "12px",
                  padding: "0 14px",
                },
              }}
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
            />
            <TextField
              size="small"
              InputLabelProps={{
                style: {
                  fontSize: 12,
                  transformOrigin: "center",
                  lineHeight: 1,
                },
              }}
              inputProps={{
                style: {
                  fontSize: "12px",
                  height: "30px",
                  padding: "0 14px",
                },
              }}
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
            />
            <TextField
              size="small"
              multiline
              rows={4}
              InputLabelProps={{
                style: {
                  fontSize: 12,
                  transformOrigin: "center",
                  lineHeight: 1,
                },
              }}
              inputProps={{
                style: {
                  height: "50px",
                  fontSize: "13px",
                  lineHeight: 1.2,
                  padding: "0 5px",
                },
              }}
              id="outlined-basic"
              label="Your Message"
              variant="outlined"
            />
            <Button
              variant="contained"
              size="small"
              className={classes.Cont2cbtn}
            >
              Send
            </Button>
          </Box>
          <Box className={classes.Cont2b2}>
            <Typography> hello@wyzalgo.com.com</Typography>
            <Box className={classes.SocialIcons}>
              <IconButton>
                <YouTube />
              </IconButton>
              <IconButton>
                <Instagram />
              </IconButton>
              <IconButton>
                <Facebook />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default ContactUs;
