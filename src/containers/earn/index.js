import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import style from "./style.css";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  h3 : {
    color: '#00ff00', 
  },
  input: {
    display: 'none',
  },
});

class Earn extends Component {
    componentDidMount = () => {
        localStorage.setItem("page", JSON.stringify(6));
    }
    render() {

function OutlinedButtons(props) {
  const { classes } = props;

  return (
      <div className={style.App}>
          <div className={style.AppHeader}>
              <h2 className={style.AppLogo}>Zitoken</h2>
              <p className={style.AppP}>Use ZITOKEN (ZIT) as credit to play all games on our platform</p>
              <button className={style.AppButtom} onClick={() => this.onStart()}>
                  START PLAYING
              </button>
          </div>
    <div>
    <h3> Reward  Programs  for  our  community.Join now ! <br />
    AVAILABLE ! 
    </h3> 
      <p> <a href="https://bitcointalk.org">https://bitcointalk.org</a> </p>
      <Button variant="outlined" color="secondary" className={classes.button}>
        Participate
      </Button> <br />
      <p> <a href="https://bitcointalk.org">https://bitcointalk.org</a> </p>
      <Button variant="outlined" color="secondary" className={classes.button}>
        Participate
      </Button>
    </div>
      </div>
  );
}

export default (Earn);
