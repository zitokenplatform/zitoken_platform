import React, { Component } from 'react';
import StatusBar from './component/statusBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import style from "./App.css";

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <StatusBar />
        <div className={style.AppHeader}>
          <h1 className={style.AppLogo}>Zitoken</h1>
          <p className={style.AppP}>Grow your coins playing on our game platform & Earn interest rates holding your BTC with us</p>
          <button variant="contained" className={style.AppButtom}>
            START PLAYING
          </button>
        </div>
        <div>
          <h1>OVERVIEW</h1>
          <strong>About Zitoken Platform</strong>
          <p>Zitoken platform is a blockchain game platform, on which is possible to play different games
            such as trading games and strategy games using ZITOKEN ZIT (our utility token). There is
            another funtion that allows users to earn interest rates holding their BTC with us in a level
            of security in (cold wallet and hot wallet). <br/><br/>
            <a href="#">Whitepaper</a>
          </p>
          <strong>Zitoken (ZIT)</strong>
          <p>Zitoken (ZIT) is our utility token and fuel on our platform, community can use it to fund their accounts 
            to play all games on the platform and to participate at our official events. Zitoken (ZIT) is already available 
            to buy on couple of exchanges and soon we plan to add our utility token on more exchanges.
          </p>
          <strong>Token Specifications</strong>
          <p>Protocol: ERC20<br/><br/>
          <a href="#">Explorer</a>
          </p>
          <p>
          Name: Zitoken <br/>
          Symbol: ZIT <br/>
          Decimals: 18 <br/>
          Total Supply: 988 million <br/><br/>

          ICO: No<br/>
          Rewards: Yes<br/>
          </p>
          <strong>Roadmap</strong>
          <Grid container className={style.AppRodmap} spacing={16}>
            <Grid item><strong>Q4 2018</strong><p>First implementation</p></Grid>
            <Grid item><strong>Q1 2019</strong><p>Official Launch</p></Grid>
            <Grid item><strong>Q4 2019</strong><p>First implementation of new games + Update</p></Grid>
            <Grid item><strong>Q1 2020</strong><p>Second implementation of new games + Update</p></Grid>
            <Grid item><strong>Q4 2020</strong><p>Third implementation  of new games + Update</p></Grid>
          </Grid>
          <div className={style.AppFoot}>
            <strong>Exchanges</strong>
            <Grid container className={style.AppRodmap} spacing={16}>
              <Grid item></Grid>
              <Grid item></Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default (App);
