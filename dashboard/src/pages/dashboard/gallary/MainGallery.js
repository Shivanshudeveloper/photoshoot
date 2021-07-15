import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch } from '../../../redux/store';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Settings from '../../../components/settings';

export default function Gallary() {
    const dispatch = useDispatch();
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
                <DialogTitle className="forheadingscolors" id="alert-dialog-title">
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


            <h2 className="forheadingscolors">
                Photo Galleries
            </h2>
            
            <Container style={{ marginTop: '10px' }} maxWidth="mx">
                <Button onClick={handleClickOpenGallery} style={{ float: 'right', marginBottom: '20px' }} variant="contained" size="medium">
                    Create a new gallery
                </Button>
                
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Gallery Name</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Created on</TableCell>
                            <TableCell align="left">

                            </TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                key="1"
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    My Gallery 1
                                </TableCell>
                                <TableCell align="left">400$</TableCell>
                                <TableCell align="left">21 June 2022</TableCell>
                                <TableCell align="left">
                                    <Button href="/dashboard/viewgallery" variant="outlined" size="medium">
                                        View More
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>

                        <TableBody>
                            <TableRow
                                key="1"
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    My Gallery 2
                                </TableCell>
                                <TableCell align="left">100$</TableCell>
                                <TableCell align="left">21 June 2022</TableCell>
                                <TableCell align="left">
                                    <Button href="/dashboard/viewgallery" variant="outlined" size="medium">
                                        View More
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>

                        <TableBody>
                            <TableRow
                                key="1"
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    My Gallery 3
                                </TableCell>
                                <TableCell align="left">300$</TableCell>
                                <TableCell align="left">21 June 2022</TableCell>
                                <TableCell align="left">
                                    <Button href="/dashboard/viewgallery" variant="outlined" size="medium">
                                        View More
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>

                        <TableBody>
                            <TableRow
                                key="1"
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    My Gallery 4
                                </TableCell>
                                <TableCell align="left">500$</TableCell>
                                <TableCell align="left">21 June 2022</TableCell>
                                <TableCell align="left">
                                    <Button href="/dashboard/viewgallery" variant="outlined" size="medium">
                                        View More
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}
