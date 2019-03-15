import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import style from "./style.css";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 100,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.25,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -10,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -10,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 10%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 160,
    right: 200,
    top: 50,
    bottom: 10,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 180,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -20,
    left: 'calc(70% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

const images = [
  {
    url: 'forkDex.png',
    title: 'Fork Delta',
    width: '50%',
  },

  {
    url: 'tokenDex.png',
    title: 'Token DEX',
    width: '50%',
  },
];

class Buy extends Component {
    componentDidMount = () => {
        localStorage.setItem("page", JSON.stringify(6));
    }
    render() {

function ButtonBases(props) {
  const { classes } = props;

    return (
        
            <div className={style.root}>
                <div className={style.content}>
                    <div className={style.boxLogin}>
                        <div className={style.logoLogin}>
                            <div className={style.logoIcoLogin}>ZI</div>
                            <div className={style.logoTextLogin}>token</div>
                        </div>
      <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
      </div>


  );
}


export default (Buy);