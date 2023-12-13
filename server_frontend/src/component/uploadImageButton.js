import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";

export default function UploadImageButton({ onHandleFile,buttonText="Upload File" }) {
  const [selectedFile,setSelectedFile] = useState()

  const handleFileUpload = (event) => {
     setSelectedFile(event.target.files[0])
     onHandleFile(selectedFile);
     console.log(selectedFile)
    };



  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor="upload-image">
          <Button variant="contained" component="span">
            {buttonText}
          </Button>
          <input
            id="upload-image"
            hidden
            accept="image/*"
            type="file"
            onChange={handleFileUpload}
          />
        </label>
        
      </Stack>
    </Container>
  );
}