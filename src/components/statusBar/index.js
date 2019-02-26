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

import style from './style.css';
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
        const { menuLogin } = this.props;
        if(menuLogin){

        }else{
            if (value === 1) {
                window.location.href = "/#overview";
            } else if (value === 2) {
                window.location.href = "/#exchanges";
            } else if (value === 3) {
                window.location.href = "/#features";
            } else if (value === 4) {
                window.location.href = "/#faq";
            } else if (value === 5) {
                window.location.href = "/register";
            } else if (value === 6) {
                window.location.href = "/login";
            } else {
                alert("No link!");
            }
        }     
        
        localStorage.setItem("page", JSON.stringify(value));        
        this.handleDrawerClose();
    
    }
    renderMenuLogin = () =>{
        const { classes } = this.props;
        const { open } = this.state;
        let pageRoot = JSON.parse(localStorage.getItem("page"));
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
                            <div className={style.logo}>
                                <div className={style.logoIco}>ZI</div>
                                <div className={style.logoText}>token</div>
                            </div>
                        </Typography>
                        <Hidden xsDown>
                            <BottomNavigation showLabels className={classes.navButtom}  >
                                <BottomNavigationAction label="GAMES" value="GAMES" className={pageRoot === 1 ? classes.bottomNavAtivity : classes.textNavButton} onClick={() => this.handleSetPage(1)} />
                                <BottomNavigationAction label="EARN ZIT" value="EARN ZIT" className={pageRoot === 2 ? classes.bottomNavAtivity : classes.textNavButton} onClick={() => this.handleSetPage(2)} />
                                <BottomNavigationAction label="BUY ZIT" value="BUY ZIT" className={pageRoot === 3 ? classes.bottomNavAtivity : classes.textNavButton} onClick={() => this.handleSetPage(3)} />                                
                            </BottomNavigation>
                        </Hidden>
                        <div className={style.navRight}>
                            <div className={style.textBalance}>BALANCE 198 ZIT
                            <IconButton onClick={this.handleDrawerClose}>
                                {<ChevronLeftIcon />}
                            </IconButton>
                            </div>
                            
                        </div>
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
                        <ListItem button className={classes.textNavButton} selected={pageRoot===1} onClick={() => this.handleSetPage(1)}>
                            <ListItemText primary="GAMES" />
                        </ListItem>
                        <ListItem button className={classes.textNavButton} selected={pageRoot===2} onClick={() => this.handleSetPage(2)}>
                            <ListItemText primary="EARN ZIT" />
                        </ListItem>
                        <ListItem button className={classes.textNavButton} selected={pageRoot===3} onClick={() => this.handleSetPage(3)}>
                            <ListItemText primary="BUY ZIT"  />
                        </ListItem>   
                        <ListItem button  onClick={() => this.handleSetPage(4)}>
                            <ListItemText primary="LOGOUT"  />
                        </ListItem>                      
                    </List>
                </Drawer>
            </div>
        );
    }
    renderMenuSite =() =>{
        const { classes } = this.props;
        const { open } = this.state;
        let pageRoot = JSON.parse(localStorage.getItem("page"));
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
                            <div className={style.logo}>
                                <div className={style.logoIco}>ZI</div>
                                <div className={style.logoText}>token</div>
                            </div>
                        </Typography>
                        <Hidden xsDown>
                            <BottomNavigation showLabels className={classes.navButtom}  >
                                <BottomNavigationAction label="OVERVIEW" value="OVERVIEW" className={pageRoot === 1 ? classes.bottomNavAtivity : classes.textNavButton} onClick={() => this.handleSetPage(1)} />
                                <BottomNavigationAction label="EXCHANGES" value="EXCHANGES" className={pageRoot === 2 ? classes.bottomNavAtivity : classes.textNavButton} onClick={() => this.handleSetPage(2)} />
                                <BottomNavigationAction label="FEATURES" value="FEATURES" className={pageRoot === 3 ? classes.bottomNavAtivity : classes.textNavButton} onClick={() => this.handleSetPage(3)} />
                                <BottomNavigationAction label="FAQ" value="FAQ" className={pageRoot === 4 ? classes.bottomNavAtivity : classes.textNavButton} onClick={() => this.handleSetPage(4)} />
                                <BottomNavigationAction label="REGISTER" value="REGISTER" className={pageRoot === 5 ? classes.bottomNavAtivity : classes.textNavButton} onClick={() => this.handleSetPage(5)} />
                                <BottomNavigationAction label="LOGIN" value="LOGIN" className={pageRoot === 6 ? classes.bottomNavAtivity : classes.textNavButton} onClick={() => this.handleSetPage(6)} />
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
                        <ListItem button className={classes.textNavButton} selected={pageRoot===1} onClick={() => this.handleSetPage(1)}>
                            <ListItemText primary="OVERVIEW" />
                        </ListItem>
                        <ListItem button className={classes.textNavButton} selected={pageRoot===2} onClick={() => this.handleSetPage(2)}>
                            <ListItemText primary="EXCHANGES" />
                        </ListItem>
                        <ListItem button className={classes.textNavButton} selected={pageRoot===3} onClick={() => this.handleSetPage(3)}>
                            <ListItemText primary="FEATURES"  />
                        </ListItem>
                        <ListItem button className={classes.textNavButton} selected={pageRoot===4} onClick={() => this.handleSetPage(4)} >
                            <ListItemText primary="FAQ" />
                        </ListItem>
                        <ListItem button className={classes.textNavButton} selected={pageRoot===5} onClick={() => this.handleSetPage(5)}>
                            <ListItemText primary="REGISTER"  />
                        </ListItem>
                        <ListItem button className={classes.textNavButton} selected={pageRoot===6} onClick={() => this.handleSetPage(6)}>
                            <ListItemText primary="LOGIN"  />
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        );
    }

    render() {
        const { menuLogin } = this.props;
        return (
            menuLogin?this.renderMenuLogin():this.renderMenuSite()
        );
    }
}

StatusBar.propTypes = {
    classes: PropTypes.object.isRequired,
    menuLogin: PropTypes.bool

};

const mapSateToProps = store => ({
    
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
