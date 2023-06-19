import React from "react";
import { useEffect } from "react";
// dom
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/PreEntrega2-OvejeroLeturia");
    }, 5000);
  }, [navigate]);

  return (
    <div className="text-center m-5">
      <h1>
        <strong>Error. Page not found.</strong>
      </h1>
      <p>You will be redirected to the homepage soon...</p>
    </div>
  );
};

export default ErrorPage;
