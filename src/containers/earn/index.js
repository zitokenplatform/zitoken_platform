import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


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

function OutlinedButtons(props) {
    const { classes } = props;

    return (
      <div>
      <Button variant="outlined" color="secondary" className={classes.button}>
        Participate
      </Button> <br />
      <Button variant="outlined" color="secondary" className={classes.button}>
        Participate
      </Button>
      </div>
);
}

OutlinedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);


