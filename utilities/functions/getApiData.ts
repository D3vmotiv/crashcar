import { useEffect, useState } from "react";
import { apiData } from "../constants/interfaces";

export default (url: string): apiData => {
  const [data, setData] = useState<apiData>({
    content: "",
    isLoading: true,
    error: null,
  });

  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    const makeRequest = async () => {
      const response = await fetch(proxyurl + url);
      return response.text();
    };

    // Asynchronous request to API
    if (data.isLoading) {
      makeRequest()
        .then((r) => {
          setData((prev) => {
            return {
              ...prev,
              isLoading: false,
              content: r,
            };
          });
        })
        .catch((err) => {
          setData((prev) => {
            return {
              ...prev,
              isLoading: false,
              error: err,
            };
          });
        });
    }
  }, [url]);

  return data;
};
