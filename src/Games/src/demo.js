import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 370
  },
  media: {
    height: 160
  }
};

function MediaCard(props) {
    const { classes } = props;
   
    return (
   <Card className={classes.card}>
      <CardActionArea>
              <CardMedia
          className={classes.media}
          image="game-1.jpg"
              title="Game 1"
              />
            
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Game 1
          </Typography>
          <Typography component="p">
           Yeah !  I AM  PLAYING FROM  THE  OFFICE 
          </Typography>
        </CardContent>
         
              <CardMedia
                  className={classes.media}
                  image="game-2.jpg"
                  title="Game 2"
              />
              <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                      Game 2
          </Typography>
                  <Typography component="p">
                      Yeah !  I AM  PLAYING FROM  THE  OFFICE
          </Typography>
              </CardContent>
          </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Deposit ZIT
        </Button>
                <Button size="small" color="primary">
                    Withdraw ZIT
        </Button>
            </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
