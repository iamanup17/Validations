import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Protected = (props: any) => {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login !== "true") {
      navigate("/");
    }
  });

  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
