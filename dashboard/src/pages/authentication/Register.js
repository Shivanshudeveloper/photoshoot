import { Link as RouterLink } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Card, Link, Container, Typography, Tooltip } from '@material-ui/core';
// hooks
import useAuth from '../../hooks/useAuth';
// routes
import { PATH_AUTH } from '../../routes/paths';
// layouts
import AuthLayout from '../../layouts/AuthLayout';
// components
import Page from '../../components/Page';
import { MHidden } from '../../components/@material-extend';
import { RegisterForm } from '../../components/authentication/register';
import AuthFirebaseSocials from '../../components/authentication/AuthFirebaseSocial';
import Settings from '../../components/settings';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),

  backgroundImage: 'url("https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621399609/photoshooted/background_lv9tfq.svg")',
  backgroundSize: 'cover',
  backgroundPosition: 'right',
  backgroundRepeat: 'no-repeat',

  padding: '0 2% 0 2%'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Register() {
  const { method } = useAuth();

  return (
    <RootStyle title="Register | Photoshooted">
      <Settings />
      <AuthLayout>
        <span style={{ fontFamily: "VarelaRound" }}>
          Already have an account? &nbsp;
        </span>
        <Link style={{ fontFamily: "VarelaRound" }} underline="none" variant="subtitle2" component={RouterLink} to={PATH_AUTH.login}>
          Login
        </Link>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
          <img alt="register" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1620378009/photoshooted/Photoshooted_logo_white_bg96p5.png" />
        </SectionStyle>
      </MHidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
            <Box style={{textAlign: 'center', color: 'rgb(104, 82, 237)'}} sx={{ flexGrow: 1 }}>
              <Typography className="forheadingscolors" style={{fontFamily: "'Varela Round', sans-serif"}} variant="h4" gutterBottom>
                Get started absolutely free.
              </Typography>
              <Typography style={{ fontFamily: "VarelaRound" }} sx={{ color: 'text.secondary' }}>Free forever. No credit card needed.</Typography>
            </Box>
            {/* <Tooltip title={(method === 'firebase' && 'Firebase') || (method === 'cognito' && 'Cognito') || 'JWT'}>
              <Box
                component="img"
                src={`/static/auth/${
                  (method === 'firebase' && 'ic_firebase') || (method === 'cognito' && 'ic_cognito') || 'ic_jwt'
                }.png`}
                sx={{ width: 32, height: 32 }}
              />
            </Tooltip> */}
          </Box>

          {method === 'firebase' && <AuthFirebaseSocials />}

          <RegisterForm />

          <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
            By registering, I agree to Photoshooted&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Terms of Service
            </Link>
            &nbsp;and&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Privacy Policy
            </Link>
            .
          </Typography>

          <MHidden width="smUp">
            <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
              Already have an account?&nbsp;
              <Link to={PATH_AUTH.login} component={RouterLink}>
                Login
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
