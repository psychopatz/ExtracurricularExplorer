import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    
    
    useEffect(() => {
        window.localStorage.clear();
        navigate('/login');

  }, []);
        
    return (
        <div>
            <p>Logging out Please wait...</p>
            

        </div>
        
      );
}
 
export default Logout;