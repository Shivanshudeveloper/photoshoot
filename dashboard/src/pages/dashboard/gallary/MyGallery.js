import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Settings from '../../../components/settings';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 'auto',
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function MyGallary() {
    const classes = useStyles();
    const [openGallery, setOpenGallery] = React.useState(false);
    const handleClickOpenGallery = () => {
        setOpenGallery(true);
    };
    const handleCloseGallery = () => {
        setOpenGallery(false);
    };

    return (
        <>
        <Settings />
            <Dialog
                open={openGallery}
                onClose={handleCloseGallery}
                fullWidth
                maxWidth="sm"
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                New gallery
                </DialogTitle>
                <DialogContent>
                    <TextField style={{ marginTop: '20px' }} fullWidth id="outlined-basic" label="Gallery Name" variant="outlined" />

                    <TextField style={{ marginTop: '20px' }} fullWidth id="outlined-basic" label="Gallery Price" variant="outlined" />

                    <TextField
                        id="standard-multiline-static"
                        fullWidth
                        label="Description (Opstional)"
                        multiline
                        rows={4}
                        style={{ marginTop: '20px' }}
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleCloseGallery}>Close</Button>
                <Button onClick={handleCloseGallery} autoFocus>
                    Submit
                </Button>
                </DialogActions>
            </Dialog>


            <h2>
                My Galleries
            </h2>
            
            <Container style={{ marginTop: '10px' }} maxWidth="mx">
                <Grid container spacing={3}>
                    <Grid item xs={5} sm={4}>
                        <Paper elevation={3} className={classes.paper}>
                            <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="complex" src="https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg" />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                    Gallery 1
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                    Code: 103-012
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    <a style={{ textDecoration: 'none' }} href="/dashboard/viewgallery">
                                        View Gallery Pictures
                                    </a>
                                    </Typography>
                                </Grid>
                                </Grid>
                                <Grid item>
                                <Typography variant="subtitle1">$19.00</Typography>
                                </Grid>
                            </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={5} sm={4}>
                        <Paper elevation={3} className={classes.paper}>
                            <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="complex" src="https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg" />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                    Gallery 2
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                    Code: 103-012
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <a style={{ textDecoration: 'none' }} href="/dashboard/viewgallery">
                                        View Gallery Pictures
                                    </a>
                                </Grid>
                                </Grid>
                                <Grid item>
                                <Typography variant="subtitle1">$19.00</Typography>
                                </Grid>
                            </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={5} sm={4}>
                        <Paper elevation={3} className={classes.paper}>
                            <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="complex" src="https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg" />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                    Gallery 3
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                    Code: 103-012
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <a style={{ textDecoration: 'none' }} href="/dashboard/viewgallery">
                                        View Gallery Pictures
                                    </a>
                                </Grid>
                                </Grid>
                                <Grid item>
                                <Typography variant="subtitle1">$19.00</Typography>
                                </Grid>
                            </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={5} sm={4}>
                        <Paper elevation={3} className={classes.paper}>
                            <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="complex" src="https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg" />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                    Gallery 4
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                    Code: 103-012
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <a style={{ textDecoration: 'none' }} href="/dashboard/viewgallery">
                                        View Gallery Pictures
                                    </a>
                                </Grid>
                                </Grid>
                                <Grid item>
                                <Typography variant="subtitle1">$19.00</Typography>
                                </Grid>
                            </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                
            </Container>
        </>
    )
}
