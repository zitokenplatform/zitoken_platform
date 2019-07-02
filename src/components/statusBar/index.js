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

// REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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
    textNavButton: {
        fontSize: 19,
        fontWeight: 'bold',
        '&:hover': {
            color: "#00be8e",
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
    },
    bottomNavAtivity: {
        borderRadius: theme.shape.borderRadius,
        fontSize: 19,
        fontWeight: 'bold',
        color: "#00be8e",
        backgroundColor: fade(theme.palette.common.white, 0.30),
        '&:hover': {
            color: "#00be8e",
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
            setOpen: true
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

    handleSetPage = value => {
        if (value === 1) {
            window.location.href = "/#overview";
        } else if (value === 2) {
            window.location.href = "/#exchanges";
        } else if (value === 3) {
            window.location.href = "/#features";
        } else if (value === 4) {
            window.location.href = "/#faq";
        } else if (value === 5) {
            window.location.href = "/#exploregame";
        } else if (value === 6) {
            window.location.href = "/#backthiscause"
        } else {
            alert("No link!");
        }
        this.handleDrawerClose();
    }

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
                                <BottomNavigationAction label="EXPLORE GAMES" value="EXPLORE" className={classes.textNavButton} onClick={() => this.handleSetPage(5)} />                                
                                <BottomNavigationAction label="OVERVIEW" value="OVERVIEW" className={classes.textNavButton} onClick={() => this.handleSetPage(1)} />
                                <BottomNavigationAction label="EXCHANGES" value="EXCHANGES" className={classes.textNavButton} onClick={() => this.handleSetPage(2)} />
                                <BottomNavigationAction label="FEATURES" value="FEATURES" className={classes.textNavButton} onClick={() => this.handleSetPage(3)} />
                                <BottomNavigationAction label="FAQ" value="FAQ" className={classes.textNavButton} onClick={() => this.handleSetPage(4)} />
                                <BottomNavigationAction label="BACK THIS CAUSE" value="BACKTHISCAUSE" className={classes.textNavButton} onClick={() => this.handleSetPage(6)} />
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
                        <ListItem button className={classes.textNavButton} onClick={() => this.handleSetPage(5)}>
                            <ListItemText primary="EXPLORE GAMES" />
                        </ListItem>
                        <ListItem button className={classes.textNavButton} onClick={() => this.handleSetPage(1)}>
                            <ListItemText primary="OVERVIEW" />
                        </ListItem>                        
                        <ListItem button className={classes.textNavButton} onClick={() => this.handleSetPage(2)}>
                            <ListItemText primary="EXCHANGES" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="FEATURES" className={classes.textNavButton} onClick={() => this.handleSetPage(3)} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="FAQ" className={classes.textNavButton} onClick={() => this.handleSetPage(4)} />
                        </ListItem>
                        <ListItem button className={classes.textNavButton} onClick={() => this.handleSetPage(6)}>
                            <ListItemText primary="BACK THIS CAUSE" />
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        );
    }
}

StatusBar.propTypes = {
    classes: PropTypes.object.isRequired,
    pageRoot: PropTypes.number
};

const mapSateToProps = store => ({
    pageRoot: store.site.valuePage
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
        },
        dispatch
);

export default connect(
    mapSateToProps,
    mapDispatchToProps
)(withStyles(styles)(StatusBar));
