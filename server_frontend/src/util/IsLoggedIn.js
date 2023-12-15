
const IsLoggedIn = () => {
    const localData = window.JSON.parse(localStorage.getItem('loginSession'));
    let isLoggedin = false;
    if(localData && localData.id>=1){
      //console.log("Current user :",localData)
      isLoggedin = true

    }
    return isLoggedin;
  }
    
export default IsLoggedIn;