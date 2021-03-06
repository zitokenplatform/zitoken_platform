import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import style from "./style.css";

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlaceIcon from '@material-ui/icons/Place';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
// REDUX
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {setAlert} from "../app/site/redux/appAction";

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,

  },
});
const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: '#b3b3b3',
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#ff6c5c',
  },
})(LinearProgress);

class Site extends Component {
  constructor(props) {
    super(props);
  }
  onStart = () => {
    alert("We are in Beta phase");
  }
  copyAddress = address => {
    let { setAlert } = this.props;
    const element = document.createElement("textarea");
    element.value = address;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
    let msn = {
      type: "S",
      messenger:"copied successfully",
      active:true,
    }
    setAlert(msn);
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={style.App}>
        <div className={style.AppHeader}>
          <h1 className={style.AppLogo}>Crowdfunding for blockchain games & traditional games</h1>
          <p className={style.AppP}>Use Bitcoin and ZITOKEN (ZIT) as credit to support  the development of  amazing games</p>
          <button className={style.AppButtom} onClick={() => this.onStart()}>
            CREATE  CAMPAIGN
          </button>
        </div>
        <div className={style.content} id="exploregame" >
          <Grid container spacing={16}>
            <Grid item xs={4} sm={4}><p className={style.textGameTypeLeft}>EOS GAMES</p></Grid>
            <Grid item xs={4} sm={4}><p className={style.textGameTypeCenter}>ETHEREUM GAMES</p></Grid>
            <Grid item xs={4} sm={4}><p className={style.textGameTypeRiight}>TRON GAMES</p></Grid>
          </Grid>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12}>
                  <img src="/img/camp.jpg" className={style.imgExplore} />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <p className={style.textGameToBeBlack}>To be announced</p>
                  <p className={style.textGameToBe}>To be announced</p>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <div className={style.contentIcon}>
                    <PlaceIcon  className={style.pinIcon}/>
                    <span className={style.textPinIcon}>Cyprus</span>
                  </div>
                </Grid>  
                <Grid item  xs={12}  sm={12}>
                  <div className={style.progressBar}> 
                    <BorderLinearProgress className={style.progressBar}  variant="determinate" value={1} />
                  </div>                  
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Grid container spacing={16}>
                    <Grid item xs={4} sm={4}>60 Days left</Grid>
                    <Grid item xs={4} sm={4} >Raised</Grid>
                    <Grid item xs={2} sm={2}>0 BTC</Grid>
                    <Grid item xs={2} sm={2}>0 ZIT</Grid>
                  </Grid>  
                </Grid> 
                <Grid item xs={12} sm={12}>
                  <div className={style.contentButtom}>
                    <button className={style.btExploreGame}>
                      BACK THIS GAME
                    </button>
                  </div>                  
                </Grid>                  
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={4}>
                <Grid item sm={12}>
                  <img src="/img/camp.jpg" className={style.imgExplore} />
                </Grid>    
                <Grid item xs={12} sm={12}>
                  <p className={style.textGameToBeBlack}>To be announced</p>
                  <p className={style.textGameToBe}>To be announced</p>
                </Grid>  
                <Grid item xs={12} sm={12}>
                  <div className={style.contentIcon}>
                    <PlaceIcon  className={style.pinIcon}/>
                    <span className={style.textPinIcon}>Russia</span>
                  </div>
                </Grid>  
                <Grid item xs={12} sm={12}>
                  <div className={style.progressBar}> 
                    <BorderLinearProgress className={style.progressBar}  variant="determinate" value={1} />
                  </div>  
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Grid container spacing={16}>
                    <Grid item xs={4} sm={4}>30 Days left</Grid>
                    <Grid item xs={4} sm={4} >Raised</Grid>
                    <Grid item xs={2} sm={2}>0 BTC</Grid>
                    <Grid item xs={2} sm={2}>0 ZIT</Grid>
                  </Grid>  
                </Grid> 
                <Grid item xs={12} sm={12}>
                  <div className={style.contentButtom}>
                    <button className={style.btExploreGame}>
                      BACK THIS GAME
                    </button>
                  </div>                  
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>        
        <div className={style.content} id="overview" >
          <h1>OVERVIEW</h1>
          <strong>About Zitoken Platform</strong>
          <p className={style.textContent}>
            Zitoken platform is a crowdfunding for blockchain games & traditional games, on which is possible to fund the development of different games such as strategy games with (characters and gods) using ZITOKEN ZIT as credit, Bitcoin option is available to contribute as well. Platform is been designed to support a wide range of games developed on Blockchain Technology.
            Initially the platform will accept only ZIT and BTC as payment method and soon we will be considering new payment methods to contribute.
            <br /><br />
            <a href="/whitepaper/Whitepaper-Zitoken.pdf">Whitepaper</a>
          </p>
          <strong>ZITOKEN (ZIT)</strong>
          <p className={style.textContent}>ZITOKEN (ZIT)  is our utility token and fuel on our platform, community/users can use it to fund the development of games and to participate
            at our official events. ZITOKEN (ZIT) is already available to buy on couple of exchanges and soon we plan to add  our utility token on more exchanges.
          </p>
          <strong>Token Specifications</strong>
          <p className={style.textContent}>Protocol: ERC20<br /><br />
            <a href="https://etherscan.io/token/0x9c04f0dc68c61efd2fc289987393a78b4a2494ea">Explorer</a>
          </p>
          <p className={style.textContent}>
            Name:  ZITOKEN   <br />
            Symbol: ZIT <br />
            Decimals: 18 <br />
            Total Supply: 988 million <br /><br />

