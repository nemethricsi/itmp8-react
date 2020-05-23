import React from "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

const KesesekOldal = () => {
  return (
    <>
      <Header title="Késések" />
      <h1>KesesekOldal</h1>
      <Link to="/">Vissza a főoldalra</Link>
    </>
  );
};

export default KesesekOldal;
