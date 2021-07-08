import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import HomeIcon from '@material-ui/icons/Home';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TimelineIcon from '@material-ui/icons/Timeline';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: '#ffffff'
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },

}));


const DashboardHeader = () => {
    const classes = useStyles();

    

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            <ListItem button onClick={() => window.location.href = "/dashboard"} >
                <ListItemIcon><HomeIcon style={{ color: '#7527e0' }} /></ListItemIcon>
                <ListItemText style={{ color: '#7527e0' }} primary={'Dashboard'} />
            </ListItem>
          </List>
          <List>
            <ListItem button onClick={() => window.location.href = "/dashboard"} >
                <ListItemIcon><TimelineIcon style={{ color: '#7527e0' }} /></ListItemIcon>
                <ListItemText style={{ color: '#7527e0' }} primary={'Analytics'} />
            </ListItem>
          </List>
        </div>
    );



    return (
      <>
        {['left'].map((anchor) => (
                  <React.Fragment key={anchor}>
                  <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                      {list(anchor)}
                  </Drawer>
                  </React.Fragment>
        ))}
        <AppBar style={{ backgroundColor: '#7527e0' }} position="static">
            <Toolbar>
            <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                Dashboard
            </Typography>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Toolbar>
        </AppBar>
      </>
    )
}

export default DashboardHeader