            ICO: No<br />
            Rewards: Yes<br />
          </p>
          <strong>Roadmap</strong>
          <Grid container className={style.AppRodmap} spacing={16}>
            <Grid item xs={12} sm={2}><p className={style.textBlue}>Q4 2018</p><p className={style.textSmall}>Core Development of Zitoken Platform</p></Grid>
    <Grid item xs={12} sm={2}><p className={style.textBlue}>Q4 2019</p><p className={style.textSmall}>Beta Test Phase</p></Grid>
            <Grid item xs={12} sm={2}><p className={style.textBlue}>Q4 2019 - Q1 2020</p><p className={style.textSmall}>Win-win Partnerships</p></Grid>
            <Grid item xs={12} sm={2}><p className={style.textBlue}>Q1 2020</p><p className={style.textSmall}>Official Launch of Zitoken Platform </p></Grid>
            <Grid item xs={12} sm={3}><p className={style.textBlue}>Q2 2020</p><p className={style.textSmall}>New update to accept a wide range of (campaigns)</p></Grid>
            <Grid item xs={12} sm={3}><p className={style.textBlue}>Q1 2021</p><p className={style.textSmall}>New partnerships to be announced</p></Grid>
            <Grid item xs={12} sm={3}><p className={style.textBlue}>2022-2030</p><p className={style.textSmall}>New products & Causes to be explored</p></Grid>
          </Grid>

          <h1>Team</h1>
          <strong>MANAGEMENT</strong>
          <p>Leandro Alves, General Manager Zitoken</p>
          <p>Leandro is founder of PW7 , a blockchain engagement agency that provides Marketing support,
            he also contributed on different other blockchain projects as consultant/growth hacker.
            <br />https://www.linkedin.com/in/leandro-alves-122665137
          </p>
          <strong>PARTNER DEVELOPER</strong>
          <p>Djalma Bina, Developer to test Zitoken tools</p>
          <p>Back-end/Font-end.</p>
          <p> Djalma is an experienced full stack developer over 25 years working with software development and systems,
            has strong knowledge about C++ , Python and Lisp, started his career from 90's years working with C++ ANSI Standard .
             <br />https://www.linkedin.com/in/djalmabina/
          </p>
        </div>
        <div className={style.AppExchange} id="exchanges">
          <h1>Partners</h1>
          <Grid container className={style.AppRodmap} alignItems="center">
            <Grid item><a href="https://forkdelta.app/#!/trade/0x9c04f0dc68c61efd2fc289987393a78b4a2494ea-ETH" target="_blank"><img src="/img/forkDex.png" className={style.imgExchnange} /></a></Grid>
            <Grid item><a href="https://www.zitoken.me" target="_blank"><img src="/img/tokenDex.png" className={style.imgExchnange} /></a></Grid>
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
                Zitoken platform is a crowdfunding for blockchain games, on which is possible to fund the development of different games such as strategy games with
                (characters and gods) using ZITOKEN ZIT (our utility token) as credit.
                Platform is been designed to support a wide range of game campaigns developed on Blockchain Technology.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Will ZITOKEN Platform accept different blockchain protocols?</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Yes. Platform will accept different blockchain protocols.
          </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Is ZITOKEN (ZIT) listed on any exchange? </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Yes. We are listed on couple exchanges, soon will be listed on more exchanges.
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
              <Typography className={classes.heading}>
                Will game developers receive any amount raised on our platform even if not reach the goal ? Is AML/KYC mandatory to reiceive their funds ?
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Yes. Developers will receive their funds even if not reach the goal. AML/KYC compliance is mandatory otherwise the funds will be blocked and returned to backers.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                Zitoken platform takes any fee of the total raised?
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                We take 10% of the total raised on our platform.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
        <div className={style.contenFuture} id="features">
          <h1>FEATURES</h1><br />
          <ul>
             <li>
              Zitoken Platform unifies blockchain game campaigns and traditional game campaigns in a single platform
            </li>
              >
             <li>
              Zitoken Platform connect a wide range of games with game lovers
            </li>
            <li>
              Use ZITOKEN (ZIT) as credit to support all games on our platform
            </li>
            <li>
              Earn rewards to support the development of specific games.
            </li>
            <li>
              Track and add coupons from gaming industry.
            </li>
          </ul>
        </div>
        
        <div className={style.AppFoot}>
          <div className={style.textFoot}>
            <spam>© 2019 Zitoken - All rights reserved</spam>
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
Site.propTypes = {
  setAlert: PropTypes.func,
};
const mapSateToProps = store => ({});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
          setAlert
        },
        dispatch
);
export default connect(
  mapSateToProps,
  mapDispatchToProps
) (withStyles(styles)(Site));
