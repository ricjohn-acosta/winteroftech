import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Forum, Home, People } from "@mui/icons-material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BasicTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        paddingLeft: 30,
        paddingRight: 30,
        background: "#242526",
        boxShadow: "#3e4042 0px -1px 1px inset",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          TabScrollButtonProps={{ style: { background: "red" } }}
          TabIndicatorProps={{ style: { background: "#F1F6F9" } }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            icon={<Home />}
            iconPosition={"start"}
            sx={{
              color: "white",
              "&.Mui-selected": {
                color: "white",
                background: "#394867",
              },
              "&.MuiTab-root": {
                textTransform: "none",
              },
            }}
            label={<Typography variant={"subtitle2"}>Home</Typography>}
            {...a11yProps(0)}
          />
          <Tab
            icon={<People />}
            iconPosition={"start"}
            sx={{
              color: "white",
              "&.Mui-selected": {
                color: "white",
                background: "#394867",
              },
              "&.MuiTab-root": {
                textTransform: "none",
              },
            }}
            label={<Typography variant={"subtitle2"}>People</Typography>}
            {...a11yProps(0)}
          />
          <Tab
            icon={<Forum />}
            iconPosition={"start"}
            sx={{
              color: "white",
              "&.Mui-selected": {
                color: "white",
                background: "#394867",
              },
              "&.MuiTab-root": {
                textTransform: "none",
              },
            }}
            label={<Typography variant={"subtitle2"}>Messaging</Typography>}
            {...a11yProps(0)}
          />{" "}
        </Tabs>
      </Box>
      {/*<TabPanel value={value} index={0}>*/}
      {/*  Item One*/}
      {/*</TabPanel>*/}
      {/*<TabPanel value={value} index={1}>*/}
      {/*  Item Two*/}
      {/*</TabPanel>*/}
      {/*<TabPanel value={value} index={2}>*/}
      {/*  Item Three*/}
      {/*</TabPanel>*/}
    </Box>
  );
};

export default BasicTabs;
