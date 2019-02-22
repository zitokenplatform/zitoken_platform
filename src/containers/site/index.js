import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import style from "./style.css";

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
   
  },
});

class Site extends Component {
  constructor(props) {
    super(props);
  }
  onStart = () => {
    alert("Under development, check it out our Roadmap");
  }
  render() {
    const {classes} = this.props;
    return (
      <div className={style.App}>
        <div className={style.AppHeader}>
          <h1 className={style.AppLogo}>Zitoken</h1>
          <p className={style.AppP}>Use ZITOKEN (ZIT) as credit to play all games on our platform</p>
          <button className={style.AppButtom} onClick={() => this.onStart()}>
            START PLAYING
          </button>
        </div>
        <div className={style.content} id="overview" >
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

        <div className={style.AppExchange} id="exchanges">
          <h1>Exchanges</h1>
          <Grid container className={style.AppRodmap} alignItems="center">
            <Grid item><a href="https://forkdelta.app/#!/trade/0x9c04f0dc68c61efd2fc289987393a78b4a2494ea-ETH" target="_blank"><img src="/img/forkDex.png" className={style.imgExchnange} /></a></Grid>
            <Grid item><a href="https://tokendex.github.io/#!/trade/0x9c04f0dc68c61efd2fc289987393a78b4a2494ea-ETH" target="_blank"><img src="/img/tokenDex.png" className={style.imgExchnange} /></a></Grid>
          </Grid>
        </div>
        <div className={style.contenFaq} id="faq">
          <h1>FAQ</h1>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>What is ZITOKEN?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
              Zitoken platform is a blockchain game platform, on which is possible to play
              different games such as strategy games with (characters and gods) using ZITOKEN
              ZIT (our utility token). Platform is been designed to support a wide range of games
              developed on Blockchain Tecnology.
          </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Will ZITOKEN Platform support different blockchain protocols?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
              Yes. Platform will support different blockchain protocols.
          </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Is ZITOKEN (ZIT) listed on any exchange? </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
              Yes. We are listed on ForkDelta and TokenDex, soon will be listed on more exchanges.
          </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>What is the total supply of ZITOKEN (ZIT)?  </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                988 million. 
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>How does blockchain game developers make money on our platform? </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
              We pay 25% of the total revenue generated with every game. This payment is credited in the last day of the month to game developers.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Zitoken (ZIT) is it required to play all games on our platform? </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
              Yes. ZIT is required as credit to play all games on Zitoken platform.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Is the price fixed to buy tokens/credits?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
              Price may vary on different exchanges and on our platform, for this reason we are making partnerships only with trusted exchanges to avoid suspect schemes
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
        <div className={style.contenFuture} id="features">
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

export default withStyles(styles)(Site);
