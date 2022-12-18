import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);
  //   const axios = require("axios");

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((resp) => {
        // setLoading(false);
        // console.log(resp.data);
        setData(resp.data);
      })
      .catch((error) => {
        setError(error);
        // setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
  return { data, loading, hasError };
}
