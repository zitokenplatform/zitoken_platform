import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './style.css';

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
