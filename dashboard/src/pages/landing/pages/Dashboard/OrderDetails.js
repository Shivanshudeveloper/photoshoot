import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";
import Header from '../../components/DashboardHeader';
import axios from 'axios';
import { API_SERVICE } from '../../config/URI';
import queryString from 'query-string';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import BackupIcon from '@material-ui/icons/Backup';
import { DropzoneArea } from 'material-ui-dropzone';
import Snackbar from '@material-ui/core/Snackbar';
import { storage } from '../../Firebase/index';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { v4 as uuid4 } from 'uuid';

const useStyles = makeStyles(theme => createStyles({
    previewChip: {
      minWidth: 160,
      maxWidth: 210
    },
    table: {
        minWidth: 650,
    },
    margin: {
        margin: theme.spacing(1),
    },
}));


const OrderList = ({ ordersphoto }) => {
    return (
        <div class="col-lg-4 col-md-6 col-sm-8">
            <div style={{ height: '222px', padding: '30px' }}>
                <center>
                    <img style={{ width: '100%', height: '200px' }} className="shadow rounded" src={ordersphoto.filePath} />
                </center>
            </div>
        </div>
    )
}

const OrderDetails = ({ location }) => {
    const classes = useStyles();
    var userId = "user1234";
    const [ordernumber, setordernumber] = React.useState('');
    const [orderid, setorderid] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [orders, setorders] = React.useState({});
    const [ordersphotos, setordersphotos] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [loading, setloading] = React.useState(false);
    const [file, setFile] = React.useState([]);
    const [filecounter, setfilecounter] = React.useState(0);

    React.useEffect(() => {
        if (file.length === filecounter) {
            getOrders(orderid, ordernumber);
        }
    }, [filecounter])

    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const handleClickSnackbar = () => {
        setOpenSnackbar(true);
    };
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpenSnackbar(false);
    };

    const onSubmit = () => {
        var i = 0;
        handleClose();
        if (file.length > 0) {
            file.forEach(file => {
                var file_name = file.name; 
                var fileExtension = file_name.split('.').pop();
                if ( fileExtension === 'png' || fileExtension === 'svg' || fileExtension === 'SVG' || fileExtension === 'jpeg' || fileExtension === 'jpg' || fileExtension === 'PNG' || fileExtension === 'JPG' ) {
                    var uniquetwoKey = uuid4();
                    uniquetwoKey = uniquetwoKey + Date.now();
                    const uploadTask = storage.ref(`photos/${uniquetwoKey}/${file.name}`).put(file);
                    uploadTask.on('state_changed', (snapshot) => {
                        const progress =  Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                        handleClickSnackbar();
                        setMessage(`Uploading ${progress} %`);
                    },
                    (error) => {
                        setMessage(error);
                        handleClickSnackbar();
                    },
                    async () => {
                        i = i + 1;
                        // When the Storage gets Completed
                        const filePath = await uploadTask.snapshot.ref.getDownloadURL();
                        handleClickSnackbar();
                        setMessage('File Uploaded');
                        setfilecounter(i);
                        var data = {
                            ordernumber,
                            userId,
                            filePath
                        }
                        axios.post(`${API_SERVICE}/api/v1/main/uploadimage`, data)
                            .then((response) => {
                                
                            }).catch(err => console.log(err));
                    });
                } else {
                    handleClickSnackbar();
                    setMessage('Please Upload Images Only');
                }
            })
        } else {
            setMessage('No File Selected Yet');
        }
    }

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    React.useEffect(() => {
        const { id, n } = queryString.parse(location.search);
        setordernumber(n);
        setorderid(id);
        getOrders(id, n);
    }, []);

    const getOrders = (id, n) => {
        setloading(true);
        axios.get(`${API_SERVICE}/api/v1/main/getorderdetails/${id}`)
            .then((response) => {
                setorders(response.data);
                axios.get(`${API_SERVICE}/api/v1/main/getorderdetailsphotos/${n}`)
                    .then((response) => {
                        setordersphotos(response.data);
                        setloading(false);
                    }).catch(err => console.log(err));
            }).catch(err => console.log(err));
    }


    const showOrderList = () => {
        return ordersphotos.map(ordersphoto => {
            return <OrderList ordersphoto={ordersphoto} key={ordersphoto._id} />
        })
    }

    return (
        <>  
            
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={openSnackbar}
                autoHideDuration={100000}
                onClose={handleCloseSnackbar}
                message={message}
                action={
                <React.Fragment>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
                    <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
                }
            />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
                maxWidth="md"
                >
                <DialogTitle id="alert-dialog-title">Upload Photograph</DialogTitle>
                <DialogContent>
                    <DropzoneArea
                        showPreviews={true}
                        showPreviewsInDropzone={false}
                        useChipsForPreview
                        previewGridProps={{container: { spacing: 1, direction: 'row' }}}
                        previewChipProps={{classes: { root: classes.previewChip } }}
                        previewText="Selected files"
                        maxFileSize={9000000}
                        acceptedFiles={['image/*']}
                        dropzoneText={"Drag and drop an image here or click"}
                        onChange={(files) => setFile(files)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onSubmit} color="primary">
                    Upload
                    </Button>
                    <Button onClick={handleClose} color="primary">
                    Close
                    </Button>
                </DialogActions>
            </Dialog>


            <Helmet>
                <style type="text/css">{`
                    body, html {
                        background-image: url("https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621655212/photoshooted/pricing-faq-bg_puqhws.svg");
                        background-repeat: no-repeat;
                    }
                    
                `}</style>
            </Helmet>

            <Header />
            <div className="container mt-5">
                <h1 className="mb-5" style={{ color: '#7527e0' }}>
                    # {orders.ordernumber}
                </h1>
                
            <Button onClick={handleClickOpen} className="mb-2" startIcon={<BackupIcon />} style={{ backgroundColor: '#7527e0', color: '#ffffff' }} variant="contained">Upload Photographs</Button>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="right">Client</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Payment</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key="1">
                            <TableCell align="right">
                                {
                                    orders.clientname ? orders.clientname : "-"
                                }
                            </TableCell>
                            <TableCell align="right">
                                {
                                    orders.clientemail
                                }
                            </TableCell>
                            <TableCell align="right">
                                {
                                    orders.clinetphone
                                }
                            </TableCell>
                            <TableCell align="right">
                                {
                                    orders.price
                                }
                            </TableCell>
                            <TableCell align="right">
                                { orders.payment ? "Completed" : "Not Completed" }
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
                {
                    loading === true ? (
                        <center style={{ marginTop: '10%' }}>

                        </center>
                    ) : (
                        <div className="row justify-content-center mt-4 mb-5">
                            {showOrderList()}
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default OrderDetails
// joeynywong
// joeynywong@yahoo.com.hk
// horcyq-wihho9-hIkzum