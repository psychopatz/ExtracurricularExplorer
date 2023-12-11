import ApiFetch from "./hooks/ApiFetch";
import SetOption from "./util/SetOption";
import useLocalStorage from "./hooks/useLocalStorage";
import ImageUpload from "./util/ImageUpload";

const Account = () => {
    const [storedValue, setStoredValue, clearStoredValue] = useLocalStorage('loginSession', '1');
    const currentUrl = SetOption("url")+"/account/user/"+storedValue

    
    return (  
        <><ApiFetch url={currentUrl} method="GET">
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
        <ImageUpload/>
            
            </>
    );
}
 
export default Account;