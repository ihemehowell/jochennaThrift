// src/components/WithSpinner.jsx
import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

const WithSpinner = (WrappedComponent) => {
  return function SpinnerWrapper(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const images = document.querySelectorAll("img");
      let loadedCount = 0;

      if (images.length === 0) {
        setLoading(false);
        return;
      }

      const handleLoad = () => {
        loadedCount += 1;
        if (loadedCount === images.length) setLoading(false);
      };

      images.forEach((img) => {
        if (img.complete) handleLoad();
        else {
          img.addEventListener("load", handleLoad);
          img.addEventListener("error", handleLoad);
        }
      });

      return () => {
        images.forEach((img) => {
          img.removeEventListener("load", handleLoad);
          img.removeEventListener("error", handleLoad);
        });
      };
    }, []);

    if (loading) return <Spinner size={1} border={5} />;

    return <WrappedComponent {...props} />;
  };
};

export default WithSpinner;
