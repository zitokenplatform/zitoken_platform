import React, { Component } from 'react';
import StatusBar from '../../component/statusBar';
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
        <div className={style.content}>
          <h1>OVERVIEW</h1>
          <strong>About Zitoken Platform</strong>
          <p>Zitoken platform is a blockchain game platform, on which is possible to play different games
            such as trading games and strategy games using ZITOKEN ZIT (our utility token). There is
            another funtion that allows users to earn interest rates holding their BTC with us in a level
            of security in (cold wallet and hot wallet). <br /><br />
            <a href="#">Whitepaper</a>
          </p>
          <strong>Zitoken (ZIT)</strong>
          <p>Zitoken (ZIT) is our utility token and fuel on our platform, community can use it to fund their accounts
            to play all games on the platform and to participate at our official events. Zitoken (ZIT) is already available
            to buy on couple of exchanges and soon we plan to add our utility token on more exchanges.
          </p>
          <strong>Token Specifications</strong>
          <p>Protocol: ERC20<br /><br />
            <a href="#">Explorer</a>
          </p>
          <p>
            Name: Zitoken <br />
            Symbol: ZIT <br />
            Decimals: 18 <br />
            Total Supply: 988 million <br /><br />

            ICO: No<br />
            Rewards: Yes<br />
          </p>
          <strong>Roadmap</strong>
          <Grid container className={style.AppRodmap} spacing={16}>
            <Grid item xs={12} sm={2}><p className={style.textBlue}>Q4 2018</p><p className={style.textSmall}>First implementation</p></Grid>
            <Grid item xs={12} sm={2}><p className={style.textBlue}>Q1 2019</p><p className={style.textSmall}>Official Launch</p></Grid>
            <Grid item xs={12} sm={2}><p className={style.textBlue}>Q4 2019</p><p className={style.textSmall}>First implementation of new games + Update</p></Grid>
            <Grid item xs={12} sm={3}><p className={style.textBlue}>Q1 2020</p><p className={style.textSmall}>Second implementation of new games + Update</p></Grid>
            <Grid item xs={12} sm={3}><p className={style.textBlue}>Q4 2020</p><p className={style.textSmall}>Third implementation  of new games + Update</p></Grid>
          </Grid>
        </div>

        <div className={style.AppExchange}>
          <h1>Exchanges</h1>
          <Grid container className={style.AppRodmap}>
            <Grid item><a href="#"><img src="/img/forkDex.png" className={style.imgExchnange} /></a></Grid>
            <Grid item><a href="#"><img src="/img/tokenDex.png" className={style.imgExchnange} /></a></Grid>
          </Grid>
        </div>
        <div className={style.contenFuture}>
          <h1>FEATURES</h1><br />
          <strong>Earn coins</strong>
          <ul>
            <li>Playing on our game platform</li>
            <li>Claiming free coins on our platform</li>
            <li>Holding your BTC with us to receive interest rates</li>
          </ul>
        </div>
        <div className={style.AppFoot}>
          <div className={style.textFoot}>
            <spam>© 2019 Zitoken.me - All rights reserved</spam>
          </div>
          <div className={style.AppFootLink}>
            <Grid container spacing={16}>
              <Grid item><a href="#">Github</a></Grid>
              <Grid item><a href="#">Bitcointalk</a></Grid>
              <Grid item><a href="#">Twitter</a></Grid>
              <Grid item><a href="#">Discord</a></Grid>
              <Grid item><a href="#">Support</a></Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default (App);
