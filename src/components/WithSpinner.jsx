import React, { useState, useEffect } from "react";

const WithSpinner = (WrappedComponent) => {
  return function SpinnerWrapper(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default WithSpinner;
