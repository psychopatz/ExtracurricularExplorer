const SetOption = (option) => {
    let selectedOption = "";
    switch (option) {
        case "url":
            selectedOption = "http://127.0.0.1:8080";
            break;

    
        default:
            selectedOption = null;
            break;
    }
     return selectedOption;
    
}

export default SetOption ;