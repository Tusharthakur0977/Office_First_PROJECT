import React from "react";
import Assest from "../frontpage/images/Asset.png";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Leptop from "../frontpage/images/leptop.png";
import Qna from "../frontpage/images/Qna.png";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import useStyleContactus from "../../../../styles/ContactUsStyle";
import Line from "../frontpage/images/line.png";
const ContactUs = () => {
  // const vook = {
  //   paperContainer: {
  //     backgroundImage: `url(${Line})`,
  //   },
  // };
  const classes = useStyleContactus();
  return (
    <Box className={classes.main} id="contact">
      <Box className={classes.about}>
        <Box className={classes.container}>
          <Box className={classes.col}>
            <Typography
              sx={{ fontSize: "3.6rem", color: "white" }}
              className={classes.col1}
            >
              Sign up for CandeClick
            </Typography>
            <Typography
              sx={{ fontSize: "1.7rem", color: "white", mr: "6rem" }}
              className={classes.col1}
            >
              Sign up for CandeClick and start using the Platform within a few
              minutes.
            </Typography>
            <button className={classes.button}>Sign Up Now</button>
          </Box>
          <Box sx={{ mb: "2rem", paddingRight: "9rem" }}>
            <img className={classes.img} src={Assest} alt="john" />
          </Box>
        </Box>
      </Box>

      <Box className={classes.about}>
        <Box className={classes.container}>
          <Box className={classes.col}>
            <Box sx={{ mb: "2rem", paddingLeft: "9rem" }}>
              <img className={classes.img} src={Leptop} alt="john" />
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "3.6rem", color: "white" }}
              className={classes.col1}
            >
              What You get?
            </Typography>
            <Typography
              sx={{ fontSize: "1.7rem", color: "white", mr: "6rem" }}
              className={classes.col1}
            >
              Copying the trades of other successful traders could not be
              easier. Few cents is all it costs, no hidden charges..
              <button className={classes.button}>Sign Up Now</button>
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className={classes.about}>
        <Box className={classes.container}>
          <Box
            className={classes.col}
            sx={{ backgroundColor: "#1c1d24", borderRadius: "10px" }}
          >
            <Typography
              sx={{ fontSize: "1.7rem", color: "white", mr: "6rem" }}
              className={classes.col1}
            >
              Join a community of collaborative traders and take control of your
              financial future.
              <button className={classes.button}>Trade Now</button>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.about}>
        <Box className={classes.container}>
          <Box className={classes.col}>
            <Box sx={{}}>
              <FormControl
                sx={{
                  m: 1,
                  width: 200,
                  border: "1px solid white",
                }}
              >
                <InputLabel id="demo-multiple-name-label">
                  <Typography sx={{ color: "white" }}>
                    What is Social Trading?
                  </Typography>
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  input={<OutlinedInput label="Name" />}
                >
                  {" "}
                  What is Social Trading?
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl
                sx={{
                  m: 1,
                  width: 200,
                  border: "1px solid white",
                }}
              >
                <InputLabel id="demo-multiple-name-label">
                  <Typography sx={{ color: "white" }}>
                    What is Copy Trading?
                  </Typography>
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  input={<OutlinedInput label="Name" />}
                >
                  {" "}
                  What is Social Trading?
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl
                sx={{
                  m: 1,
                  width: 200,
                  border: "1px solid white",
                }}
              >
                <InputLabel id="demo-multiple-name-label">
                  <Typography sx={{ color: "white" }}>
                    How CandeClick works?
                  </Typography>
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  input={<OutlinedInput label="Name" />}
                >
                  {" "}
                  What is Social Trading?
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl sx={{ width: 200, border: "1px solid white" }}>
                <InputLabel id="demo-multiple-name-label">
                  <Typography sx={{ color: "white" }}>
                    What Brokers do you support?
                  </Typography>
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  input={<OutlinedInput label="Name" />}
                >
                  {" "}
                  What is Social Trading?
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl
                sx={{
                  m: 1,
                  width: 200,

                  border: "1px solid white",
                }}
              >
                <InputLabel id="demo-multiple-name-label">
                  <Typography sx={{ color: "white" }}>
                    How do I connect to Webull?
                  </Typography>
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  input={<OutlinedInput label="Name" />}
                >
                  {" "}
                  What is Social Trading?
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl
                sx={{
                  m: 1,
                  width: 200,
                  border: "1px solid white",
                }}
              >
                <InputLabel id="demo-multiple-name-label">
                  <Typography sx={{ color: "white" }}>
                    How much does it cost?
                  </Typography>
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  input={<OutlinedInput label="Name" />}
                >
                  What is Social Trading?
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl
                sx={{
                  m: 1,
                  width: 200,
                  border: "1px solid white",
                }}
              >
                <InputLabel id="demo-multiple-name-label">
                  <Typography sx={{ color: "white" }}>
                    How to contact us?
                  </Typography>
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  input={<OutlinedInput label="Name" />}
                >
                  What is Social Trading?
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box sx={{ mb: "2rem", paddingRight: "9rem" }}>
            <img className={classes.img} src={Qna} alt="john" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
