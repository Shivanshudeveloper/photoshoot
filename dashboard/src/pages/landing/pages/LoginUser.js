import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import queryString from 'query-string';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { auth } from "../Firebase/index";
import { API_SERVICE } from '../config/URI';
import axios from 'axios';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://www.wallpaperflare.com/static/764/665/82/nikon-d5-camera-dslr-digital-wallpaper.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginUser({ location }) {
    const classes = useStyles();
    const [email, setemail] = React.useState('');
    const [password, setpassword] = React.useState('');

    const login = () => {
        auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            auth.onAuthStateChanged(function(user) {
                if (user) {
                    axios.get(`${API_SERVICE}/api/v1/main/getuserinfo/${email}`)
                        .then((response) => {
                            sessionStorage.setItem("type", "user");
                            sessionStorage.setItem("email", email);
                            sessionStorage.setItem("ordernumber", response.data.ordernumber);
                            sessionStorage.setItem("fullname", response.data.fullname);
                            window.location.href = "/dashboards";
                        }).catch(err => console.log(err));
                } else {
                    console.log("No User");
                }
            });
        })
        .catch(function(error) {
            var errorCode = error.code;
            if ( errorCode === "auth/wrong-password" ) {
                alert("Wrong Password");
            } else if ( errorCode === "auth/user-not-found" ) {
                alert("No User Found");
            }
        });
    }

    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <center>
                <a href="/">
                    <img className="w-25" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1620378077/photoshooted/Photoshooted_A_u2hjii.png" />
                </a>
            </center>
            <h4 style={{ color: '#7527e0' }}>
              Welcome Back
            </h4>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={email} 
                onChange={(e) => setemail(e.target.value)}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={password} 
                onChange={(e) => setpassword(e.target.value)}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <a onClick={login} class="btn btn-block btn-primary mb-2 mt-2 btn-lg font-weight-medium auth-form-btn" href="#!">LOGIN</a>
              <Grid container>
                <Grid item>
                  <Link href="/registeruser" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    );
}