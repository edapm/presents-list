import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListIcon from '@material-ui/icons/List';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import * as firebase from "firebase/app";
import "firebase/auth";
import Header from "./Header";
import MyList from "./MyList";
import OtherList from "./OtherList";

const auth = firebase.auth();

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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});


const Menu = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return auth.currentUser && (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        centered
      >
        <Header {...a11yProps(0)}></Header>&nbsp;
        <Tab label="My List" icon={<AccountCircleIcon/>} {...a11yProps(1)} />
        <Tab label="Other Lists"icon={<ListIcon />} {...a11yProps(2)} />
        <Tab label="Logout" onClick={() => auth.signOut()} icon={<ExitToAppIcon />} {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={1}>
        <MyList></MyList>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OtherList></OtherList>
      </TabPanel>
    </Paper>
  );
};

export default Menu;