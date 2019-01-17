import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {ResponsiveMenu} from 'material-ui-responsive-menu'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarmIcon';
import './style.css';
const menuList=[
    {
      text: 'test1',
      icon: undefined,
      tooltip: 'test1',
      icon: <AccessAlarmIcon/>,
      onTouchTap: ()=>{console.log('test1')}
    },
    {
      text: 'test2',
      icon: <AccessAlarmIcon/>,
      tooltip:'test2',
      onTouchTap: ()=>{console.log('test2')}
    },
    {
      text: 'test3',
      icon: <AccessAlarmIcon/>,
      tooltip:'test2',
      onTouchTap: ()=>{console.log('test2')}
    }
  ];

const styles = {
    root: {
        flexGrow: 1,
    },
};
class StatusBar extends React.Component {
    constructor(props) {
        super(props);
    }
    handleChange = (event, value) => {
    };

    render() {

        return (
            <div className={styles.root}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            <div className="logo">
                                <div className="logoIco">ZI</div>
                                <div className="logoText">token</div>
                            </div>
                        </Typography>
                        <div className="navRight">
                            <ResponsiveMenu menuList={menuList}/>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

StatusBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatusBar);
