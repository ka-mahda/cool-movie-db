import { useState, useEffect } from "react";
import axios from "axios";

export default function fetchUrl(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  //   const axios = require("axios");

  useEffect(() => {
    axios
      .get("url")
      .then((resp) => {
        setLoading(false);
        // console.log(resp.data);
        setData(resp.data);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      })
      .finaly(() => {
        setLoading(false);
      });
  }, [url]);
  return { data, loading, hasError };
}
