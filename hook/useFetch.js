import { useState, useEffect } from "react";
import axios from "axios";

let lastRequest = 0;

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
      const elapsed = Date.now() - lastRequest;
      if (elapsed < 1000) {
        // If the elapsed time is less than 1 second, wait for the remaining time before making the request.
        await new Promise(resolve => setTimeout(resolve, 1000 - elapsed));
      }
      setLoading(true);
      const res = await axios.request(options);
      setResponse(res.data.data);
      setLoading(false);
      lastRequest = Date.now();
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setLoading(true);
    fetchData();
  }

  return { response, error, loading, refetch };
}

export default useFetch;
