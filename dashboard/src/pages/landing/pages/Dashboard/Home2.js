import React from 'react';
import { Helmet } from "react-helmet";
import Header from '../../components/DashboardHeader2';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { API_SERVICE } from '../../config/URI';
import queryString from 'query-string';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
                    <br />
                    Price: € {ordersphoto.price}
                </center>
            </div>
        </div>
    )
}


const Home2 = ({ location }) => {
    const classes = useStyles();
    var userId = "user1234";
    const [loading, setloading] = React.useState(false);
    const [ordersphotos, setordersphotos] = React.useState([]);
    const [ordernumber, setordernumber] = React.useState('');

    React.useEffect(() => {
        const { n } = queryString.parse(location.search);
        var on = sessionStorage.getItem("ordernumber");
        getOrders(on);
        setordernumber(on);
    }, []);

    const getOrders = (n) => {
        setloading(true);
        axios.get(`${API_SERVICE}/api/v1/main/getorderdetailsphotos/${n}`)
            .then((response) => {
                setordersphotos(response.data);
                setloading(false);
            }).catch(err => console.log(err));
    }


    const showOrderList = () => {
        return ordersphotos.map(ordersphoto => {
            return <OrderList ordersphoto={ordersphoto} key={ordersphoto._id} />
        })
    }

    return (
        <>  
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
                    Welcome Back {sessionStorage.getItem("fullname")}
                </h1>
                <h4 className="mb-5" style={{ color: '#7527e0' }}>
                    Please select your photos for edit
                </h4>
                {
                    loading === true ? (
                        <center style={{ marginTop: '10%' }}>
                            <CircularProgress />
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

export default Home2
