import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import Dropzone from 'react-dropzone';

import { firestore, storage } from '../Firebase/index';

import { v4 as uuid4 } from 'uuid';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

export default function Gallary() {

    const [file,setFile] = useState([])
    const [getDownloadUrl,setDownloadUrl] = useState()
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState("")

    React.useEffect(() => {
        if (file.length > 0) {
            onSubmit();
        } else {
            console.log("N");
        }
    }, [file]);

    const handleDrop = async (acceptedFiles) => {
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

    return (
        <>
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
            <Dropzone onDrop={handleDrop}>
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: "dropzone" })}>
                        <h1>Upoad Image</h1>
                        <input {...getInputProps()} />
                            <Button size="large" color="primary" variant="contained">Upload</Button>
                    </div>
                )}
            </Dropzone>

            <br />
            <br />
            <Gallery photos={photos} />
        </>
    )
}
