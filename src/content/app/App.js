import React, { Component } from 'react';
import StatusBar from '../../component/statusBar';
import Grid from '@material-ui/core/Grid';
import style from "./App.css";

class App extends Component {
  constructor(props){
    super(props);
  }
  onStart = () => {
    alert("Under development, check it out our Roadmap");
  }
  render() {
    document.title = 'Zitoken- Blockchain Game Platform';
    return (
      <div className={style.App}>
        <StatusBar />
        <div className={style.AppHeader}>
          <h1 className={style.AppLogo}>Zitoken</h1>
          <p className={style.AppP}>Use ZITOKEN (ZIT) as credit to play all games on our platform</p>
          <button  className={style.AppButtom} onClick={()=>this.onStart()}>
            START PLAYING
          </button>
        </div>
        <div className={style.content}>
          <h1>OVERVIEW</h1>
          <strong>About Zitoken Platform</strong>
          <p className={style.textContent}>Zitoken platform is a blockchain game platform, on which is possible to play different games such as trading games and strategy games using ZITOKEN ZIT (our utility token) , platform is 
            been designed to support a wide range of games developed on Blockchain Tecnology, initially the platform will support only games developed on Ethereum Blockchain, but gradually will support others protocols. <br /><br />
            <a href="/whitepaper/Whitepaper-Zitoken.pdf">Whitepaper</a>
          </p>
          <strong>Zitoken (ZIT)</strong>
          <p className={style.textContent}>Zitoken (ZIT) is our utility token and fuel on our platform, community can use it to fund their accounts
            to play all games on the platform and to participate at our official events. Zitoken (ZIT) is already available
            to buy on couple of exchanges and soon we plan to add our utility token on more exchanges.
          </p>
          <strong>Token Specifications</strong>
          <p className={style.textContent}>Protocol: ERC20<br /><br />
            <a href="https://etherscan.io/token/0x9c04f0dc68c61efd2fc289987393a78b4a2494ea">Explorer</a>
          </p>
          <p className={style.textContent}>
            Name: Zitoken <br />
            Symbol: ZIT <br />
            Decimals: 18 <br />
            Total Supply: 988 million <br /><br />

            ICO: No<br />
            Rewards: Yes<br />
          </p>
          <strong>Roadmap</strong>
          <Grid container className={style.AppRodmap} spacing={16}>
            <Grid item xs={12} sm={2}><p className={style.textBlue}>Q4 2018</p><p className={style.textSmall}>Core Development</p></Grid>
            <Grid item xs={12} sm={2}><p className={style.textBlue}>Q1 2019</p><p className={style.textSmall}>Beta Launch</p></Grid>
            <Grid item xs={12} sm={2}><p className={style.textBlue}>Q2 2019</p><p className={style.textSmall}>First implementation of new games + Update</p></Grid>
            <Grid item xs={12} sm={3}><p className={style.textBlue}>Q2 2020</p><p className={style.textSmall}>Second implementation of new games + Update</p></Grid>
            <Grid item xs={12} sm={3}><p className={style.textBlue}>Q1 2021</p><p className={style.textSmall}>Third implementation  of new games + Update</p></Grid>
          </Grid>
          
          <h1>Team</h1>          
          <strong>MANAGEMENT</strong>
          <p>Leandro Alves, CEO Zitoken</p>
          <p>Leandro is founder of PW7 , a blockchain engagement agency that provides Exchange Listing, Token Creation (ERC20) and Bounty Programs on TGE,  he also contributed on different other blockchain projects as consultant/growth hacker such as SID (Share Internet Data) and Investa.
             <br />https://www.linkedin.com/in/leandro-alves-122665137             
          </p>
          <strong>PROJECT TEAM / LEADER DEVELOPER</strong>
          <p>Jorge Almeida, Leader Developer Zitoken </p>
          <p>Software engineer/System analyst.
             <br />https://www.linkedin.com/in/jorge-william-90586b54/            
          </p>
        </div>

        <div className={style.AppExchange}>
          <h1>Exchanges</h1>
          <Grid container className={style.AppRodmap} alignItems="center">
            <Grid item><a href="https://forkdelta.app/#!/trade/0x9c04f0dc68c61efd2fc289987393a78b4a2494ea-ETH" target="_blank"><img src="/img/forkDex.png" className={style.imgExchnange} /></a></Grid>
            <Grid item><a href="https://tokendex.github.io/#!/trade/0x9c04f0dc68c61efd2fc289987393a78b4a2494ea-ETH" target="_blank"><img src="/img/tokenDex.png" className={style.imgExchnange} /></a></Grid>
          </Grid>
        </div>
        <div className={style.contenFuture}>
          <h1>FEATURES</h1><br />
          <ul>
            <li>Use ZITOKEN (ZIT) as credit to play all games on our platform</li>
            <li>Claim free ZIT on our platform</li>
            <li>Earn bonus to play specific games</li>
          </ul>          
        </div>        
        <div className={style.AppFoot}>
          <div className={style.textFoot}>
            <spam>© 2019 Zitoken.me - All rights reserved</spam>
          </div>

          <div className={style.AppFootLink}>
            <Grid container spacing={16}>
              <Grid item><a href="https://github.com/ZitokenProject">Github</a></Grid>
              <Grid item><a href="https://bitcointalk.org/index.php?topic=5101230">Bitcointalk</a></Grid>
              <Grid item><a href="https://www.twitter.com/zitoken">Twitter</a></Grid>
              <Grid item><a href="https://t.me/zitoken">Telegram</a></Grid>
              <Grid item><a href="mailto:support@zitoken.me">Support</a></Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default (App);
