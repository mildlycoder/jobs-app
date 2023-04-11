import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
          'X-RapidAPI-Key': '034d75223fmshe7890a9b4333f17p11d9d6jsn650ed42fe5a0',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    }
    
    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await axios.request(options);
            console.log(res)
            setResponse(res.data.data);
            setLoading(false);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    const refetch = () => {
        setLoading(true);
        fetchData();
    }

    return { response, error, loading, refetch, loading };
}

export default useFetch;
