import React from 'react';
import TextField from '@material-ui/core/TextField';


const Login = () => {
    const [email, setemail] = React.useState('');
    const [password, setpassword] = React.useState('');

    const login = () => {
        if (email === "test" && password === "1234567890") {
            window.location.href = "/dashboard";
        } else {
            alert("Wrong Credentials");
        }
    }

    return (
        <>
        <div class="container-scroller d-flex">
            <div class="container-fluid page-body-wrapper full-page-wrapper d-flex">
            <div class="content-wrapper d-flex align-items-stretch auth auth-img-bg">
                <div class="row flex-grow">
                <div class="col-lg-6 d-flex align-items-center justify-content-center">
                    <div class="auth-form-transparent text-left p-3">
                    <div class="brand-logo">
                        <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1620378077/photoshooted/Photoshooted_A_u2hjii.png" alt="logo" />
                    </div>
                    <h4>Welcome back!</h4>
                    <h6 class="font-weight-light">Happy to see you again!</h6>
                    <form class="pt-3">
                        <div class="form-group">
                        <div class="input-group">
                            <TextField fullWidth onChange={(e) => setemail(e.target.value)} id="outlined-basic" label="Username" variant="outlined" />
                        </div>
                        </div>
                        <div class="form-group">
                        <div class="input-group">
                            <TextField type="password" fullWidth onChange={(e) => setpassword(e.target.value)} id="outlined-basic" label="Password" variant="outlined" />
                        </div>
                        </div>
                        <div class="my-2 d-flex justify-content-between align-items-center">
                        <div class="form-check">
                            <label class="form-check-label text-muted">
                            <input type="checkbox" class="form-check-input" />
                            Keep me signed in
                            </label>
                        </div>
                        <a href="#" class="auth-link text-black">Forgot password?</a>
                        </div>
                        <div class="my-3">
                        <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={login} href="#!">LOGIN</a>
                        </div>
                        <div class="mb-2 d-flex">
                        <button type="button" class="btn btn-facebook auth-form-btn flex-grow mr-1">
                            <i class="mdi mdi-facebook mr-2"></i>Facebook
                        </button>
                        <button type="button" class="btn btn-google auth-form-btn flex-grow ml-1">
                            <i class="mdi mdi-google mr-2"></i>Google
                        </button>
                        </div>
                        <div class="text-center mt-4 font-weight-light">
                        Don't have an account? <a href="/register" class="text-primary">Create</a>
                        </div>
                    </form>
                    </div>
                </div>
                <div class="col-lg-6 login-half-bg d-none d-lg-flex flex-row">
                    <p class="text-white font-weight-medium text-center flex-grow align-self-end">Copyright &copy; 2021  All rights reserved.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Login
