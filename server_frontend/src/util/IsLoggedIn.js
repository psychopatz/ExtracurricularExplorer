const IsLoggedIn = () => {
    let isLoggedin = false;
    let loginSession = JSON.parse(localStorage.getItem("loginSession"));
    if( Number(loginSession) >= 1){
        isLoggedin = true;
    }
    console.log("islogged = "+ isLoggedin + loginSession +Number(loginSession))
    return isLoggedin;

  }
    
export default IsLoggedIn;