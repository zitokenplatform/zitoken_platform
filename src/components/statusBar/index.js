import React from 'react';
import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Drawer from '@material-ui/core/Drawer';

import './style.css';
const drawerWidth = 240;
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    navButtom: {
        spacing: 10,
        marginRight: 20,
        width: "100%",
        backgroundColor: fade(theme.palette.common.white, 0),        
    },
    textNavButton:{
        fontSize: 19,
        fontWeight: 'bold',
        '&:hover': {
            color: "#00be8e",
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
    },
    bottomNavAtivity: {
        borderRadius: theme.shape.borderRadius,
        color: "#00be8e",

        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
    },
    bottomNav: {
        borderRadius: theme.shape.borderRadius,
        color: "#00be8e",
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
});
class StatusBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            setOpen: true,
        };
    }
    handleDrawerOpen = () => {
        this.setState({
            ...this.state,
            open: true
        });
    }

    handleDrawerClose = () => {
        this.setState({
            ...this.state,
            open: false
        });
    }
    handleChange = (event, value) => {
    };

    render() {
        const { classes, pageRoot } = this.props;
        const { open } = this.state;
        return (
            <div className={styles.root}>
                <AppBar position="static" color="default">
                    <Toolbar disableGutters={!open}>
                        <Hidden smUp>
                            <IconButton className={classNames(classes.menuButton, open && classes.hide)} color="inherit" onClick={this.handleDrawerOpen} aria-label="Open drawer">
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                        <Typography variant="h6" color="inherit">
                            <div className="logo">
                                <div className="logoIco">ZI</div>
                                <div className="logoText">token</div>
                            </div>
                        </Typography>
                        <Hidden xsDown>                           
                            <BottomNavigation showLabels className={classes.navButtom}  >
                                <BottomNavigationAction label="OVERVIEW" value="OVERVIEW" className={classes.textNavButton} />
                                <BottomNavigationAction label="EXCHANGES" value="EXCHANGES" className={classes.textNavButton}/>
                                <BottomNavigationAction label="FEATURES" value="FEATURES" className={classes.textNavButton}/>
                                <BottomNavigationAction label="REGISTER" value="REGISTER" className={classes.textNavButton} />
                                <BottomNavigationAction label="LOGIN" value="LOGIN" className={classes.textNavButton} />
                            </BottomNavigation>
                        </Hidden>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {<ChevronLeftIcon />}
                        </IconButton>                        
                    </div>
                    <Divider />
                    <List component="nav">
                        <ListItem button>
                            <ListItemText primary="OVERVIEW" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="EXCHANGES" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="FEATURES" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="REGISTER" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="LOGIN" />
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        );
    }
}

StatusBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatusBar);
