import axios from 'axios';
import { useState, useEffect } from "react";
import SetOption from '../util/SetOption';

const useGet = (endpoint) => {
    const baseURL = SetOption('url');
    const url = baseURL+endpoint;

    var [content, setContent] = useState([]);
    var [isPending,setIsPending] = useState(true);
    var [error,setError] = useState(null);

    useEffect(() =>
    {
        axios
        .get(url)
        .then((res) => {
            setContent(res.data);
            setIsPending = false;
        }
            )
        .catch((err) => {
            setError(err.message);
        }
            );

    },[endpoint])



    return {content, isPending, error};
 
}

 
export default useGet;