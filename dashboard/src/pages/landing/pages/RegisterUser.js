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

export default function RegisterUser({ location }) {
    const classes = useStyles();

    const [ordernumber, setordernumber] = React.useState('');
    const [fullname, setfullname] = React.useState('');
    const [email, setemail] = React.useState('');
    const [phone, setphone] = React.useState('');
    const [password, setpassword] = React.useState('');

    React.useEffect(() => {
        const { n } = queryString.parse(location.search);
        setordernumber(n);
    }, []);


    const register = () => {
      auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
            var user = result.user;
            user.updateProfile({
                photoURL: "https://kittyinpink.co.uk/wp-content/uploads/2016/12/facebook-default-photo-male_1-1.jpg",
                displayName: `${fullname}`
            })
            .then(() => {
              user.sendEmailVerification().then(function() {
                var data = {
                  fullname,
                  email,
                  phone,
                  ordernumber
                }
                axios.post(`${API_SERVICE}/api/v1/main/createuserinfodata`, data)
                    .then((response) => {
                        if (response.status === 200) {
                          sessionStorage.setItem("type", "user");
                          sessionStorage.setItem("email", email);
                          sessionStorage.setItem("ordernumber", ordernumber);
                          sessionStorage.setItem("fullname", fullname);
                          window.location.href = `/dashboards?n=${ordernumber}`;
                        }
                    }).catch(err => console.log(err));
              }).catch(function(error) {
                  console.log(error);
              });
            })
            .catch(err => console.log(err))
        })
        .catch(function(error) {
            console.log(error);
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
              <h1 className="mb-5" style={{ color: '#7527e0' }}>
                  # {ordernumber}
              </h1>
            <h4 style={{ color: '#7527e0' }}>
              Please register yourself
            </h4>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Full Name"
                name="email"
                value={fullname} 
                onChange={(e) => setfullname(e.target.value)}
                autoComplete="email"
                autoFocus
              />
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
                value={phone} 
                onChange={(e) => setphone(e.target.value)}
                id="email"
                label="Phone No."
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
              <a onClick={register} class="btn btn-block btn-primary mb-2 mt-2 btn-lg font-weight-medium auth-form-btn" href="#!">REGISTER</a>
              <Grid container>
                <Grid item>
                  <Link href="/loginuser" variant="body2">
                    {"Already have an account? Sign In"}
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