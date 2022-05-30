import logo from './logo.svg';
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import Member from './components/showMember/showMember.js';
import Create from './components/createMember/createMember.js';
import './App.css';
import useStyles from './styles'

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className = {classes.heading} variant="h2" align="center"> Member Create & Show </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="strect">
              <Grid items xs = {12} sm = {7}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <Member/>
                </AppBar>
              </Grid>
              <Grid items xs = {12} sm = {4}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <Create/>
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
 