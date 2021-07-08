import React from 'react';
import { Helmet } from "react-helmet";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Header from '../../components/DashboardHeader';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import randomize from 'randomatic';
import axios from 'axios';
import { API_SERVICE } from '../../config/URI';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    margin: {
      margin: theme.spacing(1),
    },
}));

const OrderList = ({ order }) => {
    var date = new Date(order.date);
    date = date.toDateString();
    return (
        <TableRow key="1">
            <TableCell component="th" scope="row">
                <a style={{ fontWeight: 'bold', textDecoration: 'none' }} href={`/orderdetails?id=${order._id}&n=${order.ordernumber}`}>
                    # {order.ordernumber} <Chip color="secondary" label="Incomplete" />
                </a>
            </TableCell>
            <TableCell align="right">
                {
                    order.clientname ? order.clientname : "-"
                }
            </TableCell>
            <TableCell align="right">
                { order.payment ? "Completed" : "Not Completed" }
            </TableCell>
            <TableCell align="right">
                { date }
            </TableCell>
        </TableRow>
    )
}


const Home = () => {
    const classes = useStyles();
    var userId = "user1234";
    const [open, setOpen] = React.useState(false);
    const [loading, setloading] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const [ordernumber, setordernumber] = React.useState('');
    const [orders, setorders] = React.useState([]);

    React.useEffect(() => {
        setordernumber(randomize('0', 6));
        getOrders();
    }, []);

    const createOrder = () => {
        var data = {
            ordernumber,
            userId
        }
        axios.post(`${API_SERVICE}/api/v1/main/createorder`, data)
            .then((response) => {
                if (response.status === 200) {
                    handleClose();
                    getOrders();
                }
            }).catch(err => console.log(err));
    }

    const getOrders = () => {
        setloading(true);
        axios.get(`${API_SERVICE}/api/v1/main/getorder/${userId}`)
            .then((response) => {
                setorders(response.data);
                setloading(false);
            }).catch(err => console.log(err));
    }


    const showOrderList = () => {
        return orders.map(order => {
            return <OrderList order={order} key={order._id} />
        })
    }

    return (
        <>  
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
                maxWidth="sm"
                >
                <DialogTitle id="alert-dialog-title">Create Order</DialogTitle>
                <DialogContent>
                    <TextField onChange={(e) => setordernumber(e.target.value)} value={ordernumber} fullWidth id="outlined-basic" label="Order Number" variant="outlined" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                    Close
                    </Button>
                    <Button onClick={createOrder} color="primary" autoFocus>
                    Create
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
                    <img style={{ width: '78px', marginTop: '-10px' }} src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1620377866/photoshooted/Photoshooted_C_vjkhhx-removebg-preview_k0dtve.png" />
                    Welcome Back
                </h1>
                <Button onClick={handleClickOpen} className="mb-2" startIcon={<AddIcon />} style={{ backgroundColor: '#7527e0', color: '#ffffff' }} variant="contained">Create New Order</Button>
                {
                    loading === true ? (
                        <center style={{ marginTop: '10%' }}>
                            <CircularProgress />
                        </center>
                    ) : (
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Order Number</TableCell>
                                    <TableCell align="right">Client</TableCell>
                                    <TableCell align="right">Payment</TableCell>
                                    <TableCell align="right">Date</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {showOrderList()}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )
                }
            </div>
        </>
    )
}

export default Home
