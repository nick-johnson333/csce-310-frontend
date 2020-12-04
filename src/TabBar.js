import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
});

// PROBABLY USE react-tabs instead

const TabBar = () => {
    const classes = useStyles();
    const [tab, setTab] = React.useState(0);

    const handleTab = (event, newTab) => {
        setTab(newTab);
      };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={tab}
                onChange={handleTab}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Player" />
                <Tab label="Team" to="/team" />
                <Tab label="Game" />
                <Tab label="Season" />
            </Tabs>
        </Paper>
    )
 }

 export default TabBar;