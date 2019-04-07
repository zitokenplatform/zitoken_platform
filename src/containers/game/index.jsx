import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Slide from '@material-ui/core/Slide';

import style from "./style.css";

const DialogTitle = withStyles(theme => ({
    root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit * 2,
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing.unit,
        top: theme.spacing.unit,
        color: theme.palette.grey[500],
    },
}))(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    Transition = (props) => {
        return <Slide direction="up" {...props} />;
    }
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    componentDidMount = () => {
        localStorage.setItem("page", JSON.stringify(1));
    }
    render() {
        return (
            <div>
                <div className={style.root}>
                    <div className={style.content}>
                        <h1 className={style.textAccount}><a onClick={this.handleClickOpen} href="#" className={style.textLink}>DEPOSIT ZIT</a></h1>
                        <h1 className={style.textAccount}>© 2019 Zitoken.me - All rights reserved</h1>
                    </div>
                </div>
                <Dialog
                    onClose={this.handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={this.state.open}
                >
                    <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                        {"Deposit ZIT to the following wallet"}
                    </DialogTitle>
                    <DialogContent>
                        <div className={style.contentWallet}>
                            <h2 className={style.textWallet}>ZIT Address</h2>
                            <Grid container
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                                <Grid item xs={12} sm={10}>
                                    <TextField
                                        id="adress"
                                        defaultValue="0x9c04f0dc68C61EFd2Fc289987393A78B4A2494Ea"
                                        margin="normal"
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                          }}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <span><a href="#" className={style.textWalletCopy}>COPY</a></span>
                                </Grid>
                            </Grid>
                            <h2 className={style.textWallet}>Do not send to a different address, otherwise will result in the loss of your tokens.</h2>
                            <h1 className={style.textWalletTrasaction}>Transactions</h1>
                            <List>
                                <ListItem alignItems="flex-start">
                                    <Grid container
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                    >
                                        <Grid item xs={12} sm={12}>
                                            <span className={style.textWalletLine}>April, 20th, 2019</span>
                                        </Grid>
                                        <Grid item xs={8} sm={8}>
                                            <span className={style.textWalletLine}>Order number: #0006788</span>
                                        </Grid>
                                        <Grid item xs={4} sm={4}>
                                            <span className={style.textWalletLine}>167 ZIT</span>
                                        </Grid>
                                    </Grid>
                                </ListItem>                                
                            </List>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

Game.propTypes = {
};



export default Game;