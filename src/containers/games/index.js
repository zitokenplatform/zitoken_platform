import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import style from "./style.css";


class Games extends Component {
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
            <Card className={classes.card}>
    <CardActionArea>
        <CardMedia
        className={classes.media}
        image="game-1.jpg"
        title="GAMES"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Games 1
            </Typography>
            <Typography component="p">
            Here is  coming  new  game !
        </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
        </Button>
        </CardActions>
        </Card>
    );
}                    
    </div>
                    <h1 className={style.textAccount}>© 2019 Zitoken.me - All rights reserved</h1>
                </div>
            </div>
        );
    }
}


export default (Games);