import { Link as RouterLink } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Card, Stack, Link, Alert, Tooltip, Container, Typography, Button } from '@material-ui/core';
// routes
import { PATH_AUTH } from '../../routes/paths';
// hooks
import useAuth from '../../hooks/useAuth';
// layouts
import AuthLayout from '../../layouts/AuthLayout';
// components
import Page from '../../components/Page';
import { MHidden } from '../../components/@material-extend';
import { LoginForm } from '../../components/authentication/login';
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

export default function Login() {
  const { method, login } = useAuth();

  const handleLoginAuth0 = async () => {
    try {
      await login();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RootStyle title="Login | Photoshooted">
      <Settings />
      <AuthLayout>
        Don’t have an account? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to={PATH_AUTH.register}>
          Get started
        </Link>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
          <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1620378009/photoshooted/Photoshooted_logo_white_bg96p5.png" alt="login" />
        </SectionStyle>
      </MHidden>

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
            <Box style={{textAlign: 'center', color: 'rgb(104, 82, 237)'}} sx={{ flexGrow: 1 }}>
              <Typography style={{fontFamily: "'Varela Round', sans-serif"}} variant="h4" gutterBottom>
                Sign in to Photoshooted
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Enter your details below.</Typography>
            </Box>
          </Stack>

          {method === 'firebase' && <AuthFirebaseSocials />}

          {method !== 'auth0' ? (
            <LoginForm />
          ) : (
            <Button fullWidth size="large" type="submit" variant="contained" onClick={handleLoginAuth0}>
              Login
            </Button>
          )}

          <MHidden width="smUp">
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?&nbsp;
              <Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.register}>
                Get started
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
