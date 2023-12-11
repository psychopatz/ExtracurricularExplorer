import axios from 'axios';

const uploadImage = (fileData, onUploadProgress) => {
  return new Promise(async (resolve, reject) => {
    try {
      const formData = new FormData();
      formData.append('image', fileData);

      const response = await axios.post('http://127.0.0.1:8080/image/fileSystem', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          console.log('Upload progress:', percentCompleted + '%');

          // Additional logging for progressEvent properties kay kapoyg debug
          console.log('loaded:', progressEvent.loaded);
          console.log('total:', progressEvent.total);
          
          onUploadProgress(progressEvent); // Log the progress inside the function
        },
      });

      const responseData = response.data;
      console.log(responseData)
      responseData = responseData.replace('file uploaded successfully : ', '')
      console.log("Filedata:", fileData);
      console.log("onUploadProg:", onUploadProgress); 
      resolve(responseData);
    } catch (error) {
      reject(error);
    }
  });
};

export default uploadImage;
