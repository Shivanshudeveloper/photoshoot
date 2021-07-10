import * as Yup from 'yup';
import React, {useCallback, useState} from 'react'
import { Button, FormHelperText } from '@material-ui/core';
import { Form, FormikProvider, useFormik } from 'formik';
import {  storage } from '../Firebase/index';
import { v4 as uuid4 } from 'uuid';
import { useDispatch, useSelector } from '../../../redux/store';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import {
    ProfileGallery
} from '../../../components/_dashboard/user/profile';
import { getGallery } from '../../../redux/slices/user';
import { UploadSingleFile } from '../../../components/upload';
import fakeRequest from '../../../utils/fakeRequest';
import Settings from '../../../components/settings';


const useStyles = makeStyles({
    root: {
      maxWidth: 'auto',
    },
    media: {
      height: 250,
    },
});

export default function Gallary() {
    const dispatch = useDispatch();
    const [file,setFile] = useState([])
    const [getDownloadUrl,setDownloadUrl] = useState()
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState("");
    const { gallery } = useSelector((state) => state.user);

    const [openGallery, setOpenGallery] = React.useState(false);
    const handleClickOpenGallery = () => {
        setOpenGallery(true);
    };
    const handleCloseGallery = () => {
        setOpenGallery(false);
    };

    const classes = useStyles();
    React.useEffect(() => {
        if (file.length > 0) {
            onSubmit();
        } else {
            console.log("N");
        }
    }, [file]);

    React.useEffect(() => {
        dispatch(getGallery());
    }, [dispatch]);

    const handleDrop2 = async (acceptedFiles) => {
        setFile(acceptedFiles.map(file => file));
    }

    const handleClose = () => {
        setOpen(false)
    }

    const onSubmit = () => {
        if (file.length > 0) {
            file.forEach(file => {
                const timeStamp = Date.now();
                var uniquetwoKey = uuid4();
                uniquetwoKey = uniquetwoKey + timeStamp;
                const uploadTask = storage.ref(`pictures/${uniquetwoKey}/${file.name}`).put(file);
                setOpen(true)
                uploadTask.on('state_changed', (snapshot) => {
                    const progress =  Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setMsg(`Uploading ${progress} %`);
                },
                (error) => {
                    setMsg("error")
                },
                async () => {
                    // When the Storage gets Completed
                    const filePath = await uploadTask.snapshot.ref.getDownloadURL();
                    setMsg('File Uploaded');
                    setDownloadUrl(filePath);
                });
            })
        } else {
            console.log('No File Selected Yet');
        }
    }

    const NewBlogSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        description: Yup.string().required('Description is required'),
        content: Yup.string().min(1000).required('Content is required'),
        cover: Yup.mixed().required('Cover is required')
    });

    const formik = useFormik({
        initialValues: {
          title: '',
          description: '',
          content: '',
          cover: null,
          tags: ['Logan'],
          publish: true,
          comments: true,
          metaTitle: '',
          metaDescription: '',
          metaKeywords: ['Logan']
        },
        validationSchema: NewBlogSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
          try {
            await fakeRequest(500);
            resetForm();
            setSubmitting(false);
          } catch (error) {
            console.error(error);
            setSubmitting(false);
          }
        }
      });

    const { errors, values, touched, handleSubmit, isSubmitting, setFieldValue, getFieldProps } = formik;

    const handleDrop = useCallback(
        (acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            setFieldValue('cover', {
            ...file,
            preview: URL.createObjectURL(file)
            });
        }
        },
        [setFieldValue]
    );

    return (
        <>
        <Settings />
            <Dialog
                open={openGallery}
                onClose={handleCloseGallery}
                fullWidth
                maxWidth="md"
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Upload Photograph
                </DialogTitle>
                <DialogContent>
                    <TextField style={{ marginTop: '20px' }} fullWidth id="outlined-basic" label="Title" variant="outlined" />

                    <div style={{ marginTop: '20px' }}>
                        <small>Upload Photograph</small>
                        <UploadSingleFile
                        maxSize={3145728}
                        accept="image/*"
                        file={values.cover}
                        onDrop={handleDrop}
                        error={Boolean(touched.cover && errors.cover)}
                        />
                        {touched.cover && errors.cover && (
                        <FormHelperText error sx={{ px: 2 }}>
                            {touched.cover && errors.cover}
                        </FormHelperText>
                        )}
                    </div>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleCloseGallery}>Close</Button>
                <Button onClick={handleCloseGallery} autoFocus>
                    Submit
                </Button>
                </DialogActions>
            </Dialog>


            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={msg}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
            <Container style={{ marginTop: '40px' }} maxWidth="mx">
                <Button onClick={handleClickOpenGallery} style={{ float: 'right', marginBottom: '20px' }} variant="contained" >
                    Upload Photograph
                </Button>
                <ProfileGallery gallery={gallery} />
            </Container>
        </>
    )
}
