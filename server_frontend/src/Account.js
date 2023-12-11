import ApiFetch from "./hooks/ApiFetch";
import SetOption from "./util/SetOption";
import useLocalStorage from "./hooks/useLocalStorage";
import UploadBtn from "./component/UploadBtn";
import { useState } from "react";

const Account = () => {
    const [storedValue, setStoredValue, clearStoredValue] = useLocalStorage('loginSession', '1');
    const currentUrl = SetOption("url")+"/account/user/"+storedValue
    const [uploadError, setUploadError] = useState(null);
    const [responseData, setResponseData] = useState('Empty');

    const handleUploadError = (error) => {
    setUploadError(error);
  };

    const handleResponseData = (data) => {
    setResponseData(data);
  };


    
    return (  
        <>
        <ApiFetch url={currentUrl} method="GET">
            {({ responseData, loading }) => (
                <div>
                    {/* Your component JSX */}
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <pre>{JSON.stringify(responseData, null, 2)}</pre>
                    )}
                </div>
            )}
        </ApiFetch>
        <UploadBtn
        onUploadError={handleUploadError}
        onResponseData={handleResponseData}
      />
      <p>Upload Error: {uploadError}</p>
      <p>Response Data: {responseData}</p>
            
            </>
    );
}
 
export default Account;