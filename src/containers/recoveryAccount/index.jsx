import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import style from "./style.css";

class RecoveryAccount extends Component {
    componentDidMount = () => {
        localStorage.setItem("page", JSON.stringify(6));
    }
    render() {
        return (
            <div className={style.root}>
                <div className={style.content}>
                    <div className={style.boxLogin}>
                        <div className={style.logoLogin}>
                            <div className={style.logoIcoLogin}>ZI</div>
                            <div className={style.logoTextLogin}>token</div>
                        </div>
                        <Grid container >                            
                            <Grid item md={12} className={style.form}>
                                <TextField
                                    id="filled-email-input"
                                    label="E-mail"
                                    className={style.inputText}
                                    type="email"
                                    name="email"
                                    variant="filled"
                                />
                            </Grid>                                            
                            <h1><a href="/login" className={style.textLink}>Back login</a></h1>
                            <Grid item md={12}>
                                <div className={style.buttomContent}>
                                    <Button variant="contained"  color="secondary" className={style.buttom}>
                                        Recovery my password
                                    </Button>
                                </div>                                
                            </Grid>
                        </Grid>
                    </div>
                    <h1 className={style.textAccount}>© 2019 Zitoken.me - All rights reserved</h1>
                </div>
            </div>
        );
    }
}

export default (RecoveryAccount);