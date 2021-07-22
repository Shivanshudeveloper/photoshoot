import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { Form, FormikProvider, useFormik } from 'formik';
// material
import { OutlinedInput, FormHelperText, Stack, Button } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// utils
import fakeRequest from '../../../utils/fakeRequest';

import { makeStyles } from '@material-ui/core/styles';
import ReactCodeInput from 'react-verification-code-input';
// ----------------------------------------------------------------------

// eslint-disable-next-line consistent-return
function maxLength(object) {
  if (object.target.value.length > object.target.maxLength) {
    return (object.target.value = object.target.value.slice(0, object.target.maxLength));
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    // borderColor: 'white',
    // borderStyle: 'solid',
    color: 'white'
  }
}));

export default function VerifyCodeForm() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const VerifyCodeSchema = Yup.object().shape({
    code1: Yup.number().required('Code is required'),
    code2: Yup.number().required('Code is required'),
    code3: Yup.number().required('Code is required'),
    code4: Yup.number().required('Code is required'),
    code5: Yup.number().required('Code is required'),
    code6: Yup.number().required('Code is required')
  });

  const formik = useFormik({
    initialValues: {
      code1: '',
      code2: '',
      code3: '',
      code4: '',
      code5: '',
      code6: ''
    },
    validationSchema: VerifyCodeSchema,
    onSubmit: async () => {
      await fakeRequest(500);
      enqueueSnackbar('Verify success', { variant: 'success' });
      navigate(PATH_DASHBOARD.root);
    }
  });

  const { values, errors, isValid, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <div>
    <FormikProvider value={formik}>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2} justifyContent="center">
          {/* {Object.keys(values).map((item) => (
            <OutlinedInput
              className={classes.root}
              key={item}
              {...getFieldProps(item)}
              type="number"
              placeholder="-"
              onInput={maxLength}
              inputProps={{
                maxLength: 1,
                sx: {
                  p: 0,
                  textAlign: 'center',
                  width: { xs: 36, sm: 56 },
                  height: { xs: 36, sm: 56 },
                }
              }}
            />
          ))} */}
          <ReactCodeInput className="forverification" />
        </Stack>

        {/* <FormHelperText error={!isValid} style={{ textAlign: 'right' }}>
          {!isValid && 'Code is required'}
        </FormHelperText> */}

        <Button className ="uk-button-primary2" style={{width: '35%'}} size="large" type="submit" variant="contained" sx={{ mt: 3}}>
          Submit
        </Button>
      </Form>
    </FormikProvider>
    </div>
  );
}
